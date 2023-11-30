
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const CreateStore = () => {
    const {user} = useContext(AuthContext);
    const handleCreateShop = event => {
        event.preventDefault();

        const form = event.target;
        const shop = form.shop.value;
        const logo = form.logo.value;
        const info = form.info.value;
        const location = form.location.value;
        const email = form.email.value;
        const name = form.name.value;
        
        

        const newShop = {shop, logo, info, location, email, name};
        console.log(newShop);

        fetch('https://inventory-management-server-liard.vercel.app/shops', {
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
        <div className="bg-sky-200 p-24  max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center pb-10 ">Create your shop</h2>
        <form onSubmit={handleCreateShop}>
        <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Shop Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="shop" placeholder="Shop Name" className="input input-bordered w-full" />
                    </label>
            </div>
        <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Shop Logo</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="logo" placeholder="Shop Logo" className="input input-bordered w-full" />
                    </label>
            </div>
            <div className="flex gap-5 pb-5">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl"> Shop Info</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="info" placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Shop Location </span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" placeholder="Shop Location" name="location" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="flex gap-5 pb-5">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl"> Shop-Owner Email</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="email" value={user.email} readOnly name="email" placeholder="Shop-Owner Email" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Shop-Owner Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Shop-owner Name" name="name" className="input input-bordered w-full" />
                        
                    </label>
                </div>
            </div>
            
            
            <input type="submit" value="Create Shop" className="btn btn-block bg-sky-500 hover:bg-sky-700 text-white" />
        </form>
    </div>
    );
};

export default CreateStore;