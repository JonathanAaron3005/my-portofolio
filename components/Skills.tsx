import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { DATA } from "@/data/resume";
import SectionHeading from "./section-heading";

const Skills = () => {
  return (
    <>
      <SectionHeading
        title="My Skills"
        subtitle="I always improve my skills!"
      />

      <BentoGrid className="max-w-5xl mx-auto px-8">
        {DATA.skills.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            isTechSection={i === 0 ? true : false}
            className={
              i === 0 || i === 4
                ? `md:col-span-2 ${i === 0 ? "row-span-2" : ""}`
                : ""
            }
            bgColor="bg-black"
          />
        ))}
      </BentoGrid>
    </>
  );
};

export default Skills;
