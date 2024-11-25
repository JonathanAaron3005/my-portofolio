"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Icons } from "@/components/Icons";
import { SiTypescript, SiPostgresql, SiPrisma, SiNestjs } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { FaSwift } from "react-icons/fa6";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    image: string;
    title: string;
    description: string;
    link: string;
    github: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gray-100/[0.3] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImage image={item.image} />
            <div className="p-8">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              {(() => {
                if (item.title === "Kreate") {
                  return <CardTechKreateSection />;
                } else {
                  return <CardTechSection />;
                }
              })()}
              <CardBtn github={item.github} link={item.link} />
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div>{children}</div>
      </div>
    </div>
  );
};
export const CardTechSection = () => {
  return (
    <div className="mt-8 relative flex gap-2">
      <FaSwift size={25} className="text-orange-500" />
    </div>
  );
};
export const CardTechKreateSection = () => {
  return (
    <div className="mt-8 relative flex gap-2">
      <FaSwift size={25} className="text-orange-500" />
      <SiTypescript size={25} className="text-blue-500" />
      <SiPostgresql size={25} className="text-blue-700" />
      <SiPrisma size={25} className="text-yellow-500" />
      <SiNestjs size={25} className="text-red-500" />
      <RiSupabaseFill size={25} className="text-green" />
    </div>
  );
};
export const CardBtn = ({ github, link }: { github: string; link: string }) => {
  return (
    <div className="flex justify-between mt-12 relative">
      <Link
        href={link}
        className="shadow-[inset_0_0_0_1px_#616467] text-neutral-200 text-xs px-5 py-3 rounded-full bg-transparent hover:bg-[#616467] hover:text-white transition duration-200"
      >
        My Journey {">"}
      </Link>
      {github.length !== 0 && (
        <Link
          href={github}
          className="text-center shadow-[inset_0_0_0_1px_#616467] text-neutral-200 text-xs px-3 py-3 rounded-full bg-transparent hover:bg-[#616467] hover:text-white transition duration-200"
        >
          <Icons.github className="size-4" />
        </Link>
      )}
    </div>
  );
};
export const CardImage = ({ image }: { image: string }) => {
  return (
    <div className="h-44 sm:h-60 md:h-44 w-full relative transition duration-500 bg-black/10 group-hover:bg-transparent">
      <Image src={image} alt="thumbnail" layout="fill" objectFit="cover" />
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
