import { motion } from "framer-motion";
import laptop from "../assets/img-laptop.png";
import rough from "../assets/img.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const SectionOne = () => {
  return (
    <div className=" flex w-full  md:flex-row flex-col  h-screen max-h-[700px] ">
      <div className="xl:w-2/2 flex  items-center">
        <div className="w-full flex md:justify-end sm:justify-center mr-0 2xl:mr-12 mt-10">
          <div
            className="flex justify-center items-center  relative overflow-hidden"
            style={{ objectFit: "cover" }}
          >
            <img
              src={laptop}
              alt="Transparent Laptop Mac - Blank Laptop Screen@nicepng.com"
              className="w-xl "
            />
            <motion.div
              // Keyframes: move from 0px to -100px, then repeat infinitely
              initial={{ y: 280 }} // Start from bottom
              animate={{ y: -350 }} // Move to original position
              transition={{
                repeatType: "reverse",
                repeat: Infinity,
                duration: 8,
                ease: "easeOut",
              }} // Smooth effect
              className="absolute w-full bg-white rounded-xl shadow-lg flex items-center justify-center"
              style={{ zIndex: "-1" }}
            >
              <div className="absolute w-[75%]">
                <img
                  src={img1}
                  alt="Transparent Laptop Mac - Blank Laptop Screen@nicepng.com"
                  className=" w-[500px] h-[300px]"
                />
                <img
                  src={img2}
                  alt="Transparent Laptop Mac - Blank Laptop Screen@nicepng.com"
                  className="w-[500px] h-[300px]"
                />
                <img
                  src={img3}
                  alt="Transparent Laptop Mac - Blank Laptop Screen@nicepng.com"
                  className=" w-[500px] h-[300px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-full flex h-full flex-col justify-center ">
        <div className=" w-full flex flex-col items-center md:items-start">
          <h1 className="2xl:w-[70%] xl:text-6xl lg:text-5xl sm:mt-2 sm:text-4xl sm:mb-3  text-4xl font-bold mb-3 md:mb-8 text-center md:text-left">
            Turn weaknesses into strengths
          </h1>
          <p className="xl:text-2xl text-sm sm:mb-4 px-2 sm:text-lg mb-4 md:mb-8 md:pr-10 text-center md:text-left">
            Leaders Academy’s structured courses in Web Development, Grpahics
            Designing, and Office adapt to your progress, drilling harder
            concepts with precision timing to ensure you master them
            efficiently.
          </p>
          <div className="w-55 h-17 bg-amber-500 ml-4 text-2xl text-center p-4">
            VIEW COURSES
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
