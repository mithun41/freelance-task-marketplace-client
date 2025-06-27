import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../AuthContext/AuthContext";
import { Link, NavLink } from "react-router";
import { use } from "react";
import ThemeToggle from "../../Components/ToggleTheme/ThemeToggle";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    console.log("signout");
    signOutUser();
  };
  const menu = (
    <>
      {" "}
      <NavLink to={"/"}>
        {" "}
        <li>Home</li>
      </NavLink>
      {/* <NavLink to={"addtask"}>
        {" "}
        <li>Add Task</li>
      </NavLink> */}
      <NavLink to={"browse-tasks"}>
        {" "}
        <li>Browse Tasks</li>
      </NavLink>
      {/* <NavLink to={"my-posted-tasks"}>
        {" "}
        <li>My Posted Tasks</li>
      </NavLink> */}
      {user && (
        <NavLink to={"dashboard"}>
          {" "}
          <li>Dashboard</li>
        </NavLink>
      )}
    </>
  );
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 dark:bg-gray-800 dark:text-white  px-8">
      <div className="navbar-start ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow dark:bg-gray-800 dark:text-white"
          >
            {menu}
          </ul>
        </div>
        <Link to={"/"}>
          <h2 className="hidden md:block md:text-2xl md:text-green-600 md:font-bold">
            Freelance<span className="text-red-600">Marketplace</span>
          </h2>
          <h2 className="text-2xl text-green-600 font-bold md:hidden lg:hidden xl:hidden">
            F<span className="text-red-600">M</span>
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-8">{menu}</ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle></ThemeToggle>
        {user ? (
          <>
            <div className="relative group inline-block">
              {user.photoURL ? (
                <img
                  className="w-12 rounded-full mr-6"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <FaUserCircle className="mr-5" size={25} />
              )}

              <span className="absolute left-0 mt-2 z-10 bg-white text-black px-3 py-1 rounded shadow-lg text-sm hidden group-hover:block">
                {user.displayName}
              </span>
            </div>

            <a onClick={handleSignOut} className="btn">
              Sign Out
            </a>
          </>
        ) : (
          <>
            <Link to={"/signin"} className="btn btn-outline btn-success mr-4">
              Sign In
            </Link>
            <Link to={"/signup"} className="btn btn-outline btn-success">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
