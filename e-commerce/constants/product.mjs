const products = [
 {
   name: "Acer Aspire Laptop",
    images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331784/AcerAspire_hmbeqq.png"],
    description: "Acer Aspire laptop built for students and professionals, combining solid performance with portability.",
    default_price_data : {
     currency : "usd",
     unit_amount : 59999
    }        
 },
 {
  name: "Baseus Wireless Earbuds",
  images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331782/Baseus-Bud_vhutbt.png"],
  description: "Compact wireless earbuds with deep bass, noise cancellation, and all-day battery life.",
  default_price_data:{
    currency :"usd",
    unit_amount : 4999
  }
},
{
  name: "Mechanical Gaming Keyboard",
  images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331788/Clavier_Gamer-Keyboard_fbtabk.png"],
  description: "High-performance mechanical keyboard with RGB lighting, designed for competitive gaming.",
  default_price_data :{
    currency :"usd",
    unit_amount : 8999
  }
},
{
  name: "Corsair CX750M Power Supply",
  images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331788/CX750M_lkfuqc.png"],

  description: "Reliable modular power supply with 80+ Bronze certification for stable PC performance.",
  default_price_data:{
    currency:"usd",
    unit_amount : 10999
  }
},
{
  name: "Dell OptiPlex Desktop",
  images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331793/Dell_t40fpc.png"],

  description: "Business-class desktop with robust performance and security features for everyday work.",
  default_price_data:{
    currency:"usd",
    unit_amount:79999
  }
},
{
  name: "Full HD USB-C Charger",
  images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331788/FullhDCharger_iwa5ft.png"],
  description: "Compact fast charger supporting multiple devices with USB-C power delivery.",
  default_price_data:{
    currency:"usd",
    unit_amount : 2999
  }
},
{
  name: "Pro Gaming Headset",
  images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331816/GamerPhone_sv4xyl.png"],

  description: "Over-ear gaming headset with surround sound, noise-canceling mic, and comfort padding.",
  default_price_data:{
    currency : "usd",
    unit_amount : 7999
  }
},
{
  name: "Thermaltake Gaming Monitor",
  images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331819/Thermaltake_vdryue.png"],
  
  description: "High-refresh-rate gaming monitor with sharp visuals and ultra-smooth motion for esports.",
  default_price_data :{
    currency : "usd",
    unit_amount : 24999
  }
},
{
  name: "HyperX QuadCast Microphone",
  images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331818/Hyper-X_iudpmp.png"],

  description: "Professional streaming microphone with noise filtering and tap-to-mute sensor.",
  default_price_data:{
    currency:"usd",
    unit_amount : 12999
  }
},
{
  name: "Apple iPhone 16",
  images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331813/iPhone-16_hvxbj7.png"],
  description: "Latest Apple iPhone with powerful performance, advanced camera system, and all-day battery.",
  default_price_data:{
    currency : "usd",
    unit_amount: 119999
  }
  
},
{
  name: "Curved Gaming Monitor",
  images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331812/Gamingmonitor_apbgz0.png"],
  description: "Immersive curved gaming display with ultra-wide field of view and high refresh rates.",
  default_price_data:{
    currency: "usd",
    unit_amount : 34999
  }
},
{
  name: "Microsoft Surface Pro Tablet",
  images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331808/TablexFPro_ul4jfk.png"],
 
  description: "2-in-1 tablet and laptop hybrid designed for portability and productivity.",
  default_price_data:{
    currency:"usd",
    unit_amount:99999
  }
},
{
  name: "Kotion E-Sports Headset",
  images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331806/KotionE_ch_j7a9h3.png"],
 
  description: "Gaming headset with noise isolation, LED lighting, and comfortable ear padding.",
  default_price_data:{
    currency:"usd",
    unit_amount : 5999
  }
},
{
  name: "Lenovo IdeaPad",
  images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331802/Lenovo-IdeaPad_czc2mb.png"],

  description: "Sleek and lightweight laptop ideal for students and multitasking professionals.",
  default_price_data:{
    currency:"usd",
    unit_amount: 64999
  }
},

{
name: "Apple MacBook Air",
images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331802/MacBook-Air_rkhwee.png"],

description: "Apple’s ultra-portable laptop with M1 chip delivering top-tier speed and battery life.",
default_price_data:{
  currency:"usd",
  unit_amount: 99999
}
},
{
name: "Apple iPad Tablet",
images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331800/Tablet-Apple_a18bvi.png"],

description: "Powerful yet affordable iPad designed for creativity, productivity, and entertainment.",
 default_price_data:{
  currency:"usd",
  unit_amount: 39999
 }
},
{
name: "Samsung Galaxy S25 Ultra",
images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331799/Samsung_S25_Ultra_bozmsx.png"],
description: `Samsung’s flagship smartphone with ultra-high resolution camera and fast performance.`,
default_price_data:{
  currency : "usd",
  unit_amount : 119999
}
},
{
name: "Neeo Smart Remote",
images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331797/Neeo-Remotes_dsvw3c.png"],
description: "Universal remote that integrates with your smart home devices for easy control.",
default_price_data:{
  currency : "usd",
  unit_amount :  14999
}
},
{
name: "Smartwatch Series 9",
images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331797/Smartwatch_p3s7jh.png"],

description: "Modern smartwatch with health tracking, notifications, and customizable watch faces.",
 default_price_data:{
  currency : "usd",
  unit_amount : 39999
 }
},
{
name: "JBL Portable Speaker",
images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331826/JBL_gctrkt.png"],
description: "Portable Bluetooth speaker with bold sound, waterproof design, and long battery life.",
default_price_data:{
  currency:"usd",
  unit_amount :11999
}
},
{
name: "Jambox Speaker",
images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331822/Jambox_vwdovl.png"],
description: "Compact wireless speaker offering powerful sound in a portable size.",
default_price_data:{
  currency:"usd",
  unit_amount: 8999
}
},
{
name: "Sony PlayStation 5",
images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331783/Playstation5_gvwyaj.png"],
description: "Next-gen Sony PlayStation 5 with immersive gaming, ray tracing, and exclusive titles.",
default_price_data:{
  currency:"usd",
  unit_amount : 49999
}
},
{
name: "Xbox Series X",
images: ["https://res.cloudinary.com/dfsrso3jk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1757331782/Xbox_ceptxj.png"],
description: "Microsoft’s most powerful console delivering 4K gaming and lightning-fast load times.",
default_price_data:{
  currency : "usd",
  unit_amount : 49999
}
}      
]
export default products