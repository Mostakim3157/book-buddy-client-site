import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../../assets/web-logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Footer = () => {
  const { theme } = useContext(AuthContext);

  return (
    <div>
      <footer 
      className={`${theme === "dark" ? "bg-gray-900": "bg-white"}`}
     
      >
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 
              className={`max-w-lg text-xl font-semibold tracking-tight
               xl:text-2xl ${theme === "dark" ? "text-white":"text-gray-800"}`}
           
              >
                Subscribe to our website get updates.
              </h1>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  className={`px-4 py-2 text-gray-700  border rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 ${theme === "dark"? "bg-gray-900": "bg-white"}`}
                  // className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />

                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#ff8c32] rounded-lg hover:bg-[#000000] focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p 
              className={`font-semibold${theme === "dark" ? "text-white":"text-gray-800"}`}
              
              >
                Quick Links
              </p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                  Home
                </Link>
                <Link className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                  All Books
                </Link>
                <Link className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                  Our Philosophy
                </Link>
              </div>
            </div>

            <div>
              <p className={`font-semibold${theme === "dark" ? "text-white":"text-gray-800"}`}>
                Privacy policy
              </p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Cookie policy
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Legal
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  About us
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <img className="w-auto h-7" src={logo} alt="Logo" />
              <span className="font-bold text-2xl">
                Book <span className="text-[#ff8c32]">Buddy</span>
              </span>
            </a>

            <div className="flex -mx-2 text-2xl">
              {/* Social Media Icons - SVGs Removed */}
              <a
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Reddit"
              >
                <FaFacebook></FaFacebook>
                {/* SVG Icon Removed */}
              </a>
              <a
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-red-500 dark:hover:text-blue-400"
                aria-label="Facebook"
              >
                <FaInstagram></FaInstagram>
              </a>
              <a
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300  dark:hover:text-blue-400 hover:text-blue-900"
                aria-label="Github"
              >
                <FaGithub></FaGithub>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
