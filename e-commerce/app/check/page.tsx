"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store"
import { checkOutAction } from "../checkout-action";

function CheckoutPage() {
  const {items , addItem ,removeItem , clearCart} = useCartStore();
  const total = items.reduce((acc , item) => acc +item.price * item.quantity , 0);
  if (items.length === 0){
    return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart is Empty</h1>
    </div>
  }
  return (
   <>
   <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
    <Card className="max-w-md mx-auto mb-8">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="flex flex-col gap-2 border-b pb-2">
              <div className="flex justify-between">
                <span className="font-medium">{item.name}</span>
                <span className="font-semibold">{" "} {((item.price * item.quantity) / 100).toFixed(2)}</span>
              </div>
               <div className="flex items-center gap-2">
     <Button variant="outline" size="sm" onClick={() => removeItem(item.id)}>-</Button>
      <span className="text-lg font-semibold">{item.quantity}</span>
      <Button size="sm" onClick={() => addItem({...item, quantity: 1})} className="bg-black dark:bg-zinc-200 dark:text-black text-white">+</Button>
     </div>
            </li>
          ))}
        </ul>

        <div className="py-6">
          Total  : ${(total / 100).toFixed(2)}
        </div>
      </CardContent>
    </Card>
    <form action={checkOutAction} className=" max-w-md mx-auto ">
      <input type="hidden" name="items" value={JSON.stringify(items)} />
      <Button type="submit" variant="default" className="w-full">Procced To Payment</Button>
    </form>
    <div className="max-w-md mx-auto mt-8">
      <Button className="w-full" variant="default" onClick={() => clearCart()}>Clear Cart</Button>
    </div>
   </div>
   </>
  )
}
export default CheckoutPage