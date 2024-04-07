import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrakingNews = () => {
    return (
        <div className="flex">
            <button className="btn bg-green-500"> Braking News</button>
            <Marquee pauseOnHover={true} speed={80}>
                <Link className="ml-4" to="/"> Todays top news  .......</Link>
                <Link className="ml-4" to="/"> special  news     .......</Link>
                <Link className="ml-4" to="/"> Todays top news   .......</Link>
                <Link className="ml-4" to="/"> Todays top news   .......</Link>
                <Link className="ml-4" to="/"> Todays top news   .......</Link>
            </Marquee>
        </div>
    );
};

export default BrakingNews;