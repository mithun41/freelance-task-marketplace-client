// src/pages/BrowseTask.jsx
import React from "react";
import { Link, useLoaderData } from "react-router";

const BrowseTask = () => {
  const tasks = useLoaderData();
  // console.log(tasks);
  return (
    <div className="overflow-x-auto w-11/12 mx-auto my-20 dark:bg-gray-800 dark:text-white">
      <table className="table ">
        <thead className="border-b-gray-600 border-b ">
          <tr>
            <th className="text-white bg-green-500 pl-8">No</th>
            <th className="text-white bg-green-500 pl-8">Title</th>
            <th className="text-white bg-green-500">Category</th>
            <th className="text-white bg-green-500">Deadline</th>
            <th className="text-white bg-green-500">More Info</th>
          </tr>
        </thead>
        {tasks.map((task, i) => (
          <tbody key={task._id}>
            <tr className="border-b-gray-200 border-b ">
              <td className="font-bold pl-8">{i + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold p-4">{task.title}</div>
                  </div>
                </div>
              </td>
              <td>
                <p className="badge badge-ghost font-bold badge-sm">
                  {task.category}
                </p>
              </td>
              <td className="text-red-400">{task.deadline}</td>
              <th>
                <Link
                  to={`/browse-tasks/${task._id}`}
                  className="btn btn-success btn-outline"
                >
                  See Details
                </Link>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default BrowseTask;
