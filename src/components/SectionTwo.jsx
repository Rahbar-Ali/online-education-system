import img1 from "../assets/img3.jpg";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdBookOnline } from "react-icons/md";

import { FaCalendarAlt, FaInfinity } from "react-icons/fa";

const SectionTwo = () => {
  return (
    <div className="flex  h-full md:h-screen md:max-h-[700px] flex-col justify-center md:flex-row bg-gray-500 ">
      <div className="flex lg:p-12 lg:w-2/2 md:w-1/2 flex-col w-full justify-center items-center ">
        <h1 className="mt-2 lg:text-6xl   md:text-3xl text-2xl text-center text-white font-bold">
          World's cheapest online learning platform designed for Pakistan Youth
        </h1>
        <img
          src={img1}
          alt="Transparent Laptop Mac - Blank Laptop Screen@nicepng.com"
          className=" lg:mt-12 mt-4 md:mt-8 w-[320px] h-[300px]"
        />
        <div className="   flex mt-4 md:mt-6">
          <input
            type="button"
            className="rounded-sm mr-2 w-38 h-10 bg-black text-white"
            value={"DOWNLOAD FORM"}
          ></input>
          <input
            type="button"
            className="rounded-sm w-38 h-10 bg-black text-white"
            value={"DOWNLOAD FORM"}
          ></input>
        </div>
      </div>
      <div className="flex  lg:gap-10 gap-2 lg:w-2/3 md:gap-10 flex-col justify-center text-white">
        <div className="flex md:justify-start items-center justify-center text-3xl">
          <FaCalendarAlt className="lg:text-5xl  text-5xl" />
          <div className="ml-2 text-xl">Online weekly classes on Zoom</div>
        </div>
        <div className="flex md:justify-start items-center justify-center text-3xl">
          <FaInfinity className="lg:text-5xl  text-5xl" />
          <div className="ml-2 text-xl">
            Lifetime access to HD recorded videos
          </div>
        </div>
        <div className="flex md:justify-start items-center justify-center text-3xl">
          <MdOutlineSlowMotionVideo className="lg:text-5xl  text-5xl" />
          <div className="ml-2 text-xl">Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="flex md:justify-start items-center justify-center text-3xl">
          <MdOutlineSlowMotionVideo className="lg:text-5xl  text-5xl" />
          <div className="ml-2 text-xl">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
