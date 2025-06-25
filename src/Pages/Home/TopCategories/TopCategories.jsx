import React from "react";

const TopCategories = () => {
  const categories = [
    { name: "Web Development", jobs: 120 },
    { name: "Design", jobs: 95 },
    { name: "Writing", jobs: 80 },
    { name: "Marketing", jobs: 60 },
  ];

  return (
    <div className=" w-11/12 mx-auto  px-4 py-10 bg-teal-200 rounded-2xl ">
      <h2 className="text-3xl font-bold mb-6 text-center">📂 Top Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center ">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-2xl hover:shadow-md transition "
          >
            <h3 className="text-lg font-semibold mb-2">{cat.name}</h3>
            <p className="text-sm text-gray-500">{cat.jobs}+ Jobs Posted</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
