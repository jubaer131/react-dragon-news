import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";

import qZone1 from '../../picture/qZone1.png'
import qZone2 from '../../picture/qZone2.png'
import qZone3 from '../../picture/qZone3.png'



const RightsideNav = () => {
    return (
        <div>
            <div className="p-5 space-y-5 mb-6">
                <h1 className="text-3xl font-semibold">Login with</h1>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with google
                </button>
            </div>
            <div className="p-5   mb-6">
                <h1 className="text-3xl font-semibold">Find us with</h1>
                <a className="flex items-center gap-3 p-4 border rounded-t-lg" href="">
                    <SiFacebook></SiFacebook>
                    <span>Facebook</span>
                </a>
                <a className="flex items-center gap-2 p-4 border-x rounded-t-lg" href="">
                    <AiFillTwitterCircle></AiFillTwitterCircle>
                    <span>Facebook</span>
                </a>
                <a className="flex items-center gap-3 p-4 border rounded-t-lg" href="">
                    <IoLogoInstagram></IoLogoInstagram>
                    <span>Facebook</span>
                </a>

            </div>
            {/* q jone */}
            <div className="p-5 space-y-5 mb-6">
                <h1 className="text-3xl font-semibold">Login with</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightsideNav;