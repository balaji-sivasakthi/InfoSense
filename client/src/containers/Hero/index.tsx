import React from "react";
import Button from "../../components/Button";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 p-[250px]">
      <span className="text-xl text-blue-700 text-center">Meet InfoSense</span>
      <h1 className="text-6xl text-center mb-10">
        Unlock the Power of AI Writing for Exceptional Content.
      </h1>
      <p className="text-gray-200 text-center">
        Revolutionize your content creation with advanced AI. Create exceptional
        content quickly and easily, and gain a leading edge in your industry.
      </p>
      <Button>Try For Free</Button>
    </div>
  );
}

export default Hero;
