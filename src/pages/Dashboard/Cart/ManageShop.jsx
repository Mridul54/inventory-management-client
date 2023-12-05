
import { useEffect } from 'react';
import { useState } from 'react';
import AllShops from './AllShops';

const ManageShop = () => {
    const [manageShop, setManageShop]  = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/shops')
        .then(res => res.json())
        .then(data => setManageShop(data))
    }, [])
    return (
        <div>
            <h1>All Shops</h1>
            <div>
                {
                    manageShop.map(allShops => <AllShops key={allShops._id} allShops={allShops}></AllShops>)
                }
            </div>
        </div>
    );
};

export default ManageShop;