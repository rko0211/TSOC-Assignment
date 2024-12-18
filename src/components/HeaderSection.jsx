import React from 'react'

function HeaderSection() {
  return (
    <div className='text-center max-w-[689px] mx-auto mt-6 p-2'>
      <div className="heading font-[Bai Jamjuree] text-3xl md:text-4xl lg:text-5xl font-medium leading-[40.4px] lg:leading-[70.4px] tracking-[-1px] text-center">
        Hire Top Talent,<br /> Accelerate Your Growth.

      </div>

      <div className="parainfo font-rubik text-custom-text-size lg:text-custom-sm font-light  text-center underline-from-font decoration-skip-ink-none mt-6 text-customTextColor">
        Find the right professionals to elevate your business. From temporary staffing to permanent placements, we connect you with skilled experts tailored to your needs.
      </div>

      <div className='button mt-6 '>
        <button className="bg-customblueBg py-[12px] lg:py-[11px] px-[20px] text-white rounded-md">
          Request Talent Today
        </button>
      </div>
    </div>
  );
}

export default HeaderSection;