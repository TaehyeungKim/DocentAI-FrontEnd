import React from "react";

type ExhibitionTitleProps = {
  title: string;
};

const ExhibitionTitle: React.FC<ExhibitionTitleProps> = ({ title }) => (
  <h3 className="text-gray-900 text-base font-medium leading-tight">{title}</h3>
);

export default ExhibitionTitle;
