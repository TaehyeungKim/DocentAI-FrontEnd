import { ArrowBack } from "@/assets/icons";
import { twMerge } from "tailwind-merge";

interface IBackButton {
  onClickBack: () => void;
  className?: string;
}

export const BackButton = ({ onClickBack, className }: IBackButton) => {
  return (
    <button
      className={twMerge("w-icon aspect-square", className)}
      onClick={onClickBack}
    >
      {ArrowBack()}
    </button>
  );
};
