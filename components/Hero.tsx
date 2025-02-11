import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="pt-36 pb-20">
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-red-200 max-w-80">
            A Passionate MERN Stack Developer
          </p>
          <TextGenerateEffect
            words="Designing and Developing Seamless Digital Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Ammar, a MERN Developer based in Egypt.
          </div>
          <Button variant="outline" size="lg" className="text-xl mt-10">
            <a href='#projects'>View My Projects {<FaLocationArrow />}</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
