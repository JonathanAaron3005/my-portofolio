import { HoverEffect } from "./ui/card-hover-effect";
import SectionHeading from "./section-heading";
import { DATA } from "@/data/resume";

export function Projects() {
  return (
    <div>
      <SectionHeading
        title="My Projects"
        subtitle="Building things with love!"
      />
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={DATA.projects} />
      </div>
    </div>
  );
}
