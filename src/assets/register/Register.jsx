import { Link, Navigate } from "react-router-dom";
import Navbar from '../shared/Navbar';
import { useContext, useState } from "react";
import { Authcontext } from "../../provider/AuthProvider";



const Register = () => {
    const [error, seterror] = useState('')
    const { creatuser, user, logout } = useContext(Authcontext)

    const handleregister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const possword = form.get('password')
        console.log(name, photo, email, possword)
        creatuser(email, possword)
            .then(result => {
                logout(email, possword)
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
                seterror(error)
            })


    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl text-center mb-5">Plese Register</h1>


            <div className="card shrink-0  md:w-2/3 lg:w-1/2  shadow-2xl bg-base-100 mx-auto">
                <form onSubmit={handleregister} className=" card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="PHOTO" name='photo' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className='text-center pb-4'>
                    {
                        user ? <p className="text-green-500"> Register successfull</p> : <p className="text-red-500">{error.message}</p>
                    }
                </p>
                <p className='text-center pb-4'>Allready have an account plese    <Link className="text-green-500" to="/login">Login</Link></p>
            </div>

        </div>
    );
};

export default Register;