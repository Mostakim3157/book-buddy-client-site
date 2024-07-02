import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [showPass, setShowPass] = useState(true);
  const [loginError, setLoginError] = useState("");
  const [seccess, setSuccess] = useState("");
  const { singInUser,singInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();



  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const form = { email, password };

    console.log(form);

    setLoginError("");
    setSuccess("");

    if (password.length < 6) {
      setLoginError(toast.error(" Password must be at least 6 characters"));
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)) {
      setLoginError(
        toast.error("Password must have a upper character & lowercase")
      );
      return;
    }

    singInUser(email, password)
      .then((result) => {
        setSuccess(toast.success("Successfully Logged in."));
        navigate(location?.state ? location.state : "/");
      })

      .catch((error) => {
        setLoginError(toast.error("Try with valid email."));
      });




  };

  const handleGoogleSingIn = async () =>{
    singInWithGoogle()
    .then((result) => {
      setSuccess(toast.success("Successfully Logged in."));
      navigate(location?.state ? location.state : "/");
    })
    .catch((error) => {
      console.log(error);
      setLoginError(toast.error("Already logged in"));
    });



  }



  return (
    <div className="w-1/2 mx-auto mt-12">
      <div className="hero-content flex-col ">
        <h3 className="text-3xl  font-bold">Login Here</h3>
        <div className="card w-full shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "password" : "text"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label"></label>
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute text-xl top-[52px] right-4"
              >
                {showPass ? <IoIosEye /> : <IoIosEyeOff />}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-[#FF8C32] border-none text-white">
                Login
              </button>
            </div>
          </form>
          <div className="mb-4">
            <p className="flex justify-center gap-8">
           
              <button 
              onClick={handleGoogleSingIn}
                
                className="flex items-center justify-center text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <div className="px-4 py-2">
                  <svg className="w-6 h-6" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>

                <span className="w-5/6 px-4 py-3 text-center">
                  Sign in with Google
                </span>
              </button>
            </p>
          </div>
          <p className="text-center mb-8 flex gap-1 flex-col lg:flex-row justify-center">
            Do not have an account?{" "}
            <span>
              {" "}
              Please{" "}
              <Link className="font-semibold" to="/register">
                <u>Register</u>
              </Link>
            </span>
          </p>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Login;
