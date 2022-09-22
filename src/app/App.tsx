import { Suspense } from "react";

import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

import "./styles/index.scss";
import "shared/config/i18n/i18n";

import { classNames } from "shared/lib/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/NavBar";
import { Sidebar } from "widgets/Sibebar";
import { PageLoader } from "widgets/Loader/Loader";

export const App = () => {
  const [theme] = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
