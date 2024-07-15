import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GoogleIcon from "../assets/google-svgrepo-com.svg";
import FacebookIcon from "../assets/facebook.svg";
import SignupInputs from "../components/SignupInputs";
import Signup3rd from "../components/Signup3rd";
import { toast, Toaster } from "sonner";
// import {useAuth} from "../contexts/AuthContext";
import { auth } from "../firebase/firebase";
// import {useAuth} from "../contexts/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import {
  doSignInWithGoogle,
  doSignInWithFacebook,
  registerEmailPass,
} from "../firebase/auth";

function Signup() {
  const navigate = useNavigate();
  // const { userLoggedIn } = useAuth()
  const [hide, setHide] = useState(false);
  const [signingUp, setSigningup] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      } else {
        console.log("no user");
      }
    });
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setSigningup((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  const onGoogleSignIn = (e) => {
    try {
      doSignInWithGoogle()
        .then(() => {
          setTimeout(() => {
            navigate("/home");
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

  const onFacebookSignIn = (e) => {
    try {
      doSignInWithFacebook()
        .then((userCredential) => {
          setTimeout(() => {
            navigate("/home");
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

  const register = async () => {
    try {
      await registerEmailPass(signingUp.email, signingUp.password)
        .then((userCredential) => {
          toast.success("Signup successful!", {
            duration: 4000,
            className: "bg-green-200",
          });
          setTimeout(() => {
            navigate("/home");
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
    <div className="flex md:columns-2">
       <div className="w-full py-10 h-dvh content-center bg-food-pattern">
        <div className="md:w-9/12 mx-14 xl:w-8/12 md:mx-auto">
          <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center shadow-lg">
            <Link to={"/"}>
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 1024 1024"
                fill="#000000"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                strokeWidth="38.912"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
                    fill=""
                  ></path>
                </g>
              </svg>
            </Link>
          </div>
          <h1 className="mt-5 font-poppins font-bold text-orangered text-3xl lg:text-5xl">
            Sign Up
          </h1>
          <p className="mt-3 md:mt-5 text-base lg:text-lg font-poppins">
            Already have an account?{" "}
            <Link to={"/signin"}>
              <span className="text-orangered font-semibold underline text-wrap">
                Login Now
              </span>
            </Link>
          </p>

          <SignupInputs heading="Email">
            <input
              value={signingUp.email}
              onChange={handleChange}
              name="email"
              className="w-full border-y border-x border-x-slate-300 rounded-xl px-4 py-2 h-14 lg:h-16 font-poppins"
              type="email"
              required
            />
          </SignupInputs>
          <SignupInputs heading="Password">
            <div className="flex w-full relative">
              <input
                value={signingUp.password}
                onChange={handleChange}
                name="password"
                className="w-full border-y border-x border-x-slate-300 rounded-xl px-4 py-2 h-14 lg:h-16 font-poppins"
                type={hide ? "password" : "text"}
                placeholder=""
                required
              />
              <div className="absolute w-16 right-0">
                <button
                  onClick={() => setHide(!hide)}
                  className="border-s ps-3 my-2 h-10 lg:h-12"
                >
                  {hide ? (
                    <svg
                      width="40px"
                      height="40px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M4 10C4 10 5.6 15 12 15M12 15C18.4 15 20 10 20 10M12 15V18M18 17L16 14.5M6 17L8 14.5"
                          stroke="#000000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  ) : (
                    <svg
                      className="h-9 w-9 lg:h-10 lg:w-10"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M4 12C4 12 5.6 7 12 7M12 7C18.4 7 20 12 20 12M12 7V4M18 5L16 7.5M6 5L8 7.5M15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13Z"
                          stroke="#000000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </SignupInputs>

          <button
            onClick={register}
            className="h-14 lg:h-16 mt-16 lg:text-xl text-white font-poppins rounded-xl w-full bg-orangered"
          >
            Sign Up
          </button>

          <div className="relative flex pt-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="mt-5">
            <Signup3rd
              onSign={onGoogleSignIn}
              title="Sign Up"
              image={GoogleIcon}
              name="Google"
            />
            <Signup3rd
              onSign={onFacebookSignIn}
              title="Sign Up"
              image={FacebookIcon}
              name="Facebook"
            />
          </div>
        </div>
      </div>
      <div className="grow relative text-wrap hidden md:block md:bg-login-pattern bg-cover w-full">
        <div className="absolute bottom-0 w-4/5 right-0">
          <h1 className="stroke-black font-shadow text-right h-full text-5xl pb-5 pe-5 font-bold text-white font-poppins">
            Helping you plan your next meal filipino meal
          </h1>
        </div>
      </div>
      <Toaster expand visibleToasts={1} />
    </div>
  );
}

export default Signup;
