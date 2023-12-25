import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../../components/Footer";
import useAuth from "../../hooks/useAuth";
import { toast } from "sonner";

const Login = () => {
  const { loginWithPass } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data?.email;
    const password = data?.password;

    try {
      await loginWithPass(email, password);
      toast.success("Login Succeed!");
      reset();
      navigate("/dashboard");
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          toast.error("User not found. Please check your email or sign up.");
          break;
        case "auth/wrong-password":
          toast.error("Incorrect password. Please try again.");
          break;
        case "auth/too-many-requests":
          toast.error(
            "Too many unsuccessful login attempts. Please try again later."
          );
          break;
        case "auth/invalid-email":
          toast.error("Invalid email address. Please provide a valid email.");
          break;
        default:
          toast.error(
            "An error occurred during login. Please try again later."
          );
          break;
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <h1 className="text-3xl font-semibold">Login</h1>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">
                    <MdErrorOutline className="inline mb-px" /> Email is
                    required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-500">
                    <MdErrorOutline className="inline mb-px" /> Password is
                    required
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-lg font-semibold">
                  Login
                </button>
              </div>
              <h2 className="text-sm">
                New here? please,{" "}
                <Link to="/signUp" className="underline">
                  Sign Up
                </Link>
              </h2>

              <div>
                <h2 className="divider">Or Login with</h2>
                <div className="flex justify-center gap-5 text-2xl">
                  <FaGoogle />
                  <FaGithub />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
