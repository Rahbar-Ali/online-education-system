import bgimage from "../assets/img.jpg";
import "../App.css";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const Slider = () => {
  return (
    <section className="  flex ">
      <div className=" w-full flex  relative overflow-hidden ">
        <img
          alt="Your Company"
          src={`${bgimage}`}
          className="w-full  max-h-[100%] h-screen "
          style={{ objectFit: "cover" }}
        />
        <div className="flex absolute flex-col w-full h-screen justify-center md:mx-20 mx-4  ">
          <div className="flex justify-center flex-col w-full md:w-2/1  ">
            <div className=" py-0 my-0 text-5xl md:text-8xl lg:text-[10rem] text-white font-bold font-sans leading-15 md:leading-24 lg:leading-36 ">
              {" "}
              Rise to
            </div>
            <div className="py-0 my-0 text-5xl md:text-8xl lg:text-[10rem] text-white font-bold font-sans  flex-wrap">
              {" "}
              your challenge
            </div>
            <div className=" my-4 md:my-8 lg:my-10 text-3xl md:text-5xl lg:text-5xl text-white  font-sans  flex-wrap">
              {" "}
              your challenge
            </div>
          </div>
          <div className="flex  md:w-full flex-wrap">
            <input
              type="submit"
              className=" mr-4 w-47 h-18 bg-amber-600 text-white font-bold text-[1.5rem] hover:bg-amber-700 transition duration-500 ease-out"
              value={"JOIN NOW"}
            ></input>
            <input
              type="button"
              className=" mr-4   w-47  h-18 bg-white font-bold text-[1.5rem] hover:bg-gray-200 transition duration-500 ease-out"
              value={"COURSES"}
            ></input>
            <div className=" flex   items-center justify-center gap-2 mr-4 md:mt-0 mt-3  w-47 h-18 hover:scale-115 transition duration-500 ease-out">
              <MdOutlineSlowMotionVideo className="text-white text-5xl shadow-2xl " />
              <div className="text-white text-xl"> Watch Video</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
