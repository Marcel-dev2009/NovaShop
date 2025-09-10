"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import Stripe from "stripe"
import { Button } from "@/components/ui/button";
interface Props {
   product : Stripe.Product;    
}

function ProductsCard({product} : Props) {
const price = product.default_price as Stripe.Price
  return (
   <>
   <Link href={`/products/${product.id}`} className="block h-full">
   <Card className="group hover:shadow-2xl transition duration-300 py-0 flex flex-col">
       {product.images && product.images[0] && (
               <div className="relative h-80 w-full">
                   <Image alt={product.name} src={product.images[0]}  objectFit="cover" width={300} height={300} 
                   className="group-hover:opacity-90 transition-opacity duration-300  rounded-t-lg object-cover transform translate-x-[2rem]" />      
               </div>
            )}   
            <CardHeader className="p-4">
               <CardTitle className="text-2xl font-bold dark:text-zinc-200 text-gray-800">
                {product.name}
               </CardTitle>
               <CardContent className="p-4 flex-grow flex flex-col justify-between">
              <p className="text-gray-600 dark:text-zinc-200 text-sm mb-2">  {product.description}</p> <br />
                {price && price.unit_amount && (
                  <p className="text-lg font-semibold text-gray-900 dark:text-zinc-200">${(price.unit_amount / 100).toFixed(2)}</p>
                )}
                <Button asChild>
                  <Link href={`/products/${product.id}`}>View More</Link>
                </Button>
               </CardContent>
              </CardHeader>  
   </Card>
   </Link>
   </>
  )
}
export default ProductsCard