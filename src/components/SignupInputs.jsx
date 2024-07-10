export default function SignupInputs({children, heading}){
    return(
        <div className="mt-8">
            <h2 className="text-base lg:text-lg font-poppins indent-2 mb-2">{heading}</h2>
            {children}
        </div>
    )
}