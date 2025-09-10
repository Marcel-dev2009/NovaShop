"use client"
import Stripe from "stripe"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
interface Props {
   product : Stripe.Product;      
}
function ProductDetail({product} : Props) {
  const {items , addItem , removeItem} = useCartStore();
   const cartItem = items.find((item) => item.id === product.id);
   const quantity = cartItem ? cartItem.quantity : 0;
   const price = product.default_price as Stripe.Price       
   const onAddItem = () => {
    addItem({
      id : product.id,
      name : product.name,
      price : price.unit_amount as number,
      imageUrl : product.images ? product.images[0] : null,
      quantity : 1,
    })
   }
  return (
    <>
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-0 items-center">
      {product.images && product.images[0] && (
   <div className="relative h-80 w-full md:w-1/2 rounded-lg overflow-hidden">
          <Image alt={product.name} src={product.images[0]}  objectFit="cover" 
          width={300} height={300} 
          className="transition duration-300 hover:opacity-90"/>      
</div>                  
)}          

<div className="md:w-1/2">
     <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
     {product.description && (
       <p className="dark:text-zinc-200 text-gray-700 mb-4">{product.description}</p>   
     )}  
     {price && price.unit_amount && (
       <p className="text-lg font-semibold text-gray-900 dark:text-zinc-200">{(price.unit_amount / 100).toFixed(2)}</p>   
     )}   
     <div className="flex items-center space-x-4">
     <Button variant="outline" onClick={() => removeItem(product.id)}>-</Button>
      <span className="text-lg font-semibold">{quantity}</span>
      <Button onClick={() => onAddItem()} className="bg-black dark:bg-zinc-200 dark:text-black text-white">+</Button>
     </div>
  </div>
    </div>
    </>
  )
}
export default ProductDetail