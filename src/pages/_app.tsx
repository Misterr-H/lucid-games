import { useRouter } from "next/router";
import "../app/globals.css";
import Sidebar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

const MyApp = ({ Component, pageProps }: any) => {
  const router = useRouter();
  const { route } = router;

  const shouldRenderSidebar = route !== "/login" && route !== "/register";
  const shouldRenderNavBar = route !== "/login" && route !== "/register";

  return (
    <div className="flex h-screen">
      {shouldRenderSidebar && <Sidebar />}
      <div className="flex flex-col w-full">
        {shouldRenderNavBar && <NavBar />}
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
