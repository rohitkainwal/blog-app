import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "./../context/AuthContext";

const HomePage = () => {
  // const myName = useContext(AuthContext)

  return (
    //     <div className="bg-[#F8F8FA] min-h-screen">
    //       <Navbar />

    //  {/* <div className="hidden md:block text-left">
    //                 <p className="text-sm font-semibold text-gray-800">
    //                 my name is {myName}
    //                 </p>

    //               </div> */}

    //       {/* ---- HERO SECTION ---- */}
    //       <section className="max-w-6xl mx-auto px-6 py-12">
    //         <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
    //           Explore Stories, <br /> Insights & Knowledge
    //         </h1>
    //         <p className="text-gray-600 mt-4 max-w-2xl">
    //           Dive into high-quality articles, trending ideas, and curated insights across various categories.
    //         </p>
    //       </section>

    //       {/* ---- MAIN CONTENT ---- */}
    //       <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

    //         {/* ---- POSTS LIST ---- */}
    //         <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
    //           {[1, 2, 3, 4].map((item) => (
    //             <div
    //               key={item}
    //               className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
    //             >
    //               <div className="h-48 bg-gray-200"></div>
    //               <div className="p-5">
    //                 <p className="text-sm text-indigo-600 font-medium">Lifestyle</p>
    //                 <h2 className="text-lg font-semibold mt-2 text-gray-900">
    //                   Minimalist Life Choices to Change Your Future
    //                 </h2>
    //                 <p className="text-gray-600 text-sm mt-2">
    //                   Discover how minimalism can help you lead a more meaningful and balanced lifestyle.
    //                 </p>
    //                 <p className="text-xs text-gray-500 mt-3">5 min read • 2 days ago</p>
    //               </div>
    //             </div>
    //           ))}
    //         </div>

    //         {/* ---- SIDEBAR ---- */}
    //         <aside className="col-span-1">
    //           <div className="bg-white p-6 rounded-2xl shadow-sm">
    //             <h3 className="text-xl font-semibold mb-4 text-gray-800">Categories</h3>
    //             <ul className="space-y-3 text-gray-600 font-medium">
    //               <li className="hover:text-indigo-600 cursor-pointer">Technology</li>
    //               <li className="hover:text-indigo-600 cursor-pointer">Lifestyle</li>
    //               <li className="hover:text-indigo-600 cursor-pointer">Travel</li>
    //               <li className="hover:text-indigo-600 cursor-pointer">Business</li>
    //               <li className="hover:text-indigo-600 cursor-pointer">Design</li>
    //             </ul>
    //           </div>

    //           <div className="bg-white p-6 rounded-2xl shadow-sm mt-8">
    //             <h3 className="text-xl font-semibold mb-4 text-gray-800">Popular Posts</h3>
    //             <ul className="space-y-4">
    //               {[1, 2, 3].map((p) => (
    //                 <li key={p} className="flex gap-3">
    //                   <div className="w-16 h-16 bg-gray-200 rounded-xl"></div>
    //                   <div>
    //                     <p className="text-sm font-semibold text-gray-800">
    //                       How to Stay Creative Every Day
    //                     </p>
    //                     <p className="text-xs text-gray-500">3 min read</p>
    //                   </div>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </aside>

    //       </section>
    //     </div>
    <div>
      <Navbar />
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">Our Platform</span>
          </h1>

          {/* Sub text */}
          <p className="text-lg text-gray-600 mb-8">
            A modern, simple and clean section designed with Tailwind CSS. You
            can directly use this in your Home Page.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {/* Card 1 */}
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Fast</h3>
              <p className="text-gray-600">
                Super quick performance with optimized UI.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-green-50 rounded-xl border border-green-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Secure
              </h3>
              <p className="text-gray-600">
                Your data is protected with best practices.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-purple-50 rounded-xl border border-purple-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                Modern
              </h3>
              <p className="text-gray-600">
                Clean and modern UI design for all devices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
