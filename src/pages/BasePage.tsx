import React from "react";

interface PageProps {
  title: string;
  date: string;
  PageContent: React.ElementType;
}

const BasePage: React.FC<PageProps> = ({ title, date, PageContent }) => {
  return (
    <div className="text-[#bac2de] justify-center mx-auto py-5 px-5">
      <div className="font-Montserrat font-bold text-4xl pb-1">{title}</div>
      <div className=" font-sans font-semibold text-sm pb-4">{date}</div>
      <PageContent />
    </div>
  );
};

export default BasePage;
