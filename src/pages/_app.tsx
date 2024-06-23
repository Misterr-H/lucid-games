import { useRouter } from "next/router";
import "../app/globals.css";
import { useState } from "react";
import Sidebar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import useWindowSize from "@/hooks/useWindowSize";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const MyApp = ({ Component, pageProps }: any) => {
  const router = useRouter();
  const { route } = router;
  const windowSize = useWindowSize();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const shouldRenderSidebar = route !== "/login" && route !== "/register";
  const shouldRenderNavBar = route !== "/login" && route !== "/register";
  const isMobileView = windowSize.width <= 768;

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (

    <div className={`flex h-screen bg-black font-jakarta ${jakarta.variable}`}>
      {shouldRenderSidebar && windowSize.width > 768 && <Sidebar userName="iGaurav17" isMobileView={false} />}
      <div className="flex flex-col w-full h-full overflow-auto bg-black">
        {shouldRenderNavBar && <NavBar />}

        {/* Show/Hide Sidebar Button */}
        {shouldRenderSidebar && windowSize.width <= 768 && (
          <button
            onClick={toggleSidebar}
            className="p-2 text-white bg-gray-800 fixed top-16 left-0 z-50"
          >
            {isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
          </button>
        )}

        {/* Add margin bottom to create gap */}
        <div className="mb-10" />

        {/* Render Sidebar for mobile view */}
        {shouldRenderSidebar && windowSize.width < 768 && isSidebarOpen && <Sidebar userName="iGaurav173" />}

        {/* Main Content */}
        <div className={`bg-black overflow-auto ${isMobileView ? 'w-screen' : ''}`} style={isMobileView? {} :{width:"calc(100vw - 16rem)"}} >
          <Component {...pageProps} isMobileView={isMobileView} />

        </div>
      </div>
    </div>
  );
};

export default MyApp;
