import { socialMedia } from "@/data";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="w-full pt-20 pb-10" id="contact">
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Ammar ElShreef
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
