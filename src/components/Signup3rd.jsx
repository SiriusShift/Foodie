export default function Signup3rd({image, name}) {
    return(
        <div className="flex w-full items-center mt-6 rounded-full relative">
            <div className="absolute content-center w-20 h-16">
                <img src={image} className="mx-6 lg:h-10 h-7 lg:w-10 w-7 "/>
            </div>
            <button className="w-full font-poppins font-semibold hover:bg-gray-100 button rounded-full h-14 md:h-16 bg-white"><span className="text-sm md:text-base">Signup with {name}</span></button>
        </div>
    )
}