import { NextPage } from "next";
import { useState } from "react";
import Title from "@/components/Title";
import DotWithLine from "@/components/DotWithLine"; // Adjust the path as needed

const Home: NextPage<{ isMobileView: boolean }> = ({ isMobileView }) => {
  const stories = [
    { id: 1, title: "Story 1" },
    { id: 2, title: "Story 2" },
    { id: 3, title: "Story 3" },
    { id: 4, title: "Story 4" },
    { id: 5, title: "Story 5" },
    { id: 6, title: "Story 6" },
    { id: 7, title: "Story 7" },
    { id: 8, title: "Story 8" },
    { id: 9, title: "Story 9" },
    { id: 10, title: "Story 10" },
    { id: 11, title: "Story 11" },
    { id: 12, title: "Story 12" },
    { id: 13, title: "Story 13" },
    { id: 14, title: "Story 14" },
    { id: 15, title: "Story 15" },
    { id: 16, title: "Story 16" },
    { id: 17, title: "Story 17" },
    { id: 18, title: "Story 18" },
    { id: 19, title: "Story 19" },
    { id: 20, title: "Story 20" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const storiesPerPage = 10;

  const currentStories = stories.slice(currentIndex, currentIndex + storiesPerPage);

  const handleClick = (id: number) => {
    console.log(`Clicked on story with ID: ${id}`);
    // Add your logic for handling the click event here
  };

  const handleShiftLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleShiftRight = () => {
    if (currentIndex < stories.length - storiesPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="p-4 pt-0 px-[7.6rem]">
      <Title name="Stories" className="pl-4" />
      <div className="relative flex items-center mt-4 mb-8">
        {currentIndex > 0 && !isMobileView && (
          <button
            onClick={handleShiftLeft}
            className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 text-white bg-[#FFFFFF] bg-opacity-50 rounded-full focus:outline-none transform -translate-x-1/2"
          >
            {"<"}
          </button>
        )}
        <div className=" overflow-x-auto" style={{width: "calc(100vw - 1rem)"}}>
        <div className="flex flex-row space-x-4  w-max">
          {currentStories.map((story, index) => (
            <div
              key={story.id}
              className={`  bg-custom-gradient rounded-full ${isMobileView ? 'w-8 h-8 rounded-full' : 'w-20 h-20' } focus:outline-none ${index === currentStories.length - 1 ? 'mr-4' : ''}`}
              onClick={() => handleClick(story.id)}
            >
             
            </div>
          ))}
        </div>
        </div>
        {currentIndex < stories.length - storiesPerPage && !isMobileView && (
          <button
            onClick={handleShiftRight}
            className="absolute right-[185px] z-10 flex items-center justify-center w-8 h-8 text-white bg-[#FFFFFF] bg-opacity-50 rounded-full focus:outline-none transform translate-x-1/2"
          >
            {">"}
          </button>
        )}
      </div>

      <Title name="Games" className="pl-4 mt-8" />
      
      <div className="wallet-info bg-gradient-to-r from-[#171C1C] to-transparent bg-gradient-box   mx-auto mt-5 ml-0  rounded-s py-8 px-4 border border-white-opacity-15">
        <div className="flex">
          <div className="left flex flex-col">
            <p className="flex gap-2 text-[#FFFFFF] opacity-80 text-[12px] font-normal tracking-wider transition-opacity duration-300">
              Gain or Lose
            </p>
            <p className="flex gap-2 text-[#FFFFFF] opacity-80 text-[12px] font-normal tracking-wider transition-opacity duration-300 mt-2">
              Let the money making begin!
            </p>
          </div>
          <div className="right">
            {/* <img src={walletEllipse} alt="loading..." /> */}
          </div>
        </div>
      </div>

      <div className="flex mt-8 space-x-4 text-white" style={{width: "calc(100vw - 1rem)"}}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="w-[184px] h-[250px]">
            <div className="bg-white w-full h-full"></div>
            <DotWithLine>135 playing</DotWithLine>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Home;
