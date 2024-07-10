export default function Signup3rd({image, name}) {
    return(
        <div className="flex w-full mt-6 rounded-full relative">
            <div className="absolute w-20 h-16">
                <img src={image} className="mx-6 my-3" height="40px" width="40px"/>
            </div>
            <button className="w-full font-poppins font-semibold hover:bg-gray-100 button rounded-full h-16 bg-white">Signup with {name}</button>
        </div>
    )
}