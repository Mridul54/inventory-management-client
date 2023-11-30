import React from 'react';

const Shop = ({shops}) => {
    const {shop, logo, email, info, name, location} = shops;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-20">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className='mx-auto'>
            <div className="">
                <h2 className="card-title font-bold">{shop}</h2>
                <p className='font-semibold'>Information:{info}</p>
                
            </div>
            <div className="">
                <p className='font-semibold'>Owner-Name: {name}</p>
                <p className='font-semibold'>Owner-Email: {email}</p>
            </div>
            <p className='text-center font-semibold'>{location}</p>
            </div>
        </div>
    );
};

export default Shop;