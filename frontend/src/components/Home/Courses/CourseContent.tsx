import React, { useState } from "react";
import { FaFastBackward } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";

const CourseContent = ({ course  }) => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [stepCompleted, setStepCompleted] = useState(false);
  const { courseContent, name } = course;

  const handleComplete = () => {
    setStepCompleted(true);
  };

  const handleBack = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(currentContentIndex - 1);
      setStepCompleted(false);
    }
  };

  const handleNext = () => {
    if (currentContentIndex < courseContent.length - 1 && stepCompleted) {
      setCurrentContentIndex(currentContentIndex + 1);
      setStepCompleted(false);
    }
  };

  return (
    <div className="w-full mx-auto mt-8 p-4 border rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold font-mono mb-4">{name}</h1>
     
      <div className="mb-8">
        <h2 className="text-lg font-mon font-semibold">Content {currentContentIndex + 1}</h2>
        <div className="mb-4">
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${courseContent[currentContentIndex].videoLink.split("=")[1]}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="my-4 text-xl font-mono font-semibold">Instructions:</p>
          <ul>
            {courseContent[currentContentIndex].instructions.map((instruction, i) => (
              <li key={i} className=" font-semibold font-mono">🔴{instruction}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            disabled={currentContentIndex === 0}
            className="bg-blue-500 text-white rounded-xl  px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Back
          </button>
          <button
            onClick={() => setStepCompleted(step => !step)}
            className={`bg-blue-300 rounded-xl text-slate-600 font-semibold px-4 py-2  hover:bg-blue-400 focus:outline-none`}
          >
            {stepCompleted ? 'Incomplete' : 'Complete Step'}
          </button>
          <button
            onClick={handleNext}
            disabled={!stepCompleted}
            className={`bg-blue-500 rounded-xl  text-white px-4 py-2   hover:bg-blue-600  focus:outline-none ${
              stepCompleted ? '' : 'opacity-50 pointer-events-none'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;