import React from "react";
import ResultCard from "./ResultCard";

const Results = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <ResultCard />
      <ResultCard main={true} />
      <ResultCard />
    </div>
  );
};

export default Results;
