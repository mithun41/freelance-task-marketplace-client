import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <div className="text-center py-20 bg-gradient-to-r from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to Our <span className="text-blue-600">Freelance Hub</span>
      </h1>
      <h2 className="text-2xl text-gray-700 dark:text-gray-300 font-medium">
        <Typewriter
          words={[
            "Post Your Tasks",
            "Hire Skilled Freelancers",
            "Get Work Done Faster",
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
    </div>
  );
};

export default TypeWriter;
