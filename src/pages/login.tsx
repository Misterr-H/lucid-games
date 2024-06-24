// import React from "react";

// const login = () => {
//   return (
//     <div className="flex w-full min-h-screen">
//       <div className="left md:w-1/2 w-full h-full bg-[#07030C] flex items-center justify-center">
//         <form className="p-4 rounded md:w-1/2 w-4/5">
//           <h2 className="text-3xl text-center font-semibold text-[#FFFFFF] mb-8">
//             Login
//           </h2>
//           <div className="mb-4">
//             <label className=" text-[#FFFFFF] text-sm font-medium mb-2">
//               Email or username
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter email"
//               className="shadow appearance-none rounded-md w-full h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="  text-[#FFFFFF] text-sm font-medium mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Password"
//               className="shadow appearance-none rounded-md w-full h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] mb-3 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <div>
//             <p className="mt-[-20px] mb-4 text-[#782DE8]">
//               <a href="">Forget your password?</a>
//             </p>
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-gradient-to-r from-[#A370EF] to-[#772CE8] text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Sign In
//             </button>
//           </div>

//           <p className="text-gray-100 my-3 w-fit m-auto">or</p>

//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className=" bg-gradient-to-r from-[#AAFFA9] to-[#11FFBD] text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Google
//             </button>
//           </div>
//           <p className=" text-[#FFFFFF] mt-4 w-fit m-auto">
//             Need an account?
//             <span className="text-[#11FFBD]">
//               <a href="/register"> Sign up</a>
//             </span>
//           </p>
//           <div className="w-full mt-5 h-[1px] bg-gradient-to-r from-[#AAFFA9] to-transparent"></div>
//         </form>
//       </div>
//       <div className="right hidden md:flex w-1/2 h-full bg-gradient-to-r from-[#AAFFA9] to-[#11FFBD] items-center justify-center"></div>
//     </div>
//   );
// };

// export default login;

import React from "react";

const login = () => {
  return (
    <div>
      <h1>This is login page.</h1>
      <div className="flex w-full h-screen">
        <div className="left md:w-1/2 w-full h-full bg-[#07030C] flex items-center justify-center">
          <form className="p-4 rounded md:w-1/2 w-4/5">
            <h2 className="text-3xl text-center font-semibold text-[#FFFFFF] mb-8">
              Login
            </h2>
            <div className="mb-4">
              <label className=" text-[#FFFFFF] text-sm font-medium mb-2">
                Email or username
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                className="shadow appearance-none rounded-md w-full h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="  text-[#FFFFFF] text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none rounded-md w-full h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <p className="mt-[-20px] mb-4 text-[#782DE8]">
                <a href="">Forget your password?</a>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#A370EF] to-[#772CE8] text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
            </div>

            <p className="text-gray-100 my-3 w-fit m-auto">or</p>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className=" bg-gradient-to-r from-[#AAFFA9] to-[#11FFBD] text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Google
              </button>
            </div>
            <p className=" text-[#FFFFFF] mt-4 w-fit m-auto">
              Need an account?
              <span className="text-[#11FFBD]">
                <a href="/register">Sign up</a>
              </span>
            </p>
          </form>
        </div>
        <div className="right hidden md:flex w-1/2 h-full bg-gradient-to-r from-[#AAFFA9] to-[#11FFBD] items-center justify-center"></div>
      </div>
    </div>
  );
};

export default login;
