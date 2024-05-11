
import React from 'react'

const MyCourseSideBar = ({ course  }) => {
    const { courseContent } = course;
    return (
        <div className="bg-gray-200 p-4 min-h-screen rounded-lg">
          <h3 className="text-lg mt-8 font-semibold mb-2">Course </h3>
          <ul>
            {courseContent.map((content, index) => (
              <li key={content._id}>
                Step {index + 1}
              </li>
            ))}
          </ul>
        </div>
      );
}
export default MyCourseSideBar;