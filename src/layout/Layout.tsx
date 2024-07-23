import { Outlet, useLocation } from "react-router-dom";
import BottomNavBar from "./BottomNavBar";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      {/* http://reactcommunity.org/react-transition-group/with-react-router/ */}
      {/* https://github.com/reactjs/react-transition-group/issues/788#issuecomment-1595264328 */}
      {/* https://codesandbox.io/s/animated-routes-demo-react-router-v6-6l1li */}
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <div
            id="app"
            className="ubuntu-regular container prose prose-invert !max-w-full"
          >
            <Outlet />
          </div>
        </CSSTransition>
      </TransitionGroup>

      {!["/getting-started", "/login"].includes(location.pathname) && (
        <BottomNavBar />
      )}
    </>
  );
}