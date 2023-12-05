
import { useContext } from "react";
import logo from "../../../assets/E-Commerce Logo Design.jpg"
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../Hook/UseAdmin";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const {isAdmin} = useAdmin();

  const handleSignOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  };

  const NavLinks = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/store">Create-Store</Link></li>
      
      {user && (
      <li className="text-black">
    
        {isAdmin ? (
          <NavLink to={"/dashboard/users"}>My Shop</NavLink>
        ) : (
          <Link to={"/dashboard"}>My Shop</Link>
        )}
      </li>
    )}
        
        {!user && (<li><Link to="https://www.youtube.com/watch?v=ZLMPVQVSByk">Watch Demo</Link></li>)}
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Register</Link></li>


    </>
  );

  return (
    <div className="navbar p-5 shadow-2xl max-w-screen-xl m-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavLinks}
          </ul>
        </div>
        <img
          className="w-28 h-14"
          src={logo}
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>
      <div className="navbar-end">
      {user ? (
          <>
            <div className="flex items-center gap-2 mr-4">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User Icon"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <img
                  src="https://i.ibb.co/QmgzZ1N/Sample-User-Icon.png"
                  alt="Default User Icon"
                  className="w-8 h-8 rounded-full"
                />
              )}
              <span className="text-sm mr-2 lg:text-lg text-gray-800">
                {user.displayName || user.email}
              </span>
            </div>
            <button
              onClick={handleSignOut}
              className="btn btn-info  text-white hover:bg-blue-100"
            >
              Log out
            </button>
          </>
        ) : (
          <Link to={'/login'}>
            <button className="btn btn-info text-white hover:bg-blue-100">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;