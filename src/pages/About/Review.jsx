

const Review = () => {


  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Success Counter</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-around mb-12">
          <div className="mb-6 md:mb-0">
            <div className="text-4xl font-bold text-emerald-500 mb-3">25</div>
            <p className="text-gray-700">Total Shops</p>
          </div>
          <div className="mb-6 md:mb-0">
            <div className="text-4xl font-bold text-emerald-500 mb-3">09</div>
            <p className="text-gray-700">Electronics Shop</p>
          </div>
          <div className="mb-6 md:mb-0">
            <div className="text-4xl font-bold text-emerald-500 mb-3">06</div>
            <p className="text-gray-700">books Shops</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-500 mb-3">12</div>
            <p className="text-gray-700">Managers Shop</p>
          </div>
        </div>

        <p className="text-gray-600">
          Join the success shops and be a part of our growing community!
        </p>
      </div>
    </section>
  );
};

export default Review;