import React from 'react'

import HireFromUs from "@/assets/HireFromUs";
function WorkSection() {
  const steps = [
    "A quick sign-up process",
    "Receive a customized design plan with 3D renderings",
    "Our placement team reaches out to understand your requirements",
    "Our trainees apply to these opportunities",
    "Extend offers to candidates who match your criteria!",
  ];

  const images = [
    HireFromUs.HIW1,
    HireFromUs.HTW2,
    HireFromUs.HIW3,
    HireFromUs.HIW4,
    HireFromUs.HIW5,
    HireFromUs.HIW6,
    HireFromUs.HIW7,
    HireFromUs.HIW8,
    HireFromUs.HIW9,
  ];

  return (
    <div>
      <div className="container mx-auto pb-8">
        <div className="flex flex-col-reverse lg:justify-center lg:flex-row gap-8">
          {/* Left Section: Steps */}
          <div className="lg:w-[35%]">
            <h2 className="font-['Bai_Jamjuree'] text-[24px] lg:text-[48px] font-medium leading-[62.4px] text-left  underline-offset-[from-font] decoration-skip-ink-none mb-3">How it works</h2>
            <p className="font-['Rubik'] text-[14px] lg:text-[20px] font-light leading-[32px] text-left text-[#707070] underline-offset-[from-font] decoration-skip-ink-none mb-8">
              Our streamlined process is designed to make your hiring process smooth and enjoyable.
            </p>
            <ol className="space-y-6 list-none">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-blue-500 text-lg font-semibold italic">
                    0{index + 1}
                  </span>
                  <p className="text-gray-700">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Right Section: Image Grid */}
          <div className="flex flex-col w-full lg:w-[40%] items-start mt-8 lg:mt-0 py-8 lg:py-14">
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`hiw-${index + 1}`}
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 object-cover rounded-md border-Light_Periwinkle border-2"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSection
