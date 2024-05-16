import React from "react";
import CourseContent from "../components/Home/Courses/CourseContent";
import MyCourseSideBar from "../components/Home/Courses/MyCourseSideBar";

const MyCourse = () => {

  const course = {
    name: "Java Programming Masterclass",
    description: "Learn Java programming from scratch and become a Java developer.",
    createdBy: "John Doe",
    price: 49.99,
    duration: 45,
    courseContent: [
      {
        videoLink: "https://www.youtube.com/watch?v=KkMDCCdjyW8",
        instructions: ["Watch the video", "Take notes"],
        _id: "663bcd0df519efe13823c884"
      },
      {
        videoLink: "https://www.youtube.com/watch?v=eIrMbAQSU34",
        instructions: ["Watch the video", "Complete exercises"],
        _id: "663bcd0df519efe13823c885"
      },
      {
        videoLink: "https://www.youtube.com/watch?v=jWT-AX9677k",
        instructions: ["Watch the video", "Do coding challenges"],
        _id: "663bcd0df519efe13823c886"
      },
      {
        videoLink: "https://www.youtube.com/watch?v=GoXwIVyNvX0",
        instructions: ["Watch the video", "Work on a project"],
        _id: "663bcd0df519efe13823c887"
      },
      {
        videoLink: "https://www.youtube.com/watch?v=GoXwIVyNvX0",
        instructions: ["Watch the video", "Work on a project"],
        _id: "663bcd0df519efe13823c887"
      }
    ],
    _id: "663bcd0df519efe13823c883",
    __v: 0
  };

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
