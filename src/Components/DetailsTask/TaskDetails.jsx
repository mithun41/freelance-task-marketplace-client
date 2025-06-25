import { useState } from "react";
import { useLoaderData } from "react-router";

const TaskDetails = () => {
  const task = useLoaderData();
  const [bidsCount, setBidsCount] = useState(0);

  if (!task) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-300">
        Loading task details...
      </div>
    );
  }

  const {
    title,
    category,
    description,
    deadline,
    budget,
    userEmail,
    userName,
  } = task;

  const handleBid = () => {
    setBidsCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <div className="relative h-64 w-full">
        <img
          src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
          alt="Task Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {title}
          </h1>
          <p className="text-green-300 font-medium">
            You have placed {bidsCount} {bidsCount === 1 ? "bid" : "bids"} so
            far.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">🗂️ Category</h2>
              <p>{category}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">💰 Budget</h2>
              <p>{budget} ৳</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">📅 Deadline</h2>
              <p>{new Date(deadline).toLocaleDateString()}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">👤 Posted By</h2>
              <p>
                {userName} <br /> ({userEmail})
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">📝 Description</h2>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </div>

          <button
            onClick={handleBid}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
          >
            Place a Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
