import React from 'react'
import frame from '../../assets/Frame.png';
import right from '../../assets/right.png'
function HireUs() {

  return (
    <div >
      {/* Centered Container */}
      <div className=" flex justify-center items-center min-h-screen ">
        <div className="container mx-auto max-w-screen-xl flex flex-col lg:flex-row overflow-hidden gap-10">
          {/* Left Side - Image */}
          <div className="basis-1/2">
            <img
              src={frame} // Replace with your image URL
              alt="Meeting"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="basis-1/2 py-0 lg:py-0  text-left">
            <p className="text-blue-500 font-medium uppercase mb-3">Benefits</p>
            <h2 className="font-['Bai_Jamjuree'] text-[24px] lg:text-[48px] font-medium leading-[57.6px] tracking-[-2px] text-left  decoration-skip-ink-0 mb-3 text-[#292929]">
              Why hire from Us?
            </h2>
            <p className="font-['Rubik'] text-[14px] lg:text-[18px] font-light leading-[28.8px] text-left text-[#707070] decoration-skip-ink-0 mb-5">
              Together, we're making education accessible and transformative. Join
              us in shaping a brighter future!
            </p>

            {/* Bullet Points */}
            <ul className="space-y-6 text-gray-800 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl"><img src={right} alt="✔" /></span>
                <span>Trained to meet Industry Standard</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl"><img src={right} alt="✔" /></span>
                <span>Independently pre-assessed</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl"><img src={right} alt="✔" /></span>
                <span>Immediate Availability</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl"><img src={right} alt="✔" /></span>
                <span>Hassle Free Experience</span>
              </li>
            </ul>

            {/* Button */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded">
              Request Talent Today
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HireUs;