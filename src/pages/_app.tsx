import { useRouter } from "next/router";
import "../app/globals.css";
import Sidebar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const MyApp = ({ Component, pageProps }: any) => {
  const router = useRouter();
  const { route } = router;

  const shouldRenderSidebar = route !== "/login" && route !== "/register";
  const shouldRenderNavBar = route !== "/login" && route !== "/register";

  return (
    <main className={`${jakarta.variable} font-jakarta`}>
      <div className="flex min-h-screen bg-black">
        {shouldRenderSidebar && <Sidebar />}
        <div className="flex flex-col w-full">
          {shouldRenderNavBar && <NavBar />}
          <Component {...pageProps} />
        </div>
      </div>
    </main>
  );
};

export default MyApp;
