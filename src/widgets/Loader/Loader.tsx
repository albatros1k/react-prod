import { classNames } from "shared/lib/classNames";
import { Loader } from "shared/ui/Loader/Loader";
import cls from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(cls.page__loader, {}, [className])}>
      <Loader />
    </div>
  );
};
