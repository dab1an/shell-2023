import React from "react";
import ResultCard from "../_components/ResultCard";
import cardInfo from "./cardInfo";
const page = () => {
  return (
    <div className="bg-[#fffff0] flex items-center ">
      <div className="flex flex-col">
        <h1>Catalogue</h1>
        <div className="flex flex-wrap gap-5 justify-center p-4">
          {cardInfo.map((e, i) => {
            return (
              <ResultCard
                key={i}
                dataName={e.name}
                dataDesc={""}
                cardImg={e.url}
                main={false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
