import React, { useState } from "react";
import jessicaThomson from '../../assets/Jessiathomson.png';
import priyanshJain from '../../assets/priyanshjain.png';
import rohanSharan from '../../assets/RohanSharan.png';

const recruiters = [
  {
    name: "Rohan Sharan",
    title: "Founder, Timechain Labs",
    quote:
      "Grabbing and holding your audience's attention: This is crucial in a world filled with distractions. It's about creating content that immediately captures.",
    image: rohanSharan, // Replace with actual image URL
  },
  {
    name: "Jessica Thompson",
    title: "Founder, Innovatech Solutions",
    quote:
      "Grabbing and holding your audience's attention: This is crucial in a world filled with distractions. It's about creating content that immediately captures.",
    image: jessicaThomson,
  },
  {
    name: "Priyansh Jain",
    title: "Design Lead, ABC Tech Solutions",
    quote:
      "Grabbing and holding your audience's attention: This is crucial in a world filled with distractions. It's about creating content that immediately captures.",
    image: priyanshJain,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? recruiters.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === recruiters.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#EEF8FF] p-3 lg:p-8 py-8 mt-10">
      <div className=" container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
          <div className="text-left mb-4 lg:mb-0">
            <h2 className="font-[Bai Jamjuree] text-[24px] lg:text-[48px] font-medium leading-[60px] text-[#292929] decoration-from-font decoration-skip-ink-none">
              Recruiters Story
            </h2>
            <p className="text-[#5C6972] max-w-[500px] font-[Rubik] text-[10px] lg:text-[20px] font-light leading-[32px] text-left  decoration-from-font decoration-skip-ink-none">
              Together, we're making education accessible and transformative. Join
              us in shaping a brighter future!
            </p>
          </div>
          {/* Navigation Arrows */}
          <div className="hidden lg:flex gap-2">
            <spane
              onClick={handlePrev}
              className="border-gray-800 border-2 text-black  py-5 px-7 hover:text-white rounded-full shadow-md hover:bg-gray-600 transition"
            >
              ←
            </spane>
            <spane
              onClick={handleNext}
              className="border-gray-800 border-2 text-black py-5 px-7 hover:text-white rounded-full shadow-md hover:bg-gray-600 transition"
            >
              →
            </spane>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {recruiters.map((recruiter, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full lg:w-1/3 px-4"

              >
                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-2 flex flex-col items-center justify-between text-center">
                  {/* Image */}
                  <img
                    src={recruiter.image}
                    alt={recruiter.name}
                    className="h-60 w-full object-cover rounded-lg mb-4"
                  />
                  {/* Content */}
                  <p className="italic text-gray-600 mb-4 leading-relaxed">
                    "{recruiter.quote}"
                  </p>
                  <div className="text-left">
                    <h3 className="font-bold text-lg text-gray-800">
                      {recruiter.name}
                    </h3>
                    <p className="text-gray-500">{recruiter.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Arrows in Mobile */}
        <div className="flex lg:hidden justify-center mt-4 gap-2">
          <button
            onClick={handlePrev}
            className="border-gray-800 border-2 text-black  py-5 px-7 hover:text-white rounded-full shadow-md hover:bg-gray-600 transition"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="border-gray-800 border-2 text-black  py-5 px-7 hover:text-white rounded-full shadow-md hover:bg-gray-600 transition"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
