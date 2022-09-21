import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";
import { Button, ThemeButton } from "../Button/Button";
import cls from "./LangSwitcher.module.scss";

export enum Languages {
  EN = "en",
  RU = "ru",
}

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => i18n.changeLanguage(i18n.language === Languages.RU ? Languages.EN : Languages.RU);

  return (
    <Button theme={ThemeButton.CLEAR} onClick={toggleLang} className={classNames(cls.LangSwitcher, {}, [className])}>
      {t("Language")}
    </Button>
  );
};
