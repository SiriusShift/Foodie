import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, Navigate } from "react-router-dom";
import { useTypewriter} from "react-simple-typewriter";
import { useAuth } from "../contexts/index";
import image from "../assets/landing-page.webp"
export default function LandingPage() {
  const { userLoggedIn } = useAuth();
  const [word] = useTypewriter({
    words: ["EASIER", "FASTER"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 100,
  });
  return (
    <>
      {userLoggedIn && <Navigate to={"/home"} replace={true} />}
      <div className="bg-food-pattern h-full min-h-svh overflow-auto">
        <Navbar>
          <div className="content-center">
            <Link to={"/signin"}>
              <button
                className="border border-darrow font-poppins text-darrow hover:bg-darrow hover:text-white hover:border-0 text-xs lg:text-base px-9 py-3 rounded-lg"
                type="button"
              >
                Sign In
              </button>
            </Link>
          </div>
        </Navbar>
        <div
          className="text-left px-8 sm:px-16 md:px-24 lg:px-30 xl:px-44 2xl:px-56 relative pt-10"
        >
          <h1 className="2xl:text-7xl lg:w-9/12 md:text-6xl text-5xl font-shrikhand">
            MEAL PLANNING <br/>MADE {word}.
          </h1>
          <div className="sm:flex mt-5 justify-between">
            <p className="2xl:text-2xl sm:w-8/12 lg:text-xl mb-10 sm:mb-0 text-lg xs:text-body font-poppins font-light text-darrow">
              Foodie is your ultimate meal planner, taking the guesswork out of
              your daily dining decisions
            </p>

            <Link
              className="2xl:px-14 2xl:py-4 h-14 xl:px-7 xl:py-3 py-3 px-6  bg-navy font-poppins tracking-wide bg-darrow text-white shadow-md text-lg rounded-lg font-medium"
              to={"/signup"}
            >
              Sign up now
            </Link>
          </div>
            <img src={image} className="w-full h-64 lg:h-[350px] 2xl:h-[450px] my-10 object-cover rounded-xl"/>
        </div>
      </div>
      <Footer />
    </>
  );
}
