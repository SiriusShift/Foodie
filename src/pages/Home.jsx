import {useNavigate} from "react-router-dom"
import {auth} from "../firebase/firebase";
import { useEffect } from "react";
import {onAuthStateChanged} from "firebase/auth";
import {toast, Toaster} from "sonner";


export default function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
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

    function signout() {
        auth.signOut().then(() => {
            navigate("/signin");
        })
    }

    return (
        <div>
            <h1>Home</h1>
            <button className="bg-red-500" onClick={signout}>Signout</button>
            <Toaster />
        </div>
    )
}