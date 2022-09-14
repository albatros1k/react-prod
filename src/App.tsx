import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./theme/hooks";

import "./styles/index.scss";
import { AboutAsync } from "./pages/About/index.async";
import { MainAsync } from "./pages/Main/index.async";
import { classNames } from "./helpers/classNames";

export const App = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutAsync />} />
          <Route path={"/"} element={<MainAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
