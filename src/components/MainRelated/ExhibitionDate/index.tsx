import React from "react";

type ExhibitionDateProps = {
  date: string;
};

const ExhibitionDate: React.FC<ExhibitionDateProps> = ({ date }) => (
  <div className="self-stretch text-third py-2 text-[15px] font-medium leading-[15px]">
    {date}
  </div>
);

export default ExhibitionDate;
