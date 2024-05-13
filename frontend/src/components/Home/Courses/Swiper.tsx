import React from "react";
import { Flex } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Swiper.css";
import Card from "./Card";

export default function Swiper() {
  const dummyData = [
    {
      _id: 1,
      name: "React Course",
      category: "Web Development",
      description: "Learn React for building modern web applications.",
      course: "React",
      img: "/react.png",
    
    },
    {
      _id: 2,
      name: "JavaScript Course",
      category: "Web Development",
      description: "Master JavaScript for frontend and backend development.",
      course: "JavaScript",
      img: "/js.png",
     

    },
    {
      _id: 3,
      name: "AWS Course",
      category: "Cloud Computing",
      description: "Become proficient in AWS cloud services.",
      course: "AWS",
      img: "/aws.png",
    },
    {
      _id: 3,
      name: "Html",
      category: "Web Development",
      description: "Learn HTML for building web pages.",
      img: "/html.png",
    },
    {
      _id: 4,
      name: "HTML/CSS/JS Course",
      category: "Web Development",
      description: "Learn the basics of web development with HTML, CSS, and JavaScript.",
      course: "HTML/CSS/JS",
      img: "/htmlcssjs.png",
    },
    {
      _id: 5,
      name: "PHP Course",
      category: "Web Development",
      description: "Master PHP for server-side web development.",
      course: "PHP",
      img: "/php.png",
    },
    {
      _id: 6,
      name: "Java Course",
      category: "Software Development",
      description: "Learn Java programming for building applications.",
      course: "Java",
      img: "/java.png",
    },
    {
      _id: 7,
      name: "C++ Course",
      category: "Software Development",
      description: "Master C++ programming for system and application development.",
      course: "C++",
      img: "/c++.png",
    },
    {
      _id: 8,
      name: "Docker Course",
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
    <Flex direction="column" width="80%" p="20px" m="auto">
      <Slider {...settings}>
        {dummyData.map((el) => (
          <Card {...el} key={el._id} />
        ))}
      </Slider>
    </Flex>
    </div>
  );
}
