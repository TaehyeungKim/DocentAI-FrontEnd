import React from "react";
import { KakaoLoginButton } from "./LoginButton";

interface LandingEllipsesProps {
  className: string;
  style?: React.CSSProperties;
}

export function LandingEllipses({ className, style }: LandingEllipsesProps) {
  return (
    <div
      className={`${className} rounded-full absolute border-[1px] aspect-square opacity-50`}
      style={style}
    ></div>
  );
}

export const LandingLoginButtons = () => {
  return (
    <div className="flex flex-col w-[80%]">
      <KakaoLoginButton />
    </div>
  );
};
