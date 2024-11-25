import React from "react";

const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="relative mt-36 mb-10 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h3 className="text-sm font-normal text-white-200 opacity-70 mt-2">
        {subtitle}
      </h3>
    </div>
  );
};

export default SectionHeading;
