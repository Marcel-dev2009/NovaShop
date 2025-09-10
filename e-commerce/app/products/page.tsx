import { stripe } from "@/lib/stripe"
import ProductsList from "../components/ProductsList"
async function ProductsPage() {
  const products = await stripe.products.list({
    expand : ["data.default_price"],
    limit : 22,
  })
  return (
    <>
     <section className="pb-8">
       <h1 className=" text-[1.5rem]  md:text-3xl font-bold text-center py-4">All Products</h1> 
       <ProductsList products={products.data}/>
     </section>
    </>
  )
}
export default ProductsPage