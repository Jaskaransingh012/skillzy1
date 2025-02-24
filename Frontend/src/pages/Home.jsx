import Vector from "../assets/Vector.png";
import chemistry from "../assets/chemistry.png";
const Home = () => {
  return (
    <>
      {/* First Section */}
      <section className="bg-gradient-to-r from-[#E5FF80] to-[#C2FF44] min-h-[67vh] flex items-center px-6 md:px-16 relative">
        <div className="grid md:grid-cols-2 items-center w-full max-w-7xl mx-auto">

          {/* Left Content */}
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              Master In-Demand Skills with <br /> Expert-Led Courses
            </h1>
            <p className="text-lg text-black mt-4">
              “Master new skills with expert-led courses and hands-on learning.”
            </p>
            <p className="text-lg font-bold text-black mt-6">
              Start your journey today!
            </p>
          </div>

          {/* Right Circular Card */}
          <div className="relative flex justify-center md:justify-end">
            {/* White Circular Card */}
            <div className="bg-white p-10 rounded-full shadow-xl w-[300px] h-[300px] flex flex-col items-center justify-center relative z-10">
              <h2 className="text-2xl font-extrabold text-black text-center">
                Enhance Skills
              </h2>
              <p className="text-gray-700 text-center text-sm mt-2">
                Learning made Easy
              </p>
              <button className="mt-6 bg-black text-white px-6 py-2 rounded-full text-lg font-bold hover:opacity-80 transition">
                Browse
              </button>
            </div>

            {/* Bottom Right Green Circle (Overlapping Effect) */}
            <div className="absolute -bottom-10 -right-10 w-[320px] h-[320px] bg-[#C2FF44] rounded-full -z-10"></div>
          </div>

        </div>
      </section>

      {/* Second Section (Why Choose SkillZy?) */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="grid md:grid-cols-2 items-center w-full max-w-7xl mx-auto">

          {/* Left Content */}
          <div className="max-w-lg">
            {/* Icon */}
            <div className="">
              <span className=" text-white  rounded-md">
                <img src={Vector} alt="vector" className="w-auto h-9" />
              </span>
            </div>
            {/* Title & Description */}
            <h2 className="text-3xl font-extrabold text-black">
              Why you should <br /> choose SkillZy?
            </h2>
            <p className="text-gray-700 text-lg mt-4">
              “With 35 years of experience, we’re dedicated to digital excellence.”
            </p>
            {/* Button */}
            <button className="mt-6 bg-[#C2FF44] text-black px-6 py-2 rounded-full text-lg font-bold flex items-center hover:opacity-80 transition">
              About us →
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img src={chemistry} alt="Why Choose SkillZy" className="max-w-xs md:max-w-sm" />
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;
