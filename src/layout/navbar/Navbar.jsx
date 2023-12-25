import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/')

  };

  return (
    <div className="navbar bg-[#fff5e1] overflow-hidden">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Align Minds</Link>
      </div>
      
      <div className="flex-none">
        <Link to="/" className="btn glass btn-sm flex-end -mr-0 lg:-mr-32 ">
        Home
        </Link>
        {user ? (
          <>
            <div className="lg:flex items-center ml-40 gap-3 hidden">
              {/* dashboard button */}
              <Link to="/dashboard">
                <button className="btn btn-sm ">Dashboard</button>
              </Link>
              {/* user profile */}
            <h2 className="badge p-4">{user?.email}</h2>
            <button onClick={handleLogout} className="btn btn-sm btn-warning btn-circle mx-5">Logout</button>
            </div>
          </>
        ) : (
          <>
            <div className="hidden lg:flex gap-5 ml-20">
              {/* register button */}
              <Link to="/signUp" className="hidden lg:inline-block ">
                <button className="btn btn-sm">Register</button>
              </Link>

              {/* login button */}
              <Link
                to="/login"
                className="hidden lg:inline-block lg:ml-auto lg:mr-3"
              >
                <button className="btn btn-sm">Login</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
