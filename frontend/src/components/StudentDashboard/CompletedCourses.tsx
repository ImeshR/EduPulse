import React from "react";
import { Flex } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../components/Home/Courses/Swiper.css";
import Card from "../Home/Courses/Card";
export default function CompletedCourses() {
    
    const dummyData = [
        {
          _id: 1,
          title: "React Course",
          category: "Web Development",
          description: "Learn React for building modern web applications.",
          course: "React",
          img: "/react.png",
          whatYouLearn: [
            "Build a React application from scratch",
            "Learn React hooks",
            "Understand React routing",
            "Build responsive web applications",
          ],
          price: 100,
          Author: "John Doe",
    
        },
        {
          _id: 2,
          title: "JavaScript Course",
          category: "Web Development",
          description: "Master JavaScript for frontend and backend development.",
          course: "JavaScript",
          img: "/js.png",
          whatYouLearn: [
            "Understand JavaScript fundamentals",
            "Learn ES6 features",
            "Build a JavaScript project",
            "Understand JavaScript closures",
          ],
          price: 100,
          Author: "John Doe",
    
    
        },
        {
          _id: 3,
          title: "AWS Course",
          category: "Cloud Computing",
          description: "Become proficient in AWS cloud services.",
          course: "AWS",
          img: "/aws.png",
        },
        {
          _id: 3,
          title: "Html",
          category: "Web Development",
          description: "Learn HTML for building web pages.",
          img: "/html.png",
        },
        {
          _id: 4,
          title: "HTML/CSS/JS Course",
          category: "Web Development",
          description: "Learn the basics of web development with HTML, CSS, and JavaScript.",
          course: "HTML/CSS/JS",
          img: "/htmlcssjs.png",
        },
        {
          _id: 5,
          title: "PHP Course",
          category: "Web Development",
          description: "Master PHP for server-side web development.",
          course: "PHP",
          img: "/php.png",
        },
        {
          _id: 6,
          title: "Java Course",
          category: "Software Development",
          description: "Learn Java programming for building applications.",
          course: "Java",
          img: "/java.png",
        },
        {
          _id: 7,
          title: "C++ Course",
          category: "Software Development",
          description: "Master C++ programming for system and application development.",
          course: "C++",
          img: "/c++.png",
        },
        {
          _id: 8,
          title: "Docker Course",
          category: "DevOps",
          description: "Learn Docker for containerization and deployment.",
          course: "Docker",
          img: "/27.png",
        },
        
      ];
    
      const settings = {
        swipe: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className="mt-10">
        <h1 className="text-4xl text-gray-700   font-extrabold  px-20">Completed Courses</h1>
        <Flex direction="column" width="80%" p="20px" m="auto">
          <Slider {...settings}>
            {dummyData.map((el) => (
              <Card {...el} key={el._id} />
            ))}
          </Slider>
        </Flex>
        </div>
  )
}
