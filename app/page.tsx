import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="w-full relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full flex flex-col justify-center">
        <Hero />
        <Skills />

        <div id="projects">
          <Projects />
        </div>

        <div className="mb-36"></div>

        <div className="absolute top-0 z-40 left-0 h-screen bg-gradient-to-r from-black via-transparent to-transparent lg:w-96 w-0 pointer-events-none" />
        <div className="absolute top-0 z-40 right-0 h-screen bg-gradient-to-l from-black via-transparent to-transparent lg:w-96 w-0 pointer-events-none" />
      </div>
    </main>
  );
}
