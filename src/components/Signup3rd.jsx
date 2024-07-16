export default function Signup3rd({image, name, title, onSign,alt}) {
    return(
        <div className="flex w-full items-center mt-6 rounded-full relative">
            <div className="absolute content-center w-20 h-16">
                <img src={image} className="mx-6 lg:h-10 h-7 lg:w-10 w-7 " alt={alt}/>
            </div>
            <button onClick={onSign} className="w-full text-gray-600 font-poppins font-medium hover:bg-gray-100 button rounded-full h-14 lg:h-16 bg-white"><span className="text-sm lg:text-base">{title} with {name}</span></button>
        </div>
    )
}