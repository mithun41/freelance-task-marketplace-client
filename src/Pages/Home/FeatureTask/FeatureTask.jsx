import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const FeatureTask = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://freelance-task-marketplace-server-gilt.vercel.app/feature-tasks"
    )
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 ">
      {/* <h2 className="text-3xl font-bold text-center mb-8">🚀 Featured Tasks</h2> */}
      <div className="text-3xl font-bold text-center mb-8">
        <Typewriter
          words={["Featured Tasks"]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border p-5 rounded shadow bg-white dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
            <p className="text-sm text-gray-500 mb-1">{task.category}</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
              {task.description.length > 100
                ? task.description.slice(0, 100) + "..."
                : task.description}
            </p>
            <p className="text-sm mb-1">
              💰 <strong>{task.budget} ৳</strong>
            </p>
            <p className="text-sm mb-3">
              📅 Deadline: {new Date(task.deadline).toLocaleDateString()}
            </p>
            <button
              onClick={() => navigate(`/feature-details/${task.id}`)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm w-full"
            >
              Bid Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureTask;
