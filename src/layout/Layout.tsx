import { Outlet, useLocation } from "react-router-dom";
// import BottomNavBar from "./BottomNavBar";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useMemo } from "react";
import { tmdbSessionIdAtom } from "../states/auth";
import { useAtomValue } from "jotai";

export default function Layout() {
  const location = useLocation();
  const sessionId = useAtomValue(tmdbSessionIdAtom);
  const isLoggedIn = useMemo(() => typeof sessionId == "string", [sessionId]);

  return (
    <>
      {/* http://reactcommunity.org/react-transition-group/with-react-router/ */}
      {/* https://github.com/reactjs/react-transition-group/issues/788#issuecomment-1595264328 */}
      {/* https://codesandbox.io/s/animated-routes-demo-react-router-v6-6l1li */}
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <div
            id="app"
            className="ubuntu-regular container prose prose-invert max-w-full [@media(width>=2200px)]:container [@media(width>=2200px)]:mx-auto"
          >
            <Outlet />

            {/* A free space to exclude the bottom nav bar */}
            {isLoggedIn && <div className="block h-[100px]" />}
          </div>
        </CSSTransition>
      </TransitionGroup>

      {/* {isLoggedIn && <BottomNavBar />} */}
    </>
  );
}
