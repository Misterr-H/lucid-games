import { useRouter } from "next/router";
import "../app/globals.css";
import Sidebar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import Title from "@/components/Title"; // Import the Title component
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
  console.log("width", windowSize.width);

  const shouldRenderSidebar = route !== "/login" && route !== "/register";
  const shouldRenderNavBar = route !== "/login" && route !== "/register";

  return (
    <div className={`flex h-screen bg-black font-jakarta ${jakarta.variable} `}>
      {shouldRenderSidebar && (windowSize.width as number) > 768 && (
        <Sidebar userName="iGaurav17" isMobileView={false} />
      )}
      <div className="flex flex-col w-full bg-black">
        {shouldRenderNavBar && <NavBar />}

        {/* Add margin bottom to create gap
        <div className="mb-10" />

        {/* Render the Title component */}
        {/* <Title name="Stories" /> */}

        {shouldRenderSidebar && (windowSize.width as number) < 768 && (
          <Sidebar userName="iGaurav173" isMobileView={true} />
        )}

        <div className="bg-black">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};

export default MyApp;
