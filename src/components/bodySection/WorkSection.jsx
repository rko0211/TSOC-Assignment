import React from 'react'
import handshake from '../../assets/handshake.png';
import bothman from '../../assets/bothman.png';
import code from '../../assets/code.png';
import filePath from '../../assets/filePath.png';
import Rectangle from '../../assets/Rectangle.png';
import code2 from '../../assets/code2.png';
import Rectangle2 from '../../assets/Rectangle2.png';
import bracket from '../../assets/bracket.png';
import Rectangle3 from '../../assets/Rectangle3.png';

function WorkSection() {
  const steps = [
    "A quick sign-up process",
    "Receive a customized design plan with 3D renderings",
    "Our placement team reaches out to understand your requirements",
    "Our trainees apply to these opportunities",
    "Extend offers to candidates who match your criteria!",
  ];

  const images = [
    { src: handshake, bgColor: 'bg-[#D9E3FF]' },
    { src: bothman, bgColor: 'bg-[#E4F4FF]' },
    { src: code, bgColor: 'bg-[#FFBAD9]' },
    { src: Rectangle, bgColor: 'bg-[#E4F4FF]' },
    { src: filePath, bgColor: 'bg-[#FFD700]' },
    { src: code2, bgColor: 'bg-[#DAFFD9]' },
    { src: Rectangle2, bgColor: 'bg-[#D9E3FF]' },
    { src: bracket, bgColor: 'bg-[#6394FB]' },
    { src: Rectangle3, bgColor: 'bg-[#E4F4FF]' },
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
          <div className="lg:w-[45%] grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((item, index) => (
              <div
                key={index}
                className={`relative ${item.bgColor} flex items-center justify-center p-4 rounded-lg`}
              >
                <img
                  src={item.src}
                  alt={`Step ${index + 1}`}
                  className="w-3/4 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkSection
