import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "1. Post Your Task",
      desc: "Fill out the task form with category, deadline, and budget.",
    },
    {
      title: "2. Receive Bids",
      desc: "Freelancers will bid on your task with their offers.",
    },
    {
      title: "3. Hire the Best",
      desc: "Choose the right freelancer and get the work done.",
    },
  ];

  return (
    <div className="bg-violet-400  py-10 px-4 w-11/12 mx-auto my-10 rounded-2xl">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">🚀 How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
