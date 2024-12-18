import React from 'react'
import airbnb from '../../assets/airbnb.png';
import amazon from '../../assets/amazon.png';
import google from '../../assets/google.png';
import microsoft from '../../assets/microsoft.png';
import slack from '../../assets/slack.png';

function Companies() {
  return (
    <div className=' mt-10 py-10'>
      <p className='info text-customTextBlack font-rubik text-[14px] lg:text-[20px] font-normal leading-[32px] text-center decoration-skip-ink-none'>
        We are trusted by over 20,000+ individuals in these companies
      </p>

      <div className='flex flex-wrap justify-center items-center gap-12 mt-10'>
        <img src={airbnb} alt="Airbnb" />
        <img src={google} alt="Google" />
        <img src={amazon} alt="Amazon" />
        <img src={microsoft} alt="Microsoft" />
        <img src={slack} alt="Slack" />
      </div>
    </div>
  )
}

export default Companies