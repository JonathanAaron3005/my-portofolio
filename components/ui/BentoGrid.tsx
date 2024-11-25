import { cn } from "@/lib/utils";
import IconCloud from "./IconCloud";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  isTechSection,
  bgColor,
  img,
  imgClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string;
  isTechSection: boolean;
  bgColor: string;
  img?: string;
  imgClassName?: string;
}) => {
  let wordsArray = description?.split(" ");
  return (
    <div
      className={cn(
        `row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 border-white/[0.2] border justify-between flex flex-col space-y-4 ${bgColor}`,
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-medium text-white mb-2 mt-2 text-xl">
          {title}
        </div>
        <div className="font-sans font-normal text-sm">
          {wordsArray?.map((word, idx) => {
            return (
              <span
                key={word + idx}
                className={` ${
                  (idx === 10 ||
                    idx === 11 ||
                    idx === 12 ||
                    idx === 13 ||
                    idx === 14 ||
                    idx === 16 ||
                    idx === 24 ||
                    idx === 26) &&
                  isTechSection
                    ? "text-purple font-semibold"
                    : "text-zinc-400"
                } `}
              >
                {word}{" "}
              </span>
            );
          })}
        </div>
        <div>
          {isTechSection && (
            <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden px-20 pb-20 pt-8 ">
              <IconCloud iconSlugs={slugs} />
            </div>
          )}
          <div className="w-full h-full absolute">
            {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center ")}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "firebase",
  "docker",
  "git",
  "github",
  "swift",
];
