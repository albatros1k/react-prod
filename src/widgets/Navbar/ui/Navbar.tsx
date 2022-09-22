import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t: tMain } = useTranslation("main");
  const { t: tAbout } = useTranslation("about");

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>
          {tMain("Main")}
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to={"/about"}>
          {tAbout("About")}
        </AppLink>
      </div>
    </div>
  );
};
