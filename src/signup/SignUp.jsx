import { useForm } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../layout/navbar/Navbar";
import useAuth from "../hooks/useAuth";
import { toast } from "sonner";

const SignUp = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit =  async (data) => {
    const email = data?.email;
    const password = data?.password;
    try {
        await createUser(email, password);
        toast.success("Sign Up Succeed!")
        reset();
        navigate('/dashboard')
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            toast.error("This email is already in use!")
        } else if (error.code === "auth/weak-password") {
            toast.error("This password is too weak!")
        } else if (error.code === "auth/invalid-email") {
            toast.error("Invalid email address!")
        }
    }
  };
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <h1 className="text-3xl font-semibold">Sign Up</h1>
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
                <button className="btn btn-primary font-semibold text-lg">
                  Sign Up
                </button>
              </div>
              <h2 className="text-sm">
                Have an account? please,{" "}
                <Link to="/login" className="underline">
                  Login
                </Link>
              </h2>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
