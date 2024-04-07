import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import { useContext } from 'react';
import { Authcontext } from '../../provider/AuthProvider';
import Result from 'postcss/lib/result';


const Login = () => {
    const { creatsignin } = useContext(Authcontext)
    const location = useLocation()
    const navigate = useNavigate()


    const handlelogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const possword = form.get('password')

        creatsignin(email, possword)
            .then(Result => {
                console.log(Result.user)
                // navigate after login
                navigate(location?.state ? location.state : "/")

            })
            .catch(error => {
                console.error(error)
            })


    }


    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl text-center mb-5">Plese login</h1>


            <div className="card shrink-0  md:w-2/3 lg:w-1/2  shadow-2xl bg-base-100 mx-auto">
                <form onSubmit={handlelogin} className=" card-body ">
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='text-center pb-4'>Don't have an account plese  <Link className='text-green-500' to="/register">Register now</Link></p>
            </div>

        </div>

    );
};

export default Login;