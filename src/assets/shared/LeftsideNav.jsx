import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftsideNav = () => {

    const [categories, setcategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setcategories(data))
    }, [])

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold p-4"> Categories</h1>

            {

                categories.map(categorie => <Link
                    className="block ml-4 font-semibold text-xl"
                    to={`/categorie/${categorie.id}`}
                >
                    {categorie.name}

                </Link>)
            }

        </div>
    );
};

export default LeftsideNav;