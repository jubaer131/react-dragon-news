import { Link, NavLink } from "react-router-dom";
import user2 from '../../picture/user.png'
import { useContext } from "react";
import { Authcontext } from "../../provider/AuthProvider";
import Result from "postcss/lib/result";

const navbar = () => {
    const { user, logout } = useContext(Authcontext)
    const links = <>
        <NavLink className="mr-4 btn btn-ghost " to="/">Home</NavLink>
        {
            user && <>
                <NavLink className="mr-4 btn btn-ghost" to="/about">About</NavLink>
                <NavLink className="mr-4 btn btn-ghost" to="/career">Career</NavLink>
            </>
        }

        <NavLink className="mr-4 btn btn-ghost" to="/login">Login</NavLink>
    </>

    // const { user, logout } = useContext(Authcontext)

    const handlelogout = () => {
        logout()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={user2} />
                    </div>
                </div>



                {
                    user ? <>

                        <button onClick={handlelogout} className="btn btn-primary"> Sign out </button>
                    </> : <Link to="/login">
                        <button className="btn ">Login</button>
                    </Link>

                }


            </div>
        </div>
    );
};

export default navbar;