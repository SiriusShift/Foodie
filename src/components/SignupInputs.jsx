export default function SignupInputs({children, heading}){
    return(
        <div className="mt-8">
            <label className="text-base lg:text-lg font-poppins indent-2 mb-2">{heading}</label>
            {children}
        </div>
    )
}