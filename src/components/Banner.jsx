import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Banner = () => {
  const {user} = useAuth();

  return (
      <div
        className="hero min-h-[70vh] z-0"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/nLrfh5N2/align-minds-banner.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-[#333]">
            <h1 className="mb-5 text-5xl font-bold ">Streamlining Success</h1>
            <p className="mb-5 px-6 font-medium">
            Align Minds: Elevating Productivity Through Innovative Task Management Solutions.
            </p>
           {
            user? <Link to="/dashboard"> <button className="btn text-lg font-semibold text-[#333333]">Let&apos;s Explore </button></Link> : <Link to="/login"> <button className="btn text-lg font-semibold text-[#333333]">Let&apos;s Explore </button></Link>
           }
          </div>
        </div>
      </div>
  );
};

export default Banner;
