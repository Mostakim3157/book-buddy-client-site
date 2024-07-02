import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [registerError, setRegisterError] = useState();

  const { register, user, setUser, updateUserProfile } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const image = e.target.image.value;
    console.log(email, password, image, name);

    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError(toast.error("Password must be at least 6 characters"));
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)) {
      setRegisterError(
        toast.error("Password must have a upper & lower character")
      );
      return;
    }

    try {
      const result = await register(email, password);
      console.log(result);
      await updateUserProfile(email, password);
      setUser({ ...user, photoURL: image, displayName: name });
      navigate("/");
      setSuccess(toast.success("Successfully registered."));
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="w-1/2 mx-auto mt-12">
      <div className="hero-content flex-col ">
        <h3 className="text-3xl  font-bold">Register now </h3>
        <div className="card w-full shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Photo URL"
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute text-xl top-[52px] right-4"
              >
                {showPass ? <IoIosEye /> : <IoIosEyeOff />}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="mb-4"></div>
          <p className="text-center mb-8">
            Already have an account? Please{" "}
            <Link className="font-semibold" to="/login">
              <u>Login</u>
            </Link>
          </p>
        </div>
      </div>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </div>
  );
};

export default Register;
