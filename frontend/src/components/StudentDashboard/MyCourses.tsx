import React, { useContext, useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../components/Home/Courses/Swiper.css";
import Card from "../Home/Courses/Card";
import { Carousel } from "antd";
import { UserContext } from "../../UserContext";

interface Course {
  _id: string;
  name: string;
  description: string;
  price: string;
  img: string;
}

export default function MyCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const token = localStorage.getItem("token");
  // const user = localStorage.getItem("userData");

  const { user } = useContext(UserContext);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch(`http://localhost:7070/api/courseManagement/enrolledCourses/663fc86076fc281a8476bf90`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        const data = responseData.data;
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    fetchCourses();
  }, [token, user?.id]);

  return (
    (courses.length > 0) ? (
    <div className="mt-10">
      <h1 className="text-4xl text-blue-500   font-extrabold  underline text-center">In Progress Courses</h1>
      <Flex direction="column" width="80%" p="20px" m="auto">
        <Carousel slidesToShow={4}>
          {courses.map((course) => (
            <div key={course._id}>
              <Card
                _id={course._id}
                name={course.name}
                description={course.description}
                price={course.price}
                img={course.img}
              />
            </div>
          ))}
        </Carousel>
      </Flex>
    </div>
    ) : (
      <div className="mt-10">
        <h1 className="text-4xl text-blue-500   font-extrabold  underline text-center">No Courses in Progress</h1>
      </div>
    )
  );
}
