import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../assets/banner.jpg";
import img2 from "../../../assets/Download Online shopping concept, smartphone online store, vector illustration for free.jpg";
import img3 from "../../../assets/rsz_online_shopping_on_website_and_social_media_application_concept_digital_marketing_shop_and_store_via_smartphone.jpg";

const Banner = () => {
    return (
        <Carousel className="h-5/6">
                <div>
                    <img className="h-5/6" src={img1} />
                    
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
        </Carousel>
    );
};

export default Banner;