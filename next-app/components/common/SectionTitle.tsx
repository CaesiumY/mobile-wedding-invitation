import React from "react";

interface SectionTitleProps {
  title: string;
  icon: React.ReactNode;
}

const SectionTitle = ({ title, icon }: SectionTitleProps) => {
  return (
    <h2 className="font-santokki flex flex-row items-center gap-2 whitespace-pre-line text-2xl text-primary">
      {icon} <span>{title}</span>
    </h2>
  );
};

export default SectionTitle;
