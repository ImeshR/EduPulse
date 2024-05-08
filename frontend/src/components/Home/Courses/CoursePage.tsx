import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import SingleAbsolute from "./CourseAbsolute";
import { useParams } from "react-router-dom";

const CoursePage = () => {
  // Example data, replace with actual data fetching
  const { id } = useParams<{ id: string }>();
  const courseData = {
    _id: id,
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
    author: "John Doe",
    rating: 4.8,
    ratingsCount: 12866,
    studentsCount: 69107,
    lastUpdated: "5/2023",
    language: "English",
    autoLanguages: ["English", "Arabic"],
    moreLanguagesCount: 12,
  };

  const props = {
    onOpen: () => {}, // Placeholder function
    price: courseData.price,
    img: courseData.img,
  };

  return (
    <div>
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-full bg-neutral-800 flex justify-center p-5">
          <div
            style={{ paddingTop: "100px" }}
            className="xl:max-h-[320px] px-2  max-w-[598px] xl:max-w-[900px]"
          >
            <div className="xl:flex xl:space-x-4">
              <Box className="my-8">
                <Box
                  className="outerBox"
                  color="white"
                  width="100%"
                  fontFamily="sans-serif"
                >
                  <Box className="space-y-2">
                    <Box className="title" fontWeight="bold">
                      <Heading as="h3" fontSize="2rem">
                        {courseData.title}
                      </Heading>
                    </Box>

                    <Box className="description text-[16px] font-thin" w="40vw">
                      {courseData.description}
                    </Box>

                    <Box className="rating space-x-2" display="flex" fontWeight="5px">
                      <Box className="text-yellow-300 text-xs">{courseData.rating}</Box>
                      <Box className="text-[11px]">⭐⭐⭐⭐</Box>
                      <Box className="flex text-[12px] space-x-2">
                        <Box color="#a435f0">({courseData.ratingsCount} ratings)</Box>
                        <Box>{courseData.studentsCount} students</Box>
                      </Box>
                    </Box>

                    <Box className="createdby space-x-2" display="flex">
                      <Box className="text-[12px]">
                        <p>Created by</p>
                      </Box>
                      <Box color="#a435f0" className="text-[12px] underline ">
                        {courseData.author}
                      </Box>
                    </Box>

                    <Box className="text-[12px] space-x-4" display="flex">
                      <Box>🌗 Last updated {courseData.lastUpdated}</Box>
                      <Box>🌐 {courseData.language}</Box>
                      <Box display="flex">
                        ⌨️ {courseData.autoLanguages.join("[Auto], ")}{" , "}
                        <Box color="#a435f0">{courseData.moreLanguagesCount} more</Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <div className="mt-6  mb-20 z-50">
                <SingleAbsolute props={props} />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[598px] h-[500px] xl:mr-72"></div>
        <Box mt="1rem" bg="#D7DBDD" w="95%" p="5">
          <Heading size="xl">{courseData.title}</Heading>
          <Box mt="1rem">
            <Heading size="md">Teacher: {courseData.author}</Heading>
          </Box>
          <Box mt="1rem">
            <Heading size="md">Course Created: {courseData.lastUpdated}</Heading>
          </Box>
          <Box mt="1rem">
            <Heading size="md">Total Videos: 10</Heading>
          </Box>
        </Box>

        <Box mt="40px"></Box>

        <div></div>
        <Box></Box>
      </div>
    </div>
  );
};

export default CoursePage;
