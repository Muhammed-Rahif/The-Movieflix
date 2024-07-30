import { Button } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

const navs = [
  {
    icon: "home",
    label: "Home",
    href: "/",
  },
  {
    icon: "search",
    label: "Search",
    href: "/search",
  },
  {
    icon: "film",
    label: "Recent",
    href: "/recent",
  },
  {
    icon: "person",
    label: "Profile",
    href: "/profile",
  },
];

export default function BottomNavBar() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-1/2 right-0 flex w-full -translate-x-1/2 justify-between gap-2 rounded-t-3xl bg-accent p-4 pt-5 shadow-[0_0_24px_0_rgba(0,0,0,.7)] [-webkit-backface-visibility:hidden] sm:max-w-sm">
      {navs.map(({ icon, label, href }, i) => {
        const isActive = location.pathname == href;

        return (
          <Link to={href} className="no-underline" key={i}>
            <Button
              key={icon}
              className={`flex items-center justify-between rounded-full duration-300 ${isActive ? "" : "bg-transparent text-white"}`}
              variant={isActive ? "filled" : "text"}
              size="sm"
            >
              <i className={`eva eva-${icon} text-xl`} />
              <span className={`duration-300 ${isActive ? "w-16" : "w-0"}`}>
                {isActive && label}
              </span>
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
