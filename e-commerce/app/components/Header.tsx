"use client"
import Link from "next/link"
import Themes from "./Themes"
import Image from "next/image"
import logo from "../../public/assets/images/logo.png"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Menu, ShoppingCart, X } from "lucide-react"
import { useCartStore } from "@/store/cart-store"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
function Header() {
  const [mobileOpen , setMobileOpen] = useState<boolean>(false);
  const {items} = useCartStore();
  const cartCount = items.reduce((acc , item) => acc + item.quantity, 0); 
  useGSAP(() => {

   gsap.to("#logo" , {
    y:0,
    opacity:1,
    ease:"power2.in",
     duration :1,
   })
  },[])
  useEffect(() => {
  const handleResize = () => {
    if(window.innerWidth >= 768){
      setMobileOpen(true);
    }
  }
  window.addEventListener("resize" , handleResize);
  return () => window.removeEventListener("resize" , handleResize);
  },[])
  return (
    <>
    <nav className="sticky top-0 z-50 shadow-lg dark:border-b dark:border-b-white/5 dark:bg-black/100 bg-white">
       <div className="container flex justify-between items-center py-8 md:py-3 px-6">
       <div className="absolute left-2">
          <Link href="/" >
          <Image id="logo" src={logo} alt="This is NovaShop's logo" width={50} height={50} className="transform -translate-y-24 opacity-0"/>
          </Link>
      </div>   
      <div className="hidden space-x-6 mt-6 md:grid md:place-content-center ">
        <ul className="flex gap-4 translate-x-10 transform">
         <Link href="/" className="px-4 font-semibold hover:text-gray-600 hover:scale-[1.2] transition-all" >Home</Link> 
         <Link href='/products' className="px-4 font-semibold hover:text-gray-600 hover:scale-[1.2] transition-all" >Products</Link> 
         <Link href='check' className="px-4 font-semibold hover:text-gray-600 hover:scale-[1.2] transition-all">Checkout</Link> 
        </ul>
        <Themes/>
      </div>
         <div className="flex items-center space-x-4">
            <Link href='/check' className="relative">
             <ShoppingCart className="absolute right-20  hidden md:block "/>
             {cartCount > 0 && (
              <span
              className="absolute -top-4 text-orange-400 right-20 flex h-5 w-5 items-center justify-center
              rounded-lg"
              >{cartCount}</span>
             )}
            
            </Link>
             <Button variant="ghost"
             className="md:hidden"
             onClick={() => setMobileOpen((prev) => !prev)}
             >
              {mobileOpen ? (<X className="w-6 h-6 mx-[15rem]"/>) : (<Menu className="w-6 h-6 mx-[15rem]"/>)}   
             </Button>
         </div>
       </div>
       {mobileOpen && (
        <nav className="md:hidden dark:bg-black/100 dark:text-zinc-200 bg-white text-black shadow-md"> 
          <ul className="flex flex-col space-y-2 p-4 justify-center items-center">
            <li>
              <Link href="/" className="block hover:text-blue-600">Home</Link>
            </li>
            <li>
             <Link href="/products" className="block hover:text-blue-600">Products</Link>
            </li>
            <li>
            <Link href="/check" className="block hover:text-blue-600">Checkout</Link>
            </li>
          </ul>
        </nav>
       )}
    </nav>
    </>
  )
}
export default Header