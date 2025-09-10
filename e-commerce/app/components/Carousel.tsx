"use client"
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import Stripe from "stripe";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
interface Props {
 products : Stripe.Product[];
}
function Carousel({products} : Props) {
   const [current ,setCurrent] = useState<number>(0);
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrent((prev) => (prev + 1) % products.length)
     }, 3000);
     return () => clearInterval(interval);
   }, [ products.length])  
   useGSAP(() => {
    gsap.to("#text" , {
      opacity : 1,
      x : window.innerWidth < 768 ? 10 : 200,
      ease : "sine.in"
    })
   },[])
   const currentProduct = products[current];
   const price = currentProduct.default_price as Stripe.Price; // We did this       
  return (
     <Card className="relative overflow-hidden rounded-lg shadow-md dark:border-white/5 border-black/5 md:mx-10 mb-10 bg-zinc-200 dark:bg-[#18181B] text-black dark:text-white">
       {currentProduct.images && currentProduct.images[0] && (
          <div className="relative h-80 w-[50%]  md:w-full">
              <Image alt={currentProduct.name} src={currentProduct.images[0]}  objectFit="cover" width={450} height={450} className="transform md:translate-x-[12rem] md:-translate-y-12 translate-x-[6rem]"/>      
          </div>
       )}
       <CardContent className="absolute inset-0 flex flex-col items-center justify-center dark:bg-transparent ">
          <CardTitle className="md:text-3xl font-bold text-black dark:text-zinc-400 mb-2 transform opacity-0
          translate-y-[5rem] md:translate-y-0
          " id="text">{currentProduct.name}</CardTitle>
          {price && price.unit_amount && (
            <p className="font-bold text-black dark:text-zinc-400 mb-2 transform opacity-0 translate-y-[6rem] md:translate-y-0" id="text">${(price.unit_amount/100).toFixed(2)}</p>        
          )}
       </CardContent>
     </Card>
  )
}
export default Carousel