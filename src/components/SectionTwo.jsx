import img1 from "../assets/img3.jpg";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const SectionTwo = () => {
  return (
    <div className="flex  h-screen max-h-[800px] bg-gray-500">
      <div className="flex flex-col w-1/2 justify-center items-center ">
        <h1 className="text-6xl text-center text-white font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <img
          src={img1}
          alt="Transparent Laptop Mac - Blank Laptop Screen@nicepng.com"
          className=" mt-8 w-[320px] h-[300px]"
        />
        <div className="flex my-4">
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
      <div className="mx-auto flex gap-15 flex-col justify-center text-white">
        <div className="flex items-center text-4xl">
          <MdOutlineSlowMotionVideo className="text-7xl" />
          <div className="ml-4">Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="flex items-center text-4xl ">
          <MdOutlineSlowMotionVideo className="text-7xl" />
          <div className="ml-4">Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="flex items-center text-4xl">
          <MdOutlineSlowMotionVideo className="text-7xl" />
          <div className="ml-4">Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="flex items-center text-4xl">
          <MdOutlineSlowMotionVideo className="text-7xl" />
          <div className="ml-4">Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="flex items-center text-4xl">
          <MdOutlineSlowMotionVideo className="text-7xl" />
          <div className="ml-4">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
