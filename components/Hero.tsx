import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { DATA } from "@/data/resume";
import Meteors from "./ui/meteors";
import Particles from "./ui/particles";

const Hero = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl bg-[linear-gradient(to_bottom,rgba(27,24,31,1)_21.2%,rgba(50,4,89,1)_84.8%)]">
      <Meteors number={7} />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div className="container z-10">
        <div className="flex justify-center">
          <p className="text-6xl sm:text-7xl font-bold tracking-tighter text-center mt-8">
            Crafting Ideas into
            <br />
            Digital Solutions
          </p>
        </div>

        <div className="flex justify-center">
          <p className="text-center text-md sm:text-lg mt-8 max-w-md font-light">
            Hi! I&apos;m Aaron 🙋, an iOS developer. I&apos;m an iOS developer
            passionate about crafting digital experiences that elevate the way
            people live and interact with technology every day.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <a href="#projects">
            <MagicButton
              title="View project"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="absolute h-[375px] w-[750px] lg:w-[2400px] lg:h-[1200px] sm:w-[1536px] sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-white top-[calc(100%-92px)] sm:top-[calc(100%-120px)] lg:top-[calc(100%-200px)] -z-10 bg-[radial-gradient(closest-side,#000_90%,#9560EB)] drop-shadow-top-white"></div>
      </div>
    </div>
  );
};

export default Hero;
