import React from "react";
import CourseContent from "../components/Home/Courses/CourseContent";
import MyCourseSideBar from "../components/Home/Courses/MyCourseSideBar";

const MyCourse = () => {

  

  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-1">
        <MyCourseSideBar course={course} />
      </div>
      <div className="col-span-4">
        <CourseContent course={course} />
      </div>
    </div>
  );
};

export default MyCourse;
