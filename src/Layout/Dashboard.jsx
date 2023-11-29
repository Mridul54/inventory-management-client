import { FaHome, FaShoppingCart } from 'react-icons/fa';
import {  FcMenu } from 'react-icons/fc';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu'>
                    <li>
                        <NavLink to="/">
                            <FaHome/>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/menu">
                            <FcMenu/>
                            Menu's</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                             Cart</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
                
            </div>
        </div>
    );
};

export default Dashboard;