import { Navigate, useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { toast, Toaster } from "sonner";
import { useAuth } from "../contexts/index";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import defaultProfile from "../assets/profile.svg";
import TabList from "../components/TabList";
import Customize from "../components/Customize";
import star from "../assets/star.svg";
import sinigang from "../assets/sinigang.jpg";
import halo from "../assets/halo-halo.webp";
import talong from "../assets/tortang-talong.jpg";
import add from "../assets/add.svg";
import inasal from "../assets/inasal.jpg";
import full from "../assets/rating.svg";
import violet from "../assets/Violet-star.svg";
import half from "../assets/half-rating.svg";
import sun from "../assets/sun.png";
import adobo from "../assets/adobo.webp";
import kalabasa from "../assets/kalabasa.webp";
import express from "../assets/bicol-express.webp";
import axios from "axios";
export default function Home() {
  const navigate = useNavigate();
  const padding = "px-8 xs:px-10 sm:px-16 md:px-24 lg:px-30 xl:px-44 2xl:px-56";
  const { userLoggedIn, currentUser } = useAuth();
  const [open, setOpen] = useState(false);

  function signout() {
    auth.signOut().then(() => {
      navigate("/signin");
    });
  }



  return (
    <div>
      {!userLoggedIn && <Navigate to={"/"} replace={true} />}
      <div className="bg-food-pattern h-full min-h-svh overflow-auto">
        <Navbar>
          <div className="lg:content-center lg:ms-36 xl:ms-40">
            <ul className="space-x-10 hidden lg:flex">
              <TabList />
            </ul>
          </div>
          <div className="relative content-center">
            <div className="w-40 flex justify-end mb-2">
              <div
                onClick={() => setOpen(!open)}
                className="w-12 h-12 rounded-full bg-white border shadow-md border-white"
              >
                <img
                  src={defaultProfile}
                  className="bg-cover h-7 w-7 mx-auto mt-3"
                  alt=""
                />
              </div>
            </div>
            {open && (
              <div className="absolute z-10 bg-white rounded-lg shadow w-40">
                <ul className="py-2 text-sm text-gray-700 ">
                  <div className="lg:hidden">
                    <TabList />
                  </div>
                  <li>
                    <Link
                      to={"/profile"}
                      className="block px-4 py-2 font-poppins hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/settings"}
                      className="block px-4 py-2 font-poppins hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <div
                      onClick={signout}
                      className="block px-4 py-2 font-poppins hover:bg-gray-100 "
                    >
                      Logout
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </Navbar>
        <Customize />
        <div className={`${padding} my-20`}>
          <h1 className={`text-2xl sm:text-4xl font-extrabold font-poppins`}>
            FILIPINO SIGNATURE
          </h1>
          <p className="font-poppins font-light">
            Most popular filipino foods around the world
          </p>
          <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-3 mt-5">
            <div className="w-full ">
              <div className="rounded-md shadow-md  bg-white p-5 pt-6 ">
                <div className="flex relative items-center">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl leading-none text-ube ps-5 w-9/12 font-shrikhand">
                    WORLD FAMOUS HALO HALO
                  </h1>
                  <img src={star} alt="halo" className="w-20" />
                </div>
                <div className="h-52 sm:h-72 lg:h-auto overflow-hidden lg:overflow-visible">
                  <img
                    src={halo}
                    className="object-cover"
                    alt="halo halo desert from philippines"
                  />
                </div>
                <div className="flex mt-2 space-x-2">
                  <img src={violet} className="w-7" alt="" />
                  <img src={violet} className="w-7" alt="" />
                  <img src={violet} className="w-7" alt="" />
                  <img src={violet} className="w-7" alt="" />
                  <img src={violet} className="w-7" alt="" />
                </div>
              </div>
              <div className="w-full  mt-5 p-5 hidden md:  2xl:hidden  rounded-xl lg:flex justify-center ">
                <img src={sun} className="w-52" alt="" />
              </div>
            </div>
            <div className="w-full items-stretch mt-5 lg:px-4 lg:mt-0 col-span-2">
              <div className="flex row-span-1 h-full md:mt-0 gap-5 lg:gap-5 flex-wrap md:justify-between lg:justify-around  2xl:justify-center w-full">
                <div className="flex w-full md:w-[48%] lg:w-[48%] 2xl:w-[30%] items-end relative">
                  <div className="h-full w-full rounded-xl z-0 relative  bg-white border border-gray-300 shadow-lg">
                    <div
                      class="mx-auto w-full h-52 bg-left md:h-40 lg:h-32 min-[1600px]:h-36 min-[1750px]:h-44 relative bg-cover rounded-t-xl overflow-hidden"
                      style={{ backgroundImage: `url(${sinigang})` }}
                    ></div>
                    <div className="mx-5">
                      <div className="flex items-center mt-3 md:my-2">
                        <div className="flex-col w-full">
                          <h1 className="font-poppins text-xl md:text-base font-bold text-black">
                            Sinigang na Baboy
                          </h1>
                          <h2 className="font-poppins sm:text-lg md:text-xs text-black font-body">
                            Panlasang Pinoy
                          </h2>
                        </div>
                      </div>
                      <div className="gap-3 lg:absolute bottom-0 my-3 flex">
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={full} className="w-6 md:w-5" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full md:w-[48%] lg:w-[48%] 2xl:w-[30%] items-end relative">
                  <div className="h-full w-full rounded-xl z-0 relative  bg-white border border-gray-300 shadow-lg">
                    <div
                      class="mx-auto w-full h-52 bg-left md:h-40 lg:h-32 min-[1600px]:h-36 min-[1750px]:h-44 relative bg-cover rounded-t-xl overflow-hidden"
                      style={{ backgroundImage: `url(${talong})` }}
                    ></div>
                    <div className="mx-5">
                      <div className="flex items-center mt-3 md:my-2">
                        <div className="flex-col w-full">
                          <h1 className="font-poppins text-xl md:text-base font-bold text-black">
                            Tortang talong
                          </h1>
                          <h2 className="font-poppins sm:text-lg md:text-xs text-black font-body">
                            Australian Eggs
                          </h2>
                        </div>
                      </div>
                      <div className="gap-3 lg:absolute bottom-0 my-3 flex">
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={half} className="w-6 md:w-5" alt="" />
                        <img src={half} className="w-6 md:w-5" alt="" />
                        <img src={half} className="w-6 md:w-5" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full md:w-[48%] lg:w-[48%] 2xl:w-[30%]  pt-0 items-end relative">
                  <div className="h-full w-full rounded-xl z-0 relative  bg-white border border-gray-300 shadow-lg">
                    <div
                      class="mx-auto w-full h-52 bg-left md:h-40 lg:h-32 min-[1600px]:h-36 min-[1750px]:h-44 relative bg-cover rounded-t-xl overflow-hidden"
                      style={{ backgroundImage: `url(${inasal})` }}
                    ></div>
                    <div className="mx-5">
                      <div className="flex items-center mt-3 md:my-2">
                        <div className="flex-col w-full">
                          <h1 className="font-poppins text-xl md:text-base font-bold text-black">
                            Chicken Inasal
                          </h1>
                          <h2 className="font-poppins sm:text-lg md:text-xs text-black font-body">
                            Australian Eggs
                          </h2>
                        </div>
                      </div>
                      <div className="gap-3 lg:absolute bottom-0 my-3 flex">
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={half} className="w-6 md:w-5" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full md:w-[48%] lg:w-[48%] 2xl:w-[30%]  pt-0 items-end relative">
                  <div className="h-full w-full rounded-xl z-0 relative  bg-white border border-gray-300 shadow-lg">
                    <div
                      class="mx-auto w-full h-52 bg-left md:h-40 lg:h-32 min-[1600px]:h-36 min-[1750px]:h-44 relative bg-cover rounded-t-xl overflow-hidden"
                      style={{ backgroundImage: `url(${adobo})` }}
                    ></div>
                    <div className="mx-5">
                      <div className="flex items-center mt-3 md:my-2">
                        <div className="flex-col w-full">
                          <h1 className="font-poppins text-xl md:text-base font-bold text-black">
                            Adobong Manok
                          </h1>
                          <h2 className="font-poppins sm:text-lg md:text-xs text-black font-body">
                            Panlasang Pinoy
                          </h2>
                        </div>
                      </div>
                      <div className="gap-3 lg:absolute bottom-0 my-3 flex">
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={half} className="w-6 md:w-5" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full md:w-[48%] lg:w-[48%]  2xl:w-[30%]  pt-0 items-end relative">
                  <div className="h-full w-full rounded-xl z-0 relative  bg-white border border-gray-300 shadow-lg">
                    <div
                      class="mx-auto w-full h-52 bg-left md:h-40 lg:h-32 min-[1600px]:h-36 min-[1750px]:h-44 relative bg-cover rounded-t-xl overflow-hidden"
                      style={{ backgroundImage: `url(${express})` }}
                    ></div>
                    <div className="mx-5">
                      <div className="flex items-center mt-3 md:my-2">
                        <div className="flex-col w-full">
                          <h1 className="font-poppins text-xl md:text-base font-bold text-black">
                            Bicol Express
                          </h1>
                          <h2 className="font-poppins sm:text-lg md:text-xs text-black font-body">
                            Yummy Kitchen
                          </h2>
                        </div>
                      </div>
                      <div className="gap-3 lg:absolute bottom-0 my-3 flex">
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={half} className="w-6 md:w-5" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full md:w-[48%] lg:w-[48%]  2xl:w-[30%] pt-0 items-end relative">
                  <div className="h-full w-full rounded-xl  z-0 relative  bg-white border border-gray-300 shadow-lg">
                    <div
                      class="mx-auto w-full h-52 bg-left md:h-40 lg:h-32 min-[1600px]:h-36 min-[1750px]:h-44 relative bg-cover rounded-t-xl overflow-hidden"
                      style={{ backgroundImage: `url(${kalabasa})` }}
                    ></div>
                    <div className="mx-5">
                      <div className="flex items-center mt-3 md:my-2">
                        <div className="flex-col w-full">
                          <h1 className="font-poppins text-xl md:text-base font-bold text-black">
                            Ginataang Kalabasa
                          </h1>
                          <h2 className="font-poppins sm:text-lg md:text-xs text-black font-body">
                            Panlasang Pinoy
                          </h2>
                        </div>
                      </div>
                      <div className="gap-3 lg:lg:absolute bottom-0 my-3 flex">
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={full} className="w-6 md:w-5" alt="" />
                        <img src={half} className="w-6 md:w-5" alt="" />
                        <img src={half} className="w-6 md:w-5" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {/* </div> */}
        </div>
        <Footer />
        <Toaster expand visibleToasts={1} />
      </div>
    </div>
  );
}
