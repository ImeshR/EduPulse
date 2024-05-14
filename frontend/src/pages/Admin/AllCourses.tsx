import React from 'react'
import { RiEyeLine } from 'react-icons/ri';
import { useState } from 'react';

const dummyData = [
  {
    _id: 1,
    title: "React Course",
    category: "Web Development",
    description: "Learn React for building modern web applications.",
    course: "React",
    img: "/react.png",
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
    Author: "John Doe",
    price: 2000,
    


  },
  {
    _id: 3,
    title: "AWS Course",
    category: "Cloud Computing",
    description: "Become proficient in AWS cloud services.",
    course: "AWS",
    img: "/aws.png",
    price: 7073,
    Author: "husan santo",


  },
  {
    _id: 3,
    title: "Html",
    category: "Web Development",
    description: "Learn HTML for building web pages.",
    img: "/html.png",
    price: 7073,
    Author:"kamal narayan"

  },
  {
    _id: 4,
    title: "HTML/CSS/JS Course",
    category: "Web Development",
    description: "Learn the basics of web development with HTML, CSS, and JavaScript.",
    course: "HTML/CSS/JS",
    img: "/htmlcssjs.png",
    price: 4000,
    Author:"supun devid"
  },
  {
    _id: 5,
    title: "PHP Course",
    category: "Web Development",
    description: "Master PHP for server-side web development.",
    course: "PHP",
    img: "/php.png",
    price: 5000,
    Author:"supun nimal"
  },
  {
    _id: 6,
    title: "Java Course",
    category: "Software Development",
    description: "Learn Java programming for building applications.",
    course: "Java",
    img: "/java.png",
    price: 6000,
    Author:"rocky nhine"
  },
  {
    _id: 7,
    title: "C++ Course",
    category: "Software Development",
    description: "Master C++ programming for system and application development.",
    course: "C++",
    img: "/c++.png",
    price: 7000,
    Author:'shanto kumar'
  },
  {
    _id: 8,
    title: "Docker Course",
    category: "DevOps",
    description: "Learn Docker for containerization and deployment.",
    course: "Docker",
    img: "/27.png",
    price: 8000,
    Author:"shanto kumar"
  },]

  const AllCourses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortByCategory, setSortByCategory] = useState(false);
  
    // Filter courses based on search term
    const filteredCourses = dummyData.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Sort courses based on category if sortByCategory is true
    const sortedCourses = sortByCategory
      ? filteredCourses.slice().sort((a, b) => a.category.localeCompare(b.category))
      : filteredCourses;
  

      return (
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold mb-4">All Courses</h1>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search courses..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            </div>
            <button
              onClick={() => setSortByCategory(!sortByCategory)}
              className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {sortByCategory ? 'Sort by Title' : 'Sort by Category'}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="relative px-6 py-3">
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedCourses.map((course) => (
                  <tr key={course._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.Author}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        className="text-indigo-600 hover:text-indigo-900"
                        onClick={() => {
                          // Handle view course action
                        }}
                      >
                        <RiEyeLine />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
  };
  
  export default AllCourses;