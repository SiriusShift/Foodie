export default function SignupInputs({children, heading, label}){
    return(
        <div className="mt-8">
            <label for={label} className="text-base lg:text-lg font-poppins indent-2 mb-2">{heading}</label >
            {children}
        </div>
    )
}