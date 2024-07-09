import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {Link} from "react-router-dom"
import { useTypewriter, Cursor } from "react-simple-typewriter"
export default function LandingPage(){
    const [word] = useTypewriter({
        words: ['EASIER', 'FASTER'],
        loop: {},
        typeSpeed: 200,
        deleteSpeed: 100
    })
    return(
        <>
        <div className="bg-food-pattern h-dvh px-16 lg:px-20">
            <Navbar />
            <div className="text-center pt-24">
                <h1 className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-shrikhand">MEAL PLANNING MADE </h1>
                <div className="w-100 justify-center flex">
                    <h1 className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl w-100 font-shrikhand absolute text-orangered">{word}</h1> 
                </div>
                <p className="2xl:text-2xl mb-5 lg:mb-10 xl:text-xl lg:text-lg md:text-sm text-xs font-poppins 2xl:mt-24 lg:mt-16 md:mt-14 mt-11 font-medium text-stone-600">Foodie is your ultimate meal planner, taking the guesswork out of your daily dining decisions</p>
                <Link className="2xl:px-8 2xl:py-4 xl:px-7 xl:py-3 lg:py-3 lg:px-6 md:py-3 md:px-5 py-3 px-5 bg-orangered font-poppins text-white shadow-md text-md text-sm lg:text-lg font-extrabold rounded-full" to={"/signup"}>Try for free</Link>
            </div>
        </div>
        <Footer />
        </>
    )
}