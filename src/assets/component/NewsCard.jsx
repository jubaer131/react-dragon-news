import { Link } from "react-router-dom";


const NewsCard = ({ item }) => {

    const { title, image_url, details, _id } = item
    return (
        <div className="card bg-base-100 shadow-xl">
            <h2 className="card-title">{title}</h2>
            <figure><img src={image_url} alt="Shoes" /></figure>
            {
                details.length > 200 ? <p className="text-xl">  {details.slice(0, 170)} <Link to={`/news/${_id}`}
                    className="text-blue-500 font-bold"> Read more </Link> </p> : <p className="text-xl">{details}</p>

            }

            <div className="card-body">

                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default NewsCard;