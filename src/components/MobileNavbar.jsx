
import ArrowFrame from '../assets/ArrowFrame.png';

function MobileNavbar() {
  return (
    <div className=' flex flex-col justify-between items-center  px-9 py-5 customlg:hidden z-10'>

      <ul className='menue list-none flex flex-col justify-center items-center gap-10'>
        <li>Mentors</li>
        <li>How it works</li>
        <li>Projects</li>
        <li>Blog</li>
        <li>FAQ</li>
        <li>Code of Conduct</li>
        <li>Hire from Us</li>
        <div className='button'>
          <button
            className="w-[157px] h-[50px] px-[20px] py-[11px] gap-[10px] rounded-tl-[6px] bg-[#0060E7] opacity-100 text-white"
          >
            <span className='flex justify-center gap-2 items-center'>
              Click Me <img src={ArrowFrame} alt="->" />
            </span>
          </button>
        </div>
      </ul>

    </div>
  )
}

export default MobileNavbar