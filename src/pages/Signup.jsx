import {Link} from "react-router-dom"
import { Fragment, useEffect, useState } from "react";
import GoogleIcon from "../assets/google-svgrepo-com.svg";
import FacebookIcon from "../assets/facebook.svg";
import SignupInputs from "../components/SignupInputs";
import Signup3rd from "../components/Signup3rd";
import axios from "axios";
function Signup(){
    const [hide, setHide] = useState(false);
    const [post, setPost] = useState({
        email: '',
        password: ''
    });

    function handleChange(event){
        const {name, value} = event.target;
        setPost(prevData => {
            return {
           ...prevData,
            [name]: value }
        })
    }
    function handleSubmit(event){
        event.preventDefault();
        axios.post()
    }
    return(
        <div className="flex md:columns-2 flex-row">
            <div className="w-full flex flex-col bg-food-pattern">
                <div className="w-8/12 mx-auto">
                    <div  className="mt-14 w-10 h-10 rounded-full bg-white flex justify-center items-center shadow-lg">
                        <Link to={"/"}>
                            <svg  width="25px" height="25px" viewBox="0 0 1024 1024" fill="#000000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="38.912"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""></path></g></svg>
                        </Link>
                    </div>
                    <h1 className="mt-5 font-poppins font-bold text-orangered text-5xl">Sign Up</h1>
                    <p className="mt-5 text-lg font-poppins">Already have an account? <Link to={"/login"}><span className="text-orangered font-semibold underline" >Login Now</span></Link></p>
                    <form onSubmit={handleSubmit}>                
                        <SignupInputs heading="Email"> 
                            <input onChange={handleChange} name="email" className="w-full border-y border-x border-x-slate-300 rounded-xl px-4 py-2 h-16 font-poppins" type="email"/>
                        </SignupInputs>
                        <SignupInputs heading="Password">
                            <div className="flex w-full relative">
                                <input onChange={handleChange} name="password" className="w-full border-y border-x border-x-slate-300 rounded-xl px-4 py-2 h-16 font-poppins" type={hide ? "password" : "text"} placeholder=""/>
                                <div className="absolute w-16 right-0">
                                    <button onClick={() => setHide(!hide)} className="border-s ps-3 my-2 h-12">{hide ? <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 10C4 10 5.6 15 12 15M12 15C18.4 15 20 10 20 10M12 15V18M18 17L16 14.5M6 17L8 14.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                    :<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12C4 12 5.6 7 12 7M12 7C18.4 7 20 12 20 12M12 7V4M18 5L16 7.5M6 5L8 7.5M15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>  }</button>
                                </div>
                            </div>
                        </SignupInputs>

                        <div className="mt-8 flex items-center">
                            <input name="remember" className="h-4 w-4 accent-orangered outline-gray-300 me-3" type="checkbox" />
                            <h3 className="">Remember Me</h3>
                        </div>
                        <button className="h-16 mt-10 text-xl text-white font-poppins rounded-xl w-full bg-orangered">Sign Up</button>
                    </form>   
                    <div class="relative flex pt-5 items-center">
                        <div class="flex-grow border-t border-gray-400"></div>
                        <span class="flex-shrink mx-4 text-gray-400">OR</span>
                        <div class="flex-grow border-t border-gray-400"></div>
                    </div>
                    <div className="mt-5">
                        <Signup3rd image={GoogleIcon} name="Google"/>
                        <Signup3rd image={FacebookIcon} name="Facebook"/>
                    </div>
                </div>
            </div>
            <div className='text-wrap hidden md:flex md:bg-signup-pattern justify-end items-end bg-cover w-full h-dvh'> 
                <h1 className='stroke-black font-shadow text-right text-5xl mx-20 mb-10 w-4/5 font-bold text-white font-poppins'>Helping you plan your next meal filipino meal</h1>
            </div>
        </div>
    )
}

export default Signup