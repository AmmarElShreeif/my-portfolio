"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import contactAnimation from "../animation/contact.json";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import axios from "axios";

const Contact = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");
 const handlSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const serverId = "service_n3aig78";
  const templateId = "template_p2ad9yv";
  const publicKey = "b3AiJj44hN8xWuf31";

  const templateParams = {
   from_name: name,
   from_email: email,
   to_name: "Ammar",
   message: message,
  };

  emailjs.send(serverId, templateId, templateParams, publicKey).then(
   (res) => {
    console.log("SUCCESS!", res.status, res.text);
    setName("");
    setEmail("");
    setMessage("");
   },
   (error) => {
    console.log("FAILED...", error.text);
   }
  );
 };

 return (
  <div className="py-20" id="contact">
   <div className="container mx-auto px-6">
    <h1 className="heading">
     Contact <span className="text-red-100">Us</span>
    </h1>
    <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl mx-auto space-y-12 lg:space-y-0 lg:space-x-12">
     {/* Form Section */}
     <form
      className="w-full lg:w-2/3 p-10 rounded-lg shadow-lg"
      onSubmit={handlSubmit}
     >
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mb-6">
       <LabelInputContainer>
        <Label htmlFor="username">Username</Label>
        <Input
         required
         id="username"
         placeholder="Enter Your Username"
         type="text"
         value={name}
         onChange={(e) => setName(e.target.value)}
        />
       </LabelInputContainer>
      </div>
      <LabelInputContainer className="mb-6">
       <Label htmlFor="email">Email Address</Label>
       <Input
        required
        id="email"
        placeholder="Enter Your Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
       />
      </LabelInputContainer>
      <LabelInputContainer className="mb-6">
       <Label htmlFor="message">Your Message</Label>
       <textarea
        id="message"
        required
        style={{ backgroundColor: "rgba(24, 0, 0, 0.2)" }}
        placeholder="Enter Your Message"
        className="w-full h-32 px-4 py-3 placeholder:text-neutral-400 dark:placeholder-text-neutral-600  border rounded-lg focus:outline-none focus:ring focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
       />
      </LabelInputContainer>
      <Button
       type="submit"
       variant="secondary"
       className="py-4 px-6 text-sm font-bold"
      >
       Send
      </Button>
     </form>
     {/* Animation Section */}
     <div className="w-full lg:w-1/3 flex items-center justify-center">
      <div className="">
       <Lottie style={{ height: 500 }} animationData={contactAnimation} />
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Contact;

const LabelInputContainer = ({
 children,
 className,
}: {
 children: React.ReactNode;
 className?: string;
}) => {
 return (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
   {children}
  </div>
 );
};
