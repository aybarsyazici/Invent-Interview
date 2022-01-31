import { FunctionComponent, useState } from "react";
import Header from "./Header";
import classnames from "classnames";


interface LayoutProps {

}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const [minimized, setMinimized] = useState(false);

  const mainCls = classnames("main", { "main--maximized": minimized });

  return (
    <>
      <Header minimized={minimized} setMinimized={setMinimized} />
      <main className={mainCls}>
        {children}
      </main>
    </>
  );
};

export default Layout;
