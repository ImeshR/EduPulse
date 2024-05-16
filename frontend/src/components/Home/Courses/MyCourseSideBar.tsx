import React from 'react';

const MyCourseSideBar = ({ course }) => {
  const { courseId } = course;

  if (!courseId) {
    return null; // Course data not available yet
  }

  return (
    <div className="bg-gray-200 p-4 min-h-screen rounded-lg">
      <h3 className="text-lg mt-8 font-semibold mb-2">{courseId?.name}</h3>
      <ul>
        {courseId.courseContent.map((content, index) => (
          <div key={content._id} className="mb-2">
            <div className="text-blue-600 font-semibold">Step {index + 1}:</div>
            <div className="ml-2">{content.instructions[0]}</div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MyCourseSideBar;
