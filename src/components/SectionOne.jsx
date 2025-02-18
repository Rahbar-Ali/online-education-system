import laptop from "../assets/img-laptop.png";
import rough from "../assets/img.jpg";

const SectionOne = () => {
  return (
    <div className=" flex w-full  md:flex-row flex-col  h-screen max-h-[600px] ">
      <div className="w-2/2 flex  items-center">
        <div className="w-full flex justify-end mr-0 md:mr-12 mt-10">
          <div
            className="flex justify-center items-center  overflow-hidden relative"
            style={{ objectFit: "cover" }}
          >
            <img
              src={laptop}
              alt="Transparent Laptop Mac - Blank Laptop Screen@nicepng.com"
              className="w-xl "
            />
            <div className="absolute w-full" style={{ zIndex: "-1" }}>
              <img
                src={rough}
                alt="Transparent Laptop Mac - Blank Laptop Screen@nicepng.com"
              />
              <img
                src={rough}
                alt="Transparent Laptop Mac - Blank Laptop Screen@nicepng.com"
              />
              <img
                src={rough}
                alt="Transparent Laptop Mac - Blank Laptop Screen@nicepng.com"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex  flex-col justify-center  ml-8 ">
        <div className=" flex flex-col items-center md:items-start">
          <h1 className="text-6xl font-bold mb-8 text-center md:text-left">
            Lorem ipsum dolor sit,
          </h1>
          <p className="text-2xl mb-8 pr-10 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            placeat nostrum dicta. Sit fugit soluta, quas voluptas ut animi
          </p>
          <div className="w-55 h-18 bg-amber-500  text-3xl text-center p-4">
            COURSES
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
