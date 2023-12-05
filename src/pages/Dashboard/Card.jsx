import { Query } from "@tanstack/react-query";
import Swal from "sweetalert2";


const Card = ({products}) => {

    
    
    
    const {_id, product, img, quantity, cost, profit, description, discount} = products;
    console.log(products)
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "YOu won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "Y#33", 
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if(result.isConfirmed){
                  
                fetch(`http://localhost:5000/products/${_id}`, {
                    method: 'DELETE'
                })  
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        
                        Swal.fire({
                            title: "Deleted!", 
                            text: "Your product has been deleted",
                            icon: "success"
                        })
                    }
                })
            }
        })
    }

    const handleUpdateProduct = _id => {

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product}</h2>
                <p>{quantity}</p>
                <div className="card-actions justify-end">
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>Update</button>
                <dialog id="my_modal_4" className="modal">
                <div className="bg-sky-200 p-24  max-w-5xl mx-auto">
                    <h2 className="text-5xl font-bold text-center pb-10 ">Add Product</h2>
                    <form onSubmit={handleUpdateProduct}>
                    <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Product Name</span>
                                </label>
                                <label className="input-group">
                                    
                                    <input type="text" defaultValue={product} name="product" placeholder="Product Name" className="input input-bordered w-full" />
                                </label>
                        </div>
                    <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Image</span>
                                </label>
                                <label className="input-group">
                                    
                                    <input type="text" defaultValue={img} name="img" placeholder="image" className="input input-bordered w-full" />
                                </label>
                        </div>
                        <div className="flex gap-5 pb-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl"> Product Quantity</span>
                                </label>
                                <label className="input-group">
                                    
                                    <input type="text" defaultValue={quantity} name="quantity" placeholder="Product Quantity" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Product Location </span>
                                </label>
                                <label className="input-group">
                                    
                                    <input type="text" defaultValue={location} placeholder="Product Location" name="location" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-5 pb-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl"> Production-Cost</span>
                                </label>
                                <label className="input-group">
                                    
                                    <input type="text" defaultValue={cost} name="cost" placeholder="Production-Cost" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Profit Margin</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={profit} placeholder="Profit Margin" name="profit" className="input input-bordered w-full" />
                                    
                                </label>
                            </div>
                            
                        </div>
                        <div  className="flex gap-5 pb-5">
                        <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Discount</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={discount} placeholder="Discount" name="discount" className="input input-bordered w-full" />
                                    
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Product Description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={description} placeholder="Product description" name="description" className="input input-bordered w-full" />
                                    
                                </label>
                            </div>
                        </div>
                        
                        
                        <input type="submit" value="Update Product" className="btn btn-block bg-sky-500 hover:bg-sky-700 text-white" />
                    </form>
                </div>
                </dialog>
                <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Card;