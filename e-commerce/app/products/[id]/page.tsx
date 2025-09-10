import ProductDetail from "@/app/components/ProductDetail"
import { stripe } from "@/lib/stripe"
 async function Product({params} : {params : Promise<{id : string}>}) {
  const {id} = await params
  const product = await stripe.products.retrieve(id, {
    expand : ["default_price"]      
  })
  const productJson = JSON.parse(JSON.stringify(product))
  return (
    
    <ProductDetail product={productJson} />
  )
}
export default Product