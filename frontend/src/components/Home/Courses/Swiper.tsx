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
