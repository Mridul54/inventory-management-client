import { CiShop } from "react-icons/ci";

const CollectionCard = ({collect}) => {
    const {id, img, name, description} = collect;
    return (
        <div>
            <div data-aos="fade-up-right" className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-96 w-96" src={img} alt="Shoes" /></figure>
                <div className="card-body ">
                    <div className="flex justify-between">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="text-2xl"><CiShop></CiShop></h2>
                    </div>
                    <p>{description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default CollectionCard;