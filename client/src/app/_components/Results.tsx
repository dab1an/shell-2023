import React from "react";
import ResultCard from "./ResultCard";

const Results = ({ data }: any) => {
  console.log(data);

  return (
    <>
      {data && (
        <div className="flex justify-center items-center gap-5">
          <ResultCard
            main={false}
            dataDesc={data.creditCardDescription2}
            dataName={data.creditCardName2}
          />
          <ResultCard
            main={true}
            dataDesc={data.creditCardDescription1}
            dataName={data.creditCardName1}
          />
          <ResultCard
            main={false}
            dataDesc={data.creditCardDescription3}
            dataName={data.creditCardName3}
          />
        </div>
      )}
    </>
  );
};

export default Results;
