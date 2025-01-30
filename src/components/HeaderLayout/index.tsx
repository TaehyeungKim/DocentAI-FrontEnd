import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface IHeaderLayout extends PropsWithChildren {
  className?: string;
}

export const HeaderLayout = ({ children, className }: IHeaderLayout) => {
  return (
    <header
      className={twMerge(
        "flex flex-row py-3 px-5 items-center justify-between",
        className
      )}
    >
      {children}
    </header>
  );
};
