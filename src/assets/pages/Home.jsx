import Header from "../shared/Header"
import Navbar from "../shared/Navbar"
import LeftsideNav from "../shared/LeftsideNav"
import RightsideNav from "../shared/RightsideNav"
import BrakingNews from "../component/BrakingNews";
import { useLoaderData } from "react-router-dom"
import NewsCard from "../component/NewsCard";


const Home = () => {

    const news = useLoaderData()
    console.log(news)

    return (
        <div className="font-Poppins">
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div >
                    <LeftsideNav></LeftsideNav>
                </div>
                <div className="text-5xl md:col-span-2 max-sm:p-5">

                    {

                        news.map(item => <NewsCard item={item}></NewsCard>)
                    }
                </div>
                <div >
                    <RightsideNav></RightsideNav>
                </div>
            </div>

        </div>
    );
};

export default Home;