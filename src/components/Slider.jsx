import bgimage from "../assets/img.jpg";
import "../App.css";

const Slider = () => {
  return (
    <section className="flex">
      <div className="relative w-full flex max-h-screen  overflow-hidden">
        <img alt="Your Company" src={`${bgimage}`} className="  " />
        <div className="flex absolute flex-col w-full h-screen justify-center ">
          <div className="flex flex-col w-1/2 my-6">
            <h1 className="mx-4  my-0 max-h-max text-[10rem] text-white font-bold font-sans leading-none flex-wrap">
              {" "}
              Lorem ipsum dolor
            </h1>
            <h1 className="mx-4  mt-6 max-h-max text-[2rem] text-white font-bold font-sans  flex-wrap">
              {" "}
              Lorem ipsum dolor
            </h1>
          </div>
          <div className="flex items-center my-4">
            <button className="rounded-md px-4 mx-4 w-40 h-14 bg-amber-600 text-center items-center">
              {" "}
              <h1> join</h1>{" "}
            </button>
            <button className="rounded-md mx-4 w-40 h-14 bg-amber-600">
              {" "}
              JOIN NOW2{" "}
            </button>
            <button className="rounded-md mx-4 w-40 h-14 bg-amber-600">
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
