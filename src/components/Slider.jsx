import bgimage from "../assets/img.jpg";
import "../App.css";

const Slider = () => {
  return (
    <section className="  flex ">
      <div className=" w-full flex  relative  ">
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
          <div className="flex w-96 md:w-full flex-wrap">
            <button className="rounded-md px-4 w-40 h-14 bg-amber-600 text-center items-center">
              {" "}
              <h1> join</h1>{" "}
            </button>
            <button className="rounded-md  w-40 h-14 bg-amber-600">
              {" "}
              JOIN NOW2{" "}
            </button>
            <button className="rounded-md w-40 h-14 bg-amber-600">
              {" "}
              JOIN NOW2{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
