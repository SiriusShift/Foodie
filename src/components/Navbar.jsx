import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <div className="w-full flex justify-between h-50 px-12 lg:px-20 py-3 md:py-4">
            <Link className="text-2xl md:text-4xl pt-1 md:pt-2 font-shrikhand" to={"/"}>Foodie</Link>
            <Link to={"/signin"}><button className="bg-orangered font-poppins text-white font-bold text-xs lg:text-lg md:px-9 md:py-3 py-2 px-6 rounded-full" type="button">Sign In</button></Link>
        </div>
    )
}