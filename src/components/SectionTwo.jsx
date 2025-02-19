import img1 from "../assets/img3.jpg";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdBookOnline } from "react-icons/md";
import {
  BsBackpack2,
  BsBriefcase,
  BsCardChecklist,
  BsChatRightText,
  BsClipboard2Heart,
  BsCalendar2Day,
  BsInfinity,
} from "react-icons/bs";
import { FaCalendarAlt, FaInfinity } from "react-icons/fa";

const SectionTwo = () => {
  return (
    <div className="flex  h-full md:h-screen md:max-h-[700px] flex-col justify-center md:flex-row bg-gray-500 md:pt-10 ">
      <div className="flex lg:px-12 lg:w-2/2 md:w-1/2 flex-col w-full justify-center items-center ">
        <h1 className="md:mt-2 lg:text-6xl mt-10 px-2 md:px-0 md:text-3xl text-2xl md:text-center md:ml-0 ml-6 text-white font-bold">
          World's cheapest online learning platform designed for Pakistan Youth
        </h1>
        <img
          src={img1}
          alt="Transparent Laptop Mac - Blank Laptop Screen@nicepng.com"
          className=" hidden md:block lg:mt-12 mt-4 md:mt-8 w-[320px] h-[300px]"
        />
        <div className="  hidden  md:flex mt-4 md:mt-6">
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
      <div className="flex  lg:gap-10 gap-8 lg:w-2/3 md:gap-10 mt-8 md:mt-0 ml-8 md:ml-0 md:px-0 flex-col justify-center  text-white">
        <div className="flex md:justify-start items-center   text-3xl">
          <BsCalendar2Day className="lg:text-5xl  text-4xl" />
          <div className="ml-4 md:text-xl text-lg ">
            <b>Online</b> weekly classes on Zoom
          </div>
        </div>
        <div className="flex md:justify-start items-center   text-3xl">
          <BsInfinity className="lg:text-5xl  text-4xl" />
          <div className="ml-4 md:text-xl text-lg">
            <b>Lifetime</b> access to HD recorded videos
          </div>
        </div>
        <div className="flex md:justify-start items-center  text-3xl">
          <BsBackpack2 className="lg:text-5xl  text-4xl" />
          <div className="ml-4 md:text-xl text-lg">
            <b>Premium</b> course materials
          </div>
        </div>
        <div className="flex md:justify-start items-center  text-3xl">
          <BsBriefcase className="lg:text-5xl  text-4xl" />
          <div className="ml-4 md:text-xl text-lg">
            <b>Internship</b> and Job placement support
          </div>
        </div>
        <div className="flex md:justify-start items-center   text-3xl">
          <BsCardChecklist className="lg:text-5xl  text-4xl" />
          <div className="ml-4 md:text-xl text-lg">
            <b>Hands-on</b> task, assignments and real projects
          </div>
        </div>
        <div className="flex md:justify-start items-center   text-3xl">
          <BsChatRightText className="lg:text-5xl  text-4xl" />
          <div className="ml-4 md:text-xl text-lg">
            <b>Q&A</b> support via zoom
          </div>
        </div>
        <div className="flex md:justify-start items-center   text-3xl">
          <BsClipboard2Heart className="lg:text-5xl  text-4xl" />
          <div className="ml-4 md:text-xl text-lg">
            <b>Elite</b> Alumni Community and Leadership opportunities
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
