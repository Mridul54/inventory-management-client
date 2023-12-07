import { useContext, useEffect, useState } from 'react';
import Shop from '../CreateStore/Shop';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet';

const ViewShop = () => {
    const {user} = useContext(AuthContext);
    const [data, setData]= useState([]);

    useEffect(() => {

        fetch(`https://inventory-management-server-liard.vercel.app/current?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    console.log(data)
    return (
        <>
        <Helmet>
                <title>Inventory | View Shop</title>
            </Helmet>
        <div>
            <h1 className='text-5xl font-bold text-center my-10'>My Shop</h1> <hr />
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    data.map(shops => <Shop key={shops.email} shops={shops}></Shop>)
                }
            </div>
        </div>
        </>
    );
};

export default ViewShop;