import Image from "next/image";
import { stripe } from "@/lib/stripe";

export default async function Menu() {
  const products = await stripe.products.list({
  expand : ["data.default_price"],
  limit: 5,
  });
  console.log(products);        
}