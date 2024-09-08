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
    className="w-full max-w-full p-0 flex flex-row justify-start items-stretch gap-4 border-2 border-primary rounded-lg cursor-pointer "
    onClick={onClick}
  >
    <div className="w-[150px] h-full">
      <img
        src={image}
        alt={altText}
        className="w-full h-full object-cover m-0 px-0 py-1"
        style={{ display: "block" }}
      />
    </div>

    <div className="flex flex-col justify-start py-4 px-2">
      <ExhibitionTitle title={title} />
      <ExhibitionDate date={date} />
    </div>
  </div>
);

export default ExhibitionItem;
