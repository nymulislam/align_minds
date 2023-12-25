import { CgProfile } from "react-icons/cg";
import { RiHome8Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const items = [
        { label: "Mange Tasks", to: "/dashboard/allTasks"},
        { label: "Own Tasks", to: "/dashboard/personalTasks"},
      ];

  return (
    <div className="w-48 p-4 min-h-screen bg-[#fff5e1]">
      <ul className="menu text-lg font-semibold">
        {items.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.to}
              className={location.pathname === item.to ? "allUsers" : ""}
            >
              {item.icon}
              {item.label}
            </NavLink>
          </li>
        ))}
        <div className="divider mb-2 mt-7"></div>
        <li>
          <NavLink to="/">
            <RiHome8Line />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
          >
            <CgProfile />
            My Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
