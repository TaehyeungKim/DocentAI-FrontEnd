import React from "react";
import ExhibitionPoster from "./../ExhibitionPoster";
import ExhibitionTitle from "./../ExhibitionTitle";
import ExhibitionDate from "./../ExhibitionDate";

type ExhibitionItemProps = {
  image: string;
  altText: string;
  title: string;
  date: string;
  onClick: () => void;
};

const ExhibitionItem: React.FC<ExhibitionItemProps> = ({
  image,
  altText,
  title,
  date,
  onClick,
}) => (
  <div
    className="w-full max-w-full flex flex-col justify-start items-start shadow-[2px_2px_8px_0px_rgba(0,0,0,0.10)] border-2 hover:border-primary rounded-xl cursor-pointer"
    onClick={onClick}
  >
    <div className="w-full h-full">
      <img
        src={image}
        alt={altText}
        className="w-[330px] h-[152px] object-fill py-1"
        style={{ display: "block" }}
      />
    </div>

    <div className="flex flex-col justify-start py-4 px-3">
      <ExhibitionTitle title={title} />
      <ExhibitionDate date={date} />
    </div>
  </div>
);

export default ExhibitionItem;
