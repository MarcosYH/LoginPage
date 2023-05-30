import {Component} from 'react';
import {Link} from "react-router-dom";
import imgh from "../assets/im2.png";
import '../styles/Registers.css';
class Registers extends Component {
    render() {
        return (
        <>
            
            <div>
                 
                <div className=" h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
                <img src={imgh} alt="imgh" className='imgre justify-center lg:float-left hidden md:block' />
                        <div className="w-full px-6 py-4 mt-6 overflow-hidden sm:max-w-lg sm:rounded-lg">
                            
                            <form>
                            <h1 className="text-3xl text-center font-bold text-black" >{'S\'inscrire'}</h1>
                                <div>
                                
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 undefined"
                                    >
                                        Name
                                    </label>
                                    <div className="flex flex-col items-start">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="name"
                                            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded block mt-1 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 undefined"
                                    >
                                        Email
                                    </label>
                                    <div className="flex flex-col items-start">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            className=" text-sm w-full px-4 py-2 border border-solid block mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700 undefined"
                                    >
                                        Password
                                    </label>
                                    <div className="flex flex-col items-start">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="text-sm px-4 py-2 border border-solid block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label
                                        htmlFor="password_confirmation"
                                        className="block text-sm font-medium text-gray-700 undefined"
                                    >
                                        Confirm Password
                                    </label>
                                    <div className="flex flex-col items-start">
                                        <input
                                            type="password"
                                            name="password_confirmation"
                                            placeholder="password confirmation"
                                            className="text-sm px-4 py-2 border border-solid block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center mt-4">
                                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-900">
                                        Register
                                    </button>
                                </div>
                            </form>
                            <div className="mt-4 text-grey-600">
                                Already have an account?{" "}
                                <span>
                            <Link
                                className="text-blue-600 hover:underline"
                                to= "/login"
                            >
                                Log in
                            </Link>
                        </span>
                            </div>
                            <div className="flex items-center w-full my-4">
                                <hr className="w-full" />
                                <p className="px-3 ">OR</p>
                                <hr className="w-full" />
                            </div>
                            <div className="my-6 space-y-2">
                                <button
                                    aria-label="Login with Google"
                                    type="button"
                                    className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 32 32"
                                        className="w-5 h-5 fill-current"
                                    >
                                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                    </svg>
                                    <p>Login with Google</p>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
        );
    }
}

export default Registers;