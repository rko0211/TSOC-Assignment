import HireFromUs from "@/assets/HireFromUs";
import Icons from "@/assets/Icons";

function Banner() {
  return (
    <div className="my-10">
      {/* Desktop View */}
      <div className="hidden lg:flex flex-row justify-between bg-Alice_Blue rounded-lg mx-20 h-[278px]">
        <div className="flex flex-col w-[50%] items-start p-10">
          <img
            src={HireFromUs.Writing}
            alt="writing"
            className="w-[520px] h-full object-contain rounded-l-lg"
          />
          <button className="bg-blue-600 text-white font-sans font-medium text-lg items-center justify-center rounded-lg py-2 px-4 mt-4 flex flex-row">
            Request Talent Today
            <img
              src={Icons.LeftArrow}
              alt="left-arrow"
              className="w-6 h-6 ml-2"
            />
          </button>
        </div>
        <img
          src={HireFromUs.Hirinig1}
          alt="hiring"
          className="w-[520px] h-full object-cover rounded-l-lg"
        />
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col bg-Alice_Blue rounded-lg mx-4 p-4">
        <img
          src={HireFromUs.Writing}
          alt="writing"
          className="w-full h-auto object-contain rounded-t-lg"
        />
        <div className="flex flex-col items-center p-4">
          {/* <p className="text-base font-sans text-center mb-4">
            Unlock access to top talent. Request today!
          </p> */}
          <button className="bg-blue-600 text-white font-sans font-medium text-base rounded-lg py-2 px-4 flex flex-row items-center">
            Request Talent Today
            <img
              src={Icons.LeftArrow}
              alt="left-arrow"
              className="w-5 h-5 ml-2"
            />
          </button>
        </div>
        <img
          src={HireFromUs.Hirinig1}
          alt="hiring"
          className="w-[520px] h-full object-cover rounded-l-lg"
        />
      </div>
    </div>
  );
}

export default Banner;