import Stripe from "stripe";
import dotenv from "dotenv";
import products from "./constants/product.mjs";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function createProducts() {
  for (const product of products) {
    try {
      const created = await stripe.products.create(product);
      console.log(`✅ Created: ${created.name} (${created.id})`);
    } catch (err) {
      console.error(`❌ Failed to create ${product.name}:`, err.message);
    }
  }
} 

createProducts();
