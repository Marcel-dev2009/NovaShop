import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Link from "next/link";
import Image from "next/image";
import Carousel from "./components/Carousel";
export default async function Home() {
  const products = await stripe.products.list({
    expand : ["data.default_price"],
    limit : 5,
  })
  return(
    <div className="overflow-y-hidden">
      <section>
        <div className="flex flex-col md:flex-row justify-center  mx-auto bg-zinc-200 shadow-xl w-full md:w-[75%] px-30 dark:bg-gray-950 dark:text-white rounded-lg overflow-x-hidden overflow-y-hidden
        max-w-[1200px]">
          <div className="md:items-center tranform -translate-x-6 translate-y-[11rem] ">
            <h2 className=" transform -translate-y-[10rem] -translate-x-[1.4rem] md:-translate-y-0 md:-translate-x-0 text-[1.2rem] whitespace-nowrap md:text-3xl font-bold" id="shop">Welcome to NovaShop</h2> <br />
            <p className="text-xs transform -translate-y-[11rem] whitespace-nowrap -translate-x-[2.6rem] md:-translate-y-0 md:-translate-x-0 ">Discover the latest products at the best prices</p>
            <Button variant="default" asChild className="rounded-full mt-2 transform -translate-y-[5rem] whitespace-nowrap md:-translate-y-0 md:-translate-x-0 mb-2">
               <Link href="/products" className="text-[0.8rem] md:text[1.5rem]">Browse All Products</Link>
            </Button>
          </div>
          <Image src={products.data[0].images[0]} alt="Banner Image" width={400} height={400} className="w-400px transform -translate-y-[3rem] md:-translate-y-0 mb-2"/>
        </div>

        <section>
          <Carousel products={products.data}/>
        </section>
      </section>
    </div>
  )
}
