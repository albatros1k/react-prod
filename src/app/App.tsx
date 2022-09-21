import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

import "./styles/index.scss";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/NavBar";

export const App = () => {
  const [theme] = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
