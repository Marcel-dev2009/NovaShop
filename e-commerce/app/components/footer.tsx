/* "use client"
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import { useEffect, useState } from "react";
function Footer() {
 const [mobileView , setMobileView] = useState(false);
  useEffect(() => {
 const handleResize = () => {
   if(window.innerWidth <= 768){
    setMobileView(true);
   }
 }
   window.addEventListener("resize" , handleResize);
   return () => window.removeEventListener("resize" , handleResize)
  },[mobileView])
  return (
    <>
    {mobileView && window.innerWidth <= 760 ? (
       <>
    <div className="container grid place-content-center">
   <ul className="flex mx-4 gap-4">
     <Link href="https://wa.me/2349122040914?text=Hello%20Marcel!%20I%20found%20your%20site.">
     <IoLogoWhatsapp color="green" size={20}/></Link>
    <Link href="https://github.com/Marcel-dev2009">
    <FaGithub size={20}/>
    </Link>
    <Link href="tel:09122040914">
    <FaPhoneAlt color="blue" size={20}/>
     </Link>
    <Link href="mailto:somtochukwuizuoba@gmail.com?subject=Hello%20Somtochukwu&body=I%20wanted%20to%20reach%20out...">
     <IoIosMail color="cyan" size={20}/>
    </Link>
     </ul>
     </div>
       </>   
    ) : (<>
    <div className="container flex justify-between mb-6 border  p-8 rounded-lg w-full mx-8">
   <div>
   <ul className="flex mx-4 gap-4">
     <Link href="https://wa.me/2349122040914?text=Hello%20Marcel!%20I%20found%20your%20site.">
     <IoLogoWhatsapp color="green" size={20}/></Link>
    <Link href="https://github.com/Marcel-dev2009">
    <FaGithub size={20}/>
    </Link>
    <Link href="tel:09122040914">
    <FaPhoneAlt color="blue" size={20}/>
     </Link>
    <Link href="mailto:somtochukwuizuoba@gmail.com?subject=Hello%20Somtochukwu&body=I%20wanted%20to%20reach%20out...">
     <IoIosMail color="cyan" size={20}/>
    </Link>
     </ul>
     <pre>Thank You for Shopping with us</pre>
   </div>
     <div className="flex gap-4">
      <p className="border-r dark:border-r-white/10 border-r-black/5 px-4">@copyright 2025</p>
      <p className="border-r dark:border-r-white/10 border-r-black/5 px-4 ">All rights Reserved</p>
      <p className="">NovaShop</p>
     </div>
    </div>
    </>)}
    </>
  )
}
export default Footer */