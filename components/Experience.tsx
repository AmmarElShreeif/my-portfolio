import React from "react";
import { Button } from "./ui/movingBorder";
import { Experiences } from "@/data";
import Skills from "./ui/Skills";

const Experience = () => {
 return (
  <div className="py-20 w-full" id="experience">
   <h1 className="heading">
    My <span className="text-red-100">Experience</span>
   </h1>
   <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
    {Experiences.map((card) => (
     <Button
      key={card.id}
      duration={Math.floor(Math.random() * 10000) + 10000}
      borderRadius="1.75rem"
      style={{
       background: "rgba(24, 0, 0, 0.016)",
       backgroundColor:
        "linear-gradient(90deg, rgb(29, 4, 4) 0%,rgb(35, 12, 12) 100%)",
       borderRadius: `calc(1.75rem* 0.96)`,
      }}
      className="flex-1 text-black dark:text-white border-neutral-200 dark:border-red-100/30"
     >
      <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
       <img
        src={card.thumbnail}
        alt={card.thumbnail}
        className="lg:w-32 md:w-20 w-16"
       />
       <div className="lg:ms-5">
        <h1 className="text-start text-xl md:text-2xl font-bold">
         {card.title}
        </h1>
        <p className="text-start text-white-100 mt-3 font-semibold">
         {card.desc}
        </p>
       </div>
      </div>
     </Button>
    ))}
   </div>
   <Skills />
  </div>
 );
};

export default Experience;
