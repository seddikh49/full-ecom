import React, { useContext,useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../‏‏assets/frontend_assets/assets";
import { useLocation } from 'react-router-dom';

import { GoChevronLeft } from "react-icons/go";
import { ShopContext } from "../context/shopContext";

const Navbar = () => {

const {setToken,navigate,setTakeItem} = useContext(ShopContext)



 const location = useLocation();
  const path = location.pathname.split('/')

  useEffect(() => {
    if (path.includes('collection')) {
      setShowSearch(true)
    }else{
      setShowSearch(false)
    }
  }, [location]);

  const logout = () => {
      localStorage.setItem('token','')
      setToken('')
      setTakeItem({})
      navigate('/login')
  }


  const { setShowSearch,showSearch ,setSearchBar,countOfCarts} = useContext(ShopContext)
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex h-[70px] justify-between mb-10  ">
      <Link to={"/"}>
        <h1 className="text-4xl font-extrabold font-poppins text-gray-600 ">
          SEDEVER<span className="text-orange-400 text-6xl aspect-square">.</span>
        </h1>
      </Link>
      <div className="flex justify-between items-center  ">
        <ul className="hidden xl:flex lg:flex md:flex justify-between gap-5 items-center">
          <NavLink
            to={"/"}
            className={
              "flex flex-col relative items-center font-poppins font-bold gap-1 text-gray-600"
            }
          >
            <p>HOME</p>
            <hr className="h-[2px]  w-2/4 text-orange-400 hidden absolute -bottom-1 " />
          </NavLink>
          <NavLink
            to={"/collection"}
            className={
              "flex relative flex-col items-center gap-1 font-poppins font-bold text-gray-600 "
            }
          >
            <p>COLLECTION</p>
            <hr className="h-[2px]  w-2/4 text-orange-400 hidden absolute -bottom-1 " />
          </NavLink>
          <NavLink
            to={"/about"}
            className={
              "flex relative flex-col items-center gap-1 font-poppins font-bold text-gray-600"
            }
          >
            <p>ABOUT</p>
            <hr className="h-[2px] text-orange-400 w-2/4  hidden absolute -bottom-1 " />
          </NavLink>
          <NavLink
            to={"/contact"}
            className={
              "flex relative flex-col items-center gap-1 font-poppins font-bold text-gray-600"
            }
          >
            <p>CONTACT</p>
            <hr className="h-[2px]  w-2/4 text-orange-400 hidden absolute -bottom-1 " />
          </NavLink>
        </ul>
      </div>
      <div className="flex items-center gap-2">
          <img onClick={()=> setSearchBar(true)} className={`w-5 ${showSearch ?'opacity-100 ' : 'opacity-0 pointer-events-none'}`} src={assets.search_icon} alt="" />
        <div className="group relative ">
          {localStorage.getItem('token') && (<Link to={'/login'} > <img className="w-5 min-w-5 ml-2 " src={assets.profile_icon} alt="" /></Link>)}
          <div
            className="group-hover:block hidden font-poppins
           font-bold absolute py-2 px-5 right-0 dropdown-menu
            text-gray-500 bg-gray-100  w-36 rounded-md "
          >
            <p className="cursor-pointer hover:text-gray-800 p-1">My profile</p>
            <p className="hover:text-gray-800 cursor-pointer p-1">Orders</p>
            <p onClick={logout} className="hover:text-gray-800 cursor-pointer p-1">Logout</p>
          </div>
        </div>
        <Link to={"/card"} className="relative">
          <img className="w-5 min-w-5 ml-2" src={assets.cart_icon} alt="" />
          <div className="bg-black text-amber-50 rounded-full font-bold absolute aspect-square right-[-40%] bottom-[-40%] text-[10px] w-5 text-center flex justify-center items-center ">
            {countOfCarts()}
          </div>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 xl:hidden lg:hidden md:hidden sm:flex cursor-pointer ml-2"
          alt=""
        />
        <div>
          {/* // hidden links///////////////////////////// */}

          <div
            className={`transition-all duration-200 ease-in left-0  absolute  w-0 overflow-hidden  top-0 right-0 ${visible ? "w-full   " : ""
              }   bottom-0  flex justify-start bg-gray-100  `}
          >
            <div
              className=" absolute flex items-center   gap-2 pl-2 text-2xl text-gray-600"
              onClick={() => setVisible(false)}
            >
              <GoChevronLeft className="pt-1 text-4xl cursor-pointer" />
              Back
            </div>
            <ul className=" justify-between gap-5 items-center absolute w-full mt-10">
              <NavLink
                onClick={() => setVisible(false)}
                to={"/"}
                className={
                  "flex text-2xl flex-col border px-4 border-gray-300 py-2 relative  font-poppins font-medium gap-1 text-gray-600"
                }
              >
                <p>HOME</p>
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                to={"/collection"}
                className={
                  "flex relative text-2xl border  px-4 border-gray-300 py-2 flex-col  gap-1 font-poppins font-medium text-gray-600 "
                }
              >
                <p>COLLECTION</p>
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                to={"/about"}
                className={
                  "flex text-2xl relative py-2 px-4 border border-gray-300 flex-col  gap-1 font-poppins font-medium text-gray-600"
                }
              >
                <p>ABOUT</p>
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                to={"/contact"}
                className={
                  "flex relative text-2xl border px-4 border-gray-300 py-2 flex-col  gap-1 font-poppins font-medium text-gray-600"
                }
              >
                <p>CONTACT</p>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
