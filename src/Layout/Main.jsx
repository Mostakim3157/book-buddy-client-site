import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Main = () => {

const {theme, setTheme} = useContext(AuthContext)



  return (
    <div className={`font-vietnam sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto   flex flex-col min-h-screen ${theme === "dark" ? "text-white" : "text-[#151515]"}`}>
      <Navbar theme={theme}
        setTheme={setTheme}></Navbar>
      <div className="flex-grow p-4 md:p-6 lg:p-8">
        <Outlet></Outlet>
      </div>

      <Footer theme={theme}></Footer>
    </div>
  );
};

export default Main;
