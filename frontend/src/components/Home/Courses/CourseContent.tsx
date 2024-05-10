import React, { useState } from "react";

const CourseContent = () => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const courseContent = [
    {
      videoId: "https://www.youtube.com/watch?v=PRivNnhIFcs&list=PL495mke12zYANEM9p7JT5-99Yx8Z7z_ib&index=2",
      instructions: ["Watch the video", "Take notes"],
    },
    {
      videoId: "https://www.youtube.com/watch?v=PRivNnhIFcs&list=PL495mke12zYANEM9p7JT5-99Yx8Z7z_ib&index=2",
      instructions: ["Watch the video", "Complete exercises"],
    },
    // Add more content as needed
  ];

  const handleComplete = () => {
    if (currentContentIndex < courseContent.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1);
    } else {
      // Handle course completion
    }
  };

  const handleBack = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(currentContentIndex - 1);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 p-4 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Course Content</h1>
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Content {currentContentIndex + 1}</h2>
        <div className="mb-4">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${courseContent[currentContentIndex].videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Instructions:</p>
          <ul>
            {courseContent[currentContentIndex].instructions.map((instruction, i) => (
              <li key={i}>{instruction}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between">
          <button onClick={handleBack} disabled={currentContentIndex === 0} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">
            Back
          </button>
          <button onClick={handleComplete} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">
            {currentContentIndex < courseContent.length - 1 ? "Next" : "Complete Course"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
