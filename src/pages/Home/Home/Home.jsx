import About from "../../About/About";
import Review from "../../About/Review";

import Collection from "../../Section/Collection";
import Offer from "../../Section/Offer";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Collection></Collection>
            <Review></Review>
            <Offer></Offer>
            <About></About>
        </div>
    );
};

export default Home;