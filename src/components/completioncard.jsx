import React from "react";

const CompletionCard = (props) => {
  const { decider } = props;
  return (
    <div
    style = {{width: 'max-content'}}
      className={`rounded-md p-1 border-2 m-auto border-none 
            ${
              decider === "complete"
                ? "bg-green-200"
                : decider === "incomplete"
                ? "bg-red-200"
                : "bg-amber-100"
            }
            `}
    >
      {decider === "complete" ? (
        <div className=" text-green-600">Complete</div>
      ) : decider === "incomplete" ? (
        <div className=" text-red-600">Incomplete</div>
      ) : (
        <div className=" text-amber-600">In Progress</div>
      )}
    </div>
  );
};

export default CompletionCard;
