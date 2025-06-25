import React from "react";
import Slider from "../../Components/Slider/Slider";
import FeatureTask from "./FeatureTask/FeatureTask";
import TopCategories from "./TopCategories/TopCategories";
import HowItWorks from "./TopCategories/HowItWorks";

const Home = () => {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white ">
      <Slider></Slider>
      <FeatureTask></FeatureTask>
      <TopCategories></TopCategories>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
