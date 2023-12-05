import React from 'react';

const AllShops = ({ allShops }) => {
    const { shop, logo, info } = allShops;

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Shop</th>
                        <th>Limitation</th>
                        <th>Description</th>
                        <th>Notice</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ 1}</td>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={logo} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{shop}</div>
                                </div>
                            </div>
                        </td>
                        <td>3</td> {/* Example limitation */}
                        <td>{info}</td>
                        <td>
                            <button className="btn btn-ghost btn-xs">Notice</button>
                        </td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default AllShops;