import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SignupInputs from "../components/SignupInputs";
import { toast, Toaster } from "sonner";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doPasswordReset } from "../firebase/auth"; 
import ArrowBack from "../assets/arrow-back.svg"
function ForgotPassword() {
  const navigate = useNavigate();
  // const { userLoggedIn } = useAuth()
  const [email, setEmail] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      } else {
        console.log("no user");
      }
    });
  });

  const passwordReset = async () => {
    try {
      await doPasswordReset(email)
        .then(() => {
          toast.success("Password reset email sent", {
            duration: 4000,
            className: "bg-green-200",
          });
          setTimeout(() => {
            navigate("/signin");
          }, 4000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (error) {
            toast.warning(error.code, {
              duration: 4000,
              className: "bg-yellow-200",
            });
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex h-full min-h-svh overflow-auto md:columns-2">
      <div className="w-full content-center bg-food-pattern">
        <div className="md:w-9/12 h-dvh content-center mx-14 xl:w-8/12 md:mx-auto">
          <h1 className="font-poppins font-bold text-orangered text-3xl lg:text-5xl">
            Forgot Password
          </h1>
          <p className="font-poppins mt-2 text-gray-500">No worries, we'll send you reset instructions</p>

          <SignupInputs heading="Email">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="w-full border-y border-x border-x-slate-300 rounded-xl px-4 py-2 h-14 lg:h-16 font-poppins"
              type="email"
              required
            />
          </SignupInputs>

          <button onClick={passwordReset} className="h-14 lg:h-16 mt-10 lg:text-xl text-white font-poppins rounded-xl w-full bg-orangered">
            Continue
          </button>
          <div className="flex justify-center mt-10">
            <img src={ArrowBack} height="30px" width="30px"/><Link to="/signin"><p className="text-gray-500 ms-2 mt-1 font-poppins font-medium text-sm lg:text-base" >Back To Login</p></Link>
          </div>
        </div>
      </div>
      <div className="grow text-wrap hidden md:flex md:bg-signup-pattern justify-end items-end bg-cover w-full">
        <h1 className="stroke-black font-shadow text-right text-5xl mx-20 mb-10 w-4/5 font-bold text-white font-poppins">
          Helping you plan your next meal filipino meal
        </h1>
      </div>
      <Toaster expand visibleToasts={1} />
    </div>
  );
}

export default ForgotPassword;
