import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import SingleAbsolute from "./CourseAbsolute";
import { useParams } from "react-router-dom";

const CoursePage = () => {
  // Example data, replace with actual data fetching
  const { id } = useParams<{ id: string }>();
  const courseData = {
    _id: id,
    name: "React Course",
    category: "Web Development",
    description: "Learn React for building modern web applications Learn React for building modern web applications Learn React for building modern web applications Learn React for building modern web applications Learn React for building modern web applications.",
    img: "/react.png",
    summary: [
      "Build enterprise level Node applications and deploy to the cloud (AWS)",
      "Work with real life data and SpaceX API to build a NASA launch system, discover new planets that may contain life + other projects",
      "Become the top 10% Node Developer. Learn REALLY advanced topics!",
      "Learn to build secure and performant, large scale applications like a senior backend developer",
      "Authentication, File I/O, Databases (SQL, MongoDB), Express Framework, Sockets, plus many other important topics a backend developer should know",
      "Focus on security best practices throughout the course so you can be confident with your deployments"
    ],
    price: 100,
    author: "John Doe",
    rating: 4.8,
    ratingsCount: 12866,
    studentsCount: 69107,
    duration: "16hr",
    language: "English",
    autoLanguages: ["English", "Arabic"],
    moreLanguagesCount: 12,
  };

  const props = {
    onOpen: () => { }, // Placeholder function
    price: courseData.price,
    img: courseData.img,
  };

  return (
    <div  className="bg-blue-50">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-full bg-neutral-800 flex justify-center p-5">
          <div
            style={{ paddingTop: "10px" }}
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
                        {courseData.name}
                      </Heading>
                    </Box>

                    <Box className="description text-[16px] font-thin" w="40vw">
                      {courseData.description}
                    </Box>

                    <Box className="rating space-x-2" display="flex" fontWeight="5px">
                      <Box className="text-yellow-300 text-xs">{courseData.rating}</Box>
                      <Box className="text-[11px]">⭐⭐⭐⭐</Box>
                      <Box className="flex text-[12px] space-x-2">
                        <Box className="text-blue-500">({courseData.ratingsCount} ratings)</Box>
                        <Box>{courseData.studentsCount} students</Box>
                      </Box>
                    </Box>

                    <Box className="createdby space-x-2" display="flex">
                      <Box className="text-[12px] ">
                        <p>Created by</p>
                      </Box>
                      <Box className="text-[12px] underline text-blue-500">
                        {courseData.author}
                      </Box>
                    </Box> 

                    <Box className="text-[12px]  space-x-4" display="flex">
                      <Box>🌗 Course Duration {courseData.duration}</Box>
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

      
       


        {/* What you learn component*/}

        <div className="xl:mr-24 mt-10">
          <div className="max-w-[598px] xl:mr-96">
            <div className="border my-5 py-5 max-w-[598px] p-4 shadow-md border-slate-100 text-black bg-white">

              <div className="py-2">
                <h3 className="text-lg font-bold pb-4">What you'll learn</h3>
              </div>
              <div className="grid font-semibold text-slate-700 grid-cols-1 sm:grid-cols-2 gap-y-1.5">
                {courseData.summary.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="text-[12px]">📚</div>
                      <div className="text-[12px]">{item}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="py-2 items-start">
              <h3 className="text-lg font-bold pb-2 mt-4">Course Details</h3>
            </div>
          <div className="flex flex-col  space-y-2">
              <div className="flex items-center space-x-1">
                <div className="text-[12px] font-semibold">👨‍💻 Author:</div>
                <div className="text-[12px]">{courseData.author}</div>
              </div>
              <div className="flex items-center space-x-1">
                <div className="text-[12px] font-semibold">🖊️ Title:</div>
                <div className="text-[12px]">{courseData.name}</div>
              </div>
              <div className="flex items-center space-x-1">
                <div className="text-[12px] font-semibold">🕔 Last updated:</div>
                <div className="text-[12px]">{courseData.duration}</div>
             </div>
            </div>

            </div>
          </div>
        </div>

        



      

        <Box mt="40px"></Box>

        <div></div>
        <Box></Box>
      </div>
    </div>
  );
};

export default CoursePage;
