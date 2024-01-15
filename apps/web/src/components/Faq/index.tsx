"use client";
import React, { useState } from "react";

interface FAQProps {
  questions: string[];
  answers: string[];
}

function Faq({ questions, answers }: FAQProps): JSX.Element {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleQuestion = (index: number): void => {
    const newExpandedIndices = [...expandedIndices];
    const questionIndex = newExpandedIndices.indexOf(index);

    if (questionIndex === -1) {
      newExpandedIndices.push(index);
    } else {
      newExpandedIndices.splice(questionIndex, 1);
    }

    setExpandedIndices(newExpandedIndices);
  };

  return (
    <div className="flex flex-col items-center justify-center my-40">
      <span className="text-ui-fg-base text-3xl sm:text-4xl font-semibold text-center">
        Frequently asked questions{" "}
      </span>
      <div className="mt-7 text-center">
        <span className="text-gray-500 text-l sm:text-xl font-normal text-center">
          Everything you need to know about the product and billing.{" "}
        </span>
      </div>{" "}
      <div className="flex flex-col justify-center w-3/5 sm:w-2/5 mx-auto mt-16">
        {questions.map((question, index) => (
          // eslint-disable-next-line react/no-array-index-key -- disabling beacuse have provided unique index
          <div className="pb-8 pt-6 border-b" key={`faq-${index}`}>
            <div className="flex items-center justify-between cursor-pointer">
              <div className="font-semibold">{question}</div>
              <div
                onClick={() => {
                  toggleQuestion(index);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    toggleQuestion(index);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                {expandedIndices.includes(index) ? (
                  <svg
                    fill="none"
                    height="25"
                    viewBox="0 0 24 25"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 12.9062H16M22 12.9062C22 18.4291 17.5228 22.9062 12 22.9062C6.47715 22.9062 2 18.4291 2 12.9062C2 7.3834 6.47715 2.90625 12 2.90625C17.5228 2.90625 22 7.3834 22 12.9062Z"
                      stroke="#7F56D9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                ) : (
                  <svg
                    fill="none"
                    height="25"
                    viewBox="0 0 24 25"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8.90625V16.9062M8 12.9062H16M22 12.9062C22 18.4291 17.5228 22.9062 12 22.9062C6.47715 22.9062 2 18.4291 2 12.9062C2 7.3834 6.47715 2.90625 12 2.90625C17.5228 2.90625 22 7.3834 22 12.9062Z"
                      stroke="#7F56D9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </div>
            </div>
            {expandedIndices.includes(index) && (
              <div className="mt-2 text-gray-600">{answers[index]}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
