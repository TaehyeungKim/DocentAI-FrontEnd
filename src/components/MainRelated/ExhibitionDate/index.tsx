import React from "react";

type ExhibitionDateProps = {
  date: string;
};

const ExhibitionDate: React.FC<ExhibitionDateProps> = ({ date }) => (
  <div className="text-third py-2 text-[15px] font-medium">{date}</div>
);

export default ExhibitionDate;
