

const Offer = () => {
    return (
        <div className="bg-rose-200 rounded-xl lg:my-20">
            <div className="flex justify-evenly">
            <div className="m-auto">
                <h3 className="lg:text-3xl font-bold">Deal of The Day</h3>
                <h1 className=" lg:text-5xl font-bold py-6">Upto 40% Off</h1>
                <p className="text-xs lg:text-xl"> Shops serve as retail spaces where goods or services are offered for sale <br />providing online location for consumers to browse and make purchases. </p>
                <input className= "btn  bg-rose-400 lg:mt-6 hover:bg-sky-700"  type="button" value="Shop now" />
            </div>
            <div>
                <img className="lg:h-96 p-10 rounded-xl" src="https://i.ibb.co/q1H4hXY/Premium-Vector-Online-shopping-for-social-media-post.jpg" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Offer;