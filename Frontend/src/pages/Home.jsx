// const Home = () => {
//   return (
//     <section className="bg-gradient-to-r from-[#E5FF80] to-[#C2FF44] min-h-[65vh] flex items-center px-6 md:px-16">
//       <div className="grid md:grid-cols-2 items-center w-full max-w-7xl mx-auto">
        
//         {/* Left Content */}
//         <div className="max-w-lg">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
//             Master In-Demand Skills with <br /> Expert-Led Courses
//           </h1>
//           <p className="text-lg text-black mt-4">
//             “Master new skills with expert-led courses and hands-on learning.”
//           </p>
//           <p className="text-lg font-bold text-black mt-6">
//             Start your journey today!
//           </p>
//         </div>

//         {/* Right Circular Card */}
//         <div className="relative flex justify-end">
//           <div className="bg-white p-10 rounded-full shadow-xl w-80 h-80 flex flex-col items-center justify-center relative z-10">
//             <h2 className="text-2xl font-extrabold text-black text-center">
//               Enhance Skills
//             </h2>
//             <p className="text-gray-700 text-center text-sm mt-2">Learning made Easy</p>
//             <button className="mt-6 bg-black text-white px-6 py-2 rounded-full text-lg font-bold hover:opacity-80 transition">
//               Browse
//             </button>
//           </div>
//           {/* Green Overlapping Background Circle */}
//           <div className="absolute right-5 bottom-5 w-80 h-80 bg-[#C2FF44] rounded-full -z-10"></div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Home;



const Home = () => {
  return (
    <section className="bg-gradient-to-r from-[#E5FF80] to-[#C2FF44] min-h-[65vh] flex items-center px-6 md:px-16 relative">
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
  );
};

export default Home;
