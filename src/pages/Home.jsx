import {Navigate, useNavigate} from "react-router-dom"
import {auth} from "../firebase/firebase";
import {toast, Toaster} from "sonner";
import {doSignOut} from "../firebase/auth";
import {useAuth} from "../contexts/index";
 
export default function Home() {
    const navigate = useNavigate();
    const {userLoggedIn} = useAuth();

    function signout() {
        auth.signOut().then(() => {
            navigate("/signin");
        })
    }

    return (
        <div>
            {!userLoggedIn && (<Navigate to={"/"} replace={true}/>)}
            <h1>Home</h1>
            <button className="bg-red-500" onClick={doSignOut}>Signout</button>
            <Toaster expand visibleToasts={1}/>
        </div>
    )
}