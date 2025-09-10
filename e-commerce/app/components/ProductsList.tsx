"use client"
import Stripe from "stripe"
import ProductsCard from "./ProductCard";
import { useState } from "react";
interface Props {
   products : Stripe.Product[];    
}
function ProductsList({products} : Props) {
  const [searchTerm , setSearchTerm] = useState<string>("");
  const filteredProductList = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameCheck = product.name.toLowerCase().includes(term);
    const descCheck = product.description ? product.description.toLowerCase().includes(term) : false
    return nameCheck || descCheck
  }) 
  return (
   <>
   <div>
    <div className="mb-6 flex justify-center">
     <input type="text" placeholder="Search Products.."
     value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:"/>     
    </div>    
    <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:m-20">
       {filteredProductList.map((item , i) => (
         <li key={i}><ProductsCard product={item}/></li> 
       ))}   
    </ul>
   </div>
   </>
  )
}
export default ProductsList