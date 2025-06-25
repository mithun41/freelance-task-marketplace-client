import { useState } from "react";
import { useLoaderData } from "react-router";

const FeatureDetails = () => {
  const task = useLoaderData();
  //   console.log(task);
  const [bidsCount, setBidsCount] = useState(0);

  if (!task) {
    return <p className="text-center text-red-500">Task not found!</p>;
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
    setBidsCount(bidsCount + 1);
  };

  return (
    <div className="w-full  mt-16">
      <div className=" bg-gray-400 flex items-center justify-center">
        <div className="relative w-full">
          <img
            src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
            alt="img"
            className="w-full h-auto min-h-screen md:max-h-screen"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div>
              <h2 className="text-green-600 dark:text-green-400 font-semibold  float-end ">
                You bid for {bidsCount}{" "}
                {bidsCount === 1 ? "opportunity" : "opportunities"}.
              </h2>
              <h2 className="text-3xl  font-bold mb-4 text-white text-center mt-10">
                {title}
              </h2>

              <div className="bg-white/20  dark:bg-gray-800 p-6 rounded shadow">
                <p className="text-sm text-white mb-1">Category: {category}</p>
                <p className="mb-4 text-white dark:text-gray-200">
                  {description}
                </p>

                <div className="mb-4  text-white dark:text-gray-400">
                  <h3 className="text-xl font-bold">
                    💰 <strong>{budget} ৳</strong> <br />
                  </h3>
                  <h3 className="text-xl font-bold">
                    {" "}
                    📅 Deadline: {new Date(deadline).toLocaleDateString()}{" "}
                  </h3>
                  <h3 className="text-xl font-bold">
                    {" "}
                    📧 Posted By: {userName}
                  </h3>
                  <h3 className="text-xl font-bold"> 💌 Email: {userEmail}</h3>
                </div>

                <button
                  onClick={handleBid}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Place a Bid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
