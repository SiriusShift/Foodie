import axios from "axios";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"


export default function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/home').then(res => {
            console.log(res.data);
            navigate('/home');
        })
        .catch(err => {
            console.log(err);
            // navigate('/signin');
        })
    })
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}