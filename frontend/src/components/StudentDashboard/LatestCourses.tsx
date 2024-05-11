import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import Card from "../Home/Courses/Card";

const LatestCourses = () => {
  const latestCourses = [
    {
      _id: 1,
      title: "Node.js Course",
      category: "Web Development",
      description: "Learn Node.js for backend development.",
      img: "/nodejs.png",
    },
    {
      _id: 2,
      title: "Python Course",
      category: "Software Development",
      description: "Master Python programming for various applications.",
      img: "/python.png",
    },
    {
      _id: 3,
      title: "React Native Course",
      category: "Mobile Development",
      description: "Build mobile apps with React Native.",
      img: "/react-native.png",
    },
    {
      _id: 4,
      title: "Machine Learning Course",
      category: "Data Science",
      description: "Explore machine learning algorithms and techniques.",
      img: "/machine-learning.png",
    },
  ];

  const showMoreHandler = () => {
    // Assuming you use React Router for routing
    // Replace '/allcourses' with the actual route to the AllCourses page
    window.location.href = '/allcourses';
  };

  return (
    <div className="mt-10 min-h-screen">
      <h1 className="text-4xl  text-gray-700 font-extrabold px-20">Recomand For you</h1>
      <Flex justifyContent="center" mt={4}>
        {latestCourses.slice(0, 4).map(course => (
          <Box key={course._id} width="250px" height="450px" m={2}>
            <Card {...course} />
          </Box>
        ))}
      </Flex>
      <Flex justifyContent="center" mt={4}>
        <Button colorScheme="blue" onClick={showMoreHandler}>
          Show More
        </Button>
      </Flex>
    </div>
  );
};

export default LatestCourses;