import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../pages/Hook/UseAdmin";
import { Link, NavLink, Outlet } from "react-router-dom";
import UseManager from "../pages/Hook/UseManager";



const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSideNavOpen, setSideNavOpen] = useState(!isMobile);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch();
  };
  const [isAdmin] = useAdmin()
  const [isManager] = UseManager()

  const NavLinks = (
    <>
    {isManager && (
      <li className="text-white font-bold  p-2">
      <NavLink to={'/dashboard/productManagement'}>Product Management</NavLink>
    </li> 
    )}
    {isManager && (
      <li className="text-white font-bold  p-2">
      <NavLink to={'/dashboard/salesCollection'}>Sales Collection</NavLink>
    </li> 
    )}
    {
      isAdmin? <>
    <li className="text-white font-bold p-2">
      <NavLink to={'/dashboard/adminhome'}>Admin Dashboard</NavLink>
    </li>
    {user && (
      <li className="text-white font-bold  p-2">
        <NavLink to={'/dashboard/users'}>Manage Users</NavLink>
      </li>
    )}
    <li className="text-white font-bold  p-2">
      <NavLink to={'/dashboard/manageShop'}>Manage Shop</NavLink>
    </li>
    <li className="text-white font-bold  p-2">
      <NavLink to={'dashboard/saleSummary'}>Sale Summary</NavLink>
    </li>
    <li className="text-white font-bold  p-2">
      <NavLink to={'/dashboard/piechart'}>Pie Chart</NavLink>
    </li>
  
      </>
      :
      <>  <li className="text-white font-bold p-2">
      <NavLink to={'/dashboard/editShop'}>Edit Shop</NavLink>
    </li>
    {user && (
      <li className="text-white font-bold  p-2">
        <NavLink to={'/dashboard/viewShop'}>View Shop</NavLink>
      </li>
    )}
    <li className="text-white font-bold  p-2">
      <NavLink to={'/myProduct'}>My Product</NavLink>
    </li></>

    }
      <hr />
    
      {user ? (
        <>
          <button
            onClick={handleSignOut}
            className="font-bold  p-2 text-white hover:bg-blue-100"
          >
            Log out
          </button>
        </>
      ) : (
        <Link to={'/login'}>
          <button className="font-bold  p-2 text-white hover:bg-blue-100">
            Login
          </button>
        </Link>
      )}
     


     <li className="text-white font-bold p-2 flex items-center">
     
        <NavLink to={'/'}> Home</NavLink>
      </li>
    </>
  );

  const openNav = () => {
    setSideNavOpen(true);
  };

  const closeNav = () => {
    setSideNavOpen(true);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setSideNavOpen(true);
    } else {
      setSideNavOpen(false);
    }
  }, [isMobile]);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div
        className={`sidebar bg-[#5d6b68] transition-transform transform ${
          isSideNavOpen ? "translate-x-0" : "-translate-x-full"
        } lg:w-60 w-24 p-4 flex-shrink-0`}
      >
        <p
          href="javascript:void(0)"
          className="closebtn text-white text-3xl cursor-pointer"
          onClick={closeNav}
        >
          &times;
        </p>
        <ul className="menu menu-vertical">{NavLinks}</ul>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <span
              className={`text-2xl cursor-pointer ${isMobile ? "" : "hidden"}`}
              onClick={openNav}
            >
              &#9776;
            </span>
            <div className="flex items-center space-x-4">
            
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
         <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;