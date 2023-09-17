import React from "react";
import TheButton from "./TheButton";

interface resultCardProps {
  dataName: string;
  dataDesc: string;
  main?: boolean;
}

const ResultCard = (props: resultCardProps) => {
  return (
    <div
      className={`relative flex w-80 flex-col rounded-xl border-2 border-neutral-700 bg-white bg-clip-border text-gray-700 shadow-md mt-16 ${
        props.main ? "mb-16" : "justify-end"
      }`}
    >
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 border border-gray-500">
        <img src="/aero.png" alt="" className="w-full h-full" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Tailwind card
        </h5>
        <p className="block font-sans font-light leading-relaxed text-inherit antialiased text-md">
          The Chase Freedom Unlimited is a great option for you. It offers 1.5%
          cash back on all purchases, which is perfect for your interest in cash
          back. Additionally, it has no annual fee and a low intro APR. With
          this card, you can earn cash back on your travel and grocery
          purchases.
        </p>
      </div>
      <div className="p-6 pt-0">
        <TheButton>See More</TheButton>
      </div>
    </div>
  );
};

export default ResultCard;
