"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { BsCheckCircleFill } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handlSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serverId = process.env.NEXT_PUBLIC_SERVER_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serverId || !templateId) {
      throw new Error(
        "NEXT_PUBLIC_SERVER_ID or NEXT_PUBLIC_TEMPLATE_ID environment variable is not set"
      );
    }

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
    setIsSubmitted(true);
  };

  return (
    <div className="py-20" id="contact">
      <div className="container mx-auto px-6">
        <h1 className="heading">
          Contact <span className="text-red-100">Us</span>
        </h1>
        <div className="flex flex-row items-center justify-center max-w-5xl mx-auto space-y-12 lg:space-y-0 lg:space-x-12">
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
                className="w-full h-32 px-4 py-3 placeholder-text-neutral-600  border rounded-lg focus:outline-none focus:ring focus-visible:ring-neutral-600"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </LabelInputContainer>
            <Button
              type="submit"
              variant="secondary"
              className="py-5 w-1/2 mx-auto text-sm font-bold"
            >
              Send
            </Button>
          </form>
          {isSubmitted && (
            <div className="fixed top-4 right-4 transtion z-50 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center animate-fade-in-up">
              <BsCheckCircleFill className="mr-2 text-xl" />
              The form has been sent successfully!
            </div>
          )}
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
