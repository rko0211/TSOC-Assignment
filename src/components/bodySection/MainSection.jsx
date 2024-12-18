import React from 'react'
import image1 from '../../assets/Image1.png';
import image2 from '../../assets/Image2.png';
import image3 from '../../assets/Image3.png';
import Companies from './Companies';
import HireUs from './HireUs';
import WorkSection from './WorkSection';
import Carousel from './Carousel';
import Banner from '../Banner';
import Footer from '../Footer';
// import ContactUs from '../ContactUs';
import HiringRequestForm from '../ContactUs';
function MainSection() {
  return (
    <div className='mt-5 px-3 '>
      <div className='card flex flex-wrap gap-2 justify-center items-center container mx-auto'>
        <div className="card1">
          <img src={image1} alt="Image 1" />
        </div>
        <div className="card2">
          <img src={image2} alt="Image 2" />
        </div>
        <div className="card3">
          <img src={image3} alt="Image 3" />
        </div>

      </div>
      <Companies />
      <Carousel />
      <HireUs />
      <WorkSection />
      <HiringRequestForm />
      <Banner />
      <Footer />
    </div>
  );
};

export default MainSection;