import Marquee from "react-fast-marquee";
import Image from "next/image";
import { logos } from "@/data";

export default function Skills() {
 return (
  <div className="relative py-8">
   <Marquee speed={100} gradientColor="black" gradient={true}>
    {logos.map((logo, index) => (
     <div key={index} className="mx-7">
      <Image
       src={logo.image}
       alt={`Skill Logo ${index + 1}`}
       width={logo.width}
       height={64}
       className="object-contain opacity-50"
      />
     </div>
    ))}
   </Marquee>
  </div>
 );
}
