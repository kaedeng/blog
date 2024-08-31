import React from "react";

interface CodeProps {
  text: React.ReactNode;
}

const InlineCode: React.FC<CodeProps> = ({ text }) => {
  return (
    <div className="rounded-lg flex items-center top-0 bg-[#11111b] w-[100%]">
      <p className="m-2 pl-1 font-mono text-base whitespace-pre-wrap">{text}</p>
    </div>
  );
};

export default InlineCode;
