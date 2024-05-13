import React from "react";
import { useFormik } from "formik";
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import axios from "axios";

const CreateCourse = () => {
  const initialValues = {
    name: "",
    description: "",
    createdBy: "",
    price: 0,
    duration: 0,
    summary: [],
    courseContent: [{ videoLink: "", instructions: [] }],
  };

  const onSubmit = async (values) => {
    try {
      // Send the form data to the backend API
      const response = await axios.post("http://localhost:7070/api/courseManagement/create", values);
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const addSummaryPoint = () => {
    formik.setFieldValue("summary", [...formik.values.summary, ""]);
  };

  const removeSummaryPoint = (index) => {
    const updatedSummary = [...formik.values.summary];
    updatedSummary.splice(index, 1);
    formik.setFieldValue("summary", updatedSummary);
  };

  const addCourseContent = () => {
    formik.setFieldValue("courseContent", [
      ...formik.values.courseContent,
      { videoLink: "", instructions: [] },
    ]);
  };

  const removeCourseContent = (index) => {
    const updatedCourseContent = [...formik.values.courseContent];
    updatedCourseContent.splice(index, 1);
    formik.setFieldValue("courseContent", updatedCourseContent);
  };

  const addInstruction = (contentIndex) => {
    const updatedCourseContent = [...formik.values.courseContent];
    updatedCourseContent[contentIndex].instructions.push("");
    formik.setFieldValue("courseContent", updatedCourseContent);
  };

  const removeInstruction = (contentIndex, instructionIndex) => {
    const updatedCourseContent = [...formik.values.courseContent];
    updatedCourseContent[contentIndex].instructions.splice(instructionIndex, 1);
    formik.setFieldValue("courseContent", updatedCourseContent);
  };

  /* console log enterd data */
  console.log(formik.values);

  return (
    <div className="max-w-5x font-mono font-semibold mx-auto min-h-screen">
      <h1 className="text-2xl font-semibold text-center mt-8 mb-4">Create a Course</h1>
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-6">

      <div className="col-span-2">

      <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="Enter course name"
              className="w-full  border shadow-md  bg-blue-50 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-1">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
              placeholder="Enter course description"
              className="w-full border shadow-md  bg-blue-50 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              rows="4"
            />

          </div>

          <div className="mb-4">
            <label htmlFor="createdBy" className="block mb-1">
              Created By:
            </label>
            <input
              id="createdBy"
              name="createdBy"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.createdBy}
              placeholder="Enter creator name"
              className="w-full border shadow-md  bg-blue-50 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block mb-1">
              Price:
            </label>
            <input
              id="price"
              name="price"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.price}
              placeholder="Enter course price"
              className="w-full border shadow-md  bg-blue-50 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="duration" className="block mb-1">
              Duration:
            </label>
            <input
              id="duration"
              name="duration"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.duration}
              placeholder="Enter course duration"
              className="w-full border shadow-md  bg-blue-50 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

         
        </div>


        <div>
          

          <div className="mb-4">
            <label htmlFor="summary" className="block mb-1">
              Summary:
            </label>
            {formik.values.summary.map((point, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  name={`summary[${index}]`}
                  type="text"
                  onChange={formik.handleChange}
                  value={point}
                  placeholder="Enter summary point"
                  className="w-full shadow-md  bg-blue-50 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 mr-2"
                />
                <button
                  type="button"
                  onClick={() => removeSummaryPoint(index)}
                  className="  px-4 py-2 text-2xl rounded text-red-500 hover:text-red-600 focus:outline-none"
                >
                  <MdDelete />
                  
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addSummaryPoint}
              className="text-blue-500 text-4xl px-4 py-2 rounded hover:text-blue-600 focus:outline-none"
            >
              <IoAddCircleSharp/>
              
            </button>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <label className="block mb-1">Course Content:</label>
            {formik.values.courseContent.map((content, contentIndex) => (
              <div key={contentIndex} className="mb-6">
                <label htmlFor={`videoLink_${contentIndex}`} className="block mb-1">
                  Video Link:
                </label>
                <input
                  id={`videoLink_${contentIndex}`}
                  name={`courseContent[${contentIndex}].videoLink`}
                  type="text"
                  onChange={formik.handleChange}
                  value={content.videoLink}
                  placeholder="Enter video link"
                  className="w-full border shadow-md  bg-blue-50 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                />


                <div className="mt-4">
                  <label className="block mb-1">Instructions:</label>
                  {content.instructions.map((instruction, instructionIndex) => (
                    <div key={instructionIndex} className="flex items-center mb-2">
                      <input
                        name={`courseContent[${contentIndex}].instructions[${instructionIndex}]`}
                        type="text"
                        onChange={formik.handleChange}
                        value={instruction}
                        placeholder="Enter instruction"
                        className="w-full border shadow-md  bg-blue-50 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 mr-2"
                      />
                      <button
                        type="button"
                        onClick={() => removeInstruction(contentIndex, instructionIndex)}
                        className="text-red-500 text-2xl  px-4 py-2 rounded hover:text-red-600 focus:outline-none"
                      >
                        <MdDeleteForever />
                        
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addInstruction(contentIndex)}
                    className="text-blue-500   px-4 py-1 rounded hover:text-blue-600 focus:outline-none"
                  >
                   <span className="flex space-x-2 flex-row"> <MdAddToPhotos className="text-2xl"  /> <span className="text-blue-500">Instruction</span></span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => removeCourseContent(contentIndex)}
                  className="  rounded-xl text-red-600 px-4 py-1   mt-2 focus:outline-none"
                >
                  <span className="flex hover:text-red-800 space-x-2 flex-row"> <MdDeleteForever className="text-2xl"  /> <span className="text-red-500">Course Content</span></span>
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addCourseContent}
              className="bg-blue-50 text-blue-600 border-2  border-blue-400 rounded-2xl font-semibold px-4 py-2 rounded hover:bg-blue-100 focus:outline-none"
            >
              Add Course Content
            </button>
          </div>
        </div>

        <div className="col-span-2 mt-2 flex justify-center">
  <button
    type="submit"
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
  >
    Create Course
  </button>
</div>

      </form>
    </div>
  );
};

export default CreateCourse;