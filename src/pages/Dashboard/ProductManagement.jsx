import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";




const ProductManagement = () => {
    const card = useLoaderData();
    const [product, setProduct] = useState([]);
   
    const {user} = useContext(AuthContext);
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;
        const product = form.product.value;
        const img = form.img.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const profit = form.profit.value;
        const discount = form.discount.value;
        const description = form.description.value;
        
        

        const newShop = {product, img, quantity, location, cost, profit, discount, description};
        console.log(newShop);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newShop)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success',
                        text: "user added successfully",
                        icon: "success",
                        confirmButtonText: "Cool"
                    })
                }
            })
    }
    
    return (
        <div>
            <div>
                <div className="flex">
                <h1 className="h-6 pb-12 w-96 bg-white ">Total Product Added{card.length} </h1>
                <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_5').showModal()}>Add Product</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="bg-sky-200 p-24  max-w-5xl mx-auto">
                    <h2 className="text-5xl font-bold text-center pb-10 ">Add Product</h2>
                    <form onSubmit={handleAddProduct}>
                    <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Product Name</span>
                                </label>
                                <label className="input-group">
                                    
                                    <input type="text" name="product" placeholder="Product Name" className="input input-bordered w-full" />
                                </label>
                        </div>
                    <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Image</span>
                                </label>
                                <label className="input-group">
                                    
                                    <input type="text" name="img" placeholder="image" className="input input-bordered w-full" />
                                </label>
                        </div>
                        <div className="flex gap-5 pb-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl"> Product Quantity</span>
                                </label>
                                <label className="input-group">
                                    
                                    <input type="text" name="quantity" placeholder="Product Quantity" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Product Location </span>
                                </label>
                                <label className="input-group">
                                    
                                    <input type="text" placeholder="Product Location" name="location" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-5 pb-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl"> Production-Cost</span>
                                </label>
                                <label className="input-group">
                                    
                                    <input type="text" name="cost" placeholder="Production-Cost" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Profit Margin</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" placeholder="Profit Margin" name="profit" className="input input-bordered w-full" />
                                    
                                </label>
                            </div>
                            
                        </div>
                        <div  className="flex gap-5 pb-5">
                        <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Discount</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" placeholder="Discount" name="discount" className="input input-bordered w-full" />
                                    
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Product Description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" placeholder="Product description" name="description" className="input input-bordered w-full" />
                                    
                                </label>
                            </div>
                        </div>
                        
                        
                        <input type="submit" value="Add Product" className="btn btn-block bg-sky-500 hover:bg-sky-700 text-white" />
                    </form>
                </div>
                </dialog>
            </div>
                </div>
            <div className="mt-10">
                <h1 className="mx-auto text-5xl font-bold">Products</h1>
                <div className="grid grid-cols-2 gap-5">
                    {
                        card.map((products) => <Card key={products._id} products={products}></Card>)
                    }
                </div>
                
            </div>
        </div>
        
    );
};

export default ProductManagement;