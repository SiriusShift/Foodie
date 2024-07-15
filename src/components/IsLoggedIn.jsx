import {useNavigate} from "react-router-dom"
import {useEffect} from "react";
import {toast} from "sonner";

export default function IsLoggedIn() {
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if(user){
                toast.success("Login successful", {
                    duration: 4000,
                    className: 'bg-green-200',
                })
            }
            else{
                navigate("/signin");
            }
        });
    })
}