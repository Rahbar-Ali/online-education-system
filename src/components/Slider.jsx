import bgimage from "../assets/img.jpg";
import "../App.css";

const Slider = () => {
  return (
    <section className="flex">
      <div className="w-full flex max-h-screen ">
        <img alt="Your Company" src={`${bgimage}`} className=" w-auto" />
      </div>
    </section>
  );
};

export default Slider;
