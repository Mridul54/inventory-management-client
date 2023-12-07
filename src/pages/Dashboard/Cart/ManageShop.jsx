
import { useEffect } from 'react';
import { useState } from 'react';
import AllShops from './AllShops';
import { Helmet } from 'react-helmet';

const ManageShop = () => {
    const [manageShop, setManageShop]  = useState([]);
    useEffect(() => {
        fetch('https://inventory-management-server-liard.vercel.app/shops')
        .then(res => res.json())
        .then(data => setManageShop(data))
    }, [])
    return (
        <>
        <Helmet>
                <title>Inventory | Manage Shop</title>
            </Helmet>
        <div>
            <h1 className='text-center text-5xl font-bold mb-8'>All Shops</h1>
            <div>
                {
                    manageShop.map(allShops => <AllShops key={allShops._id} allShops={allShops}></AllShops>)
                }
            </div>
        </div>
        </>
    );
};

export default ManageShop;