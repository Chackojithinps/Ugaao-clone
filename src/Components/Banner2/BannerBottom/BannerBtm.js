import React from 'react'
import './Bannerbottom.css'
const BannerBtm = () => {
    const items=[{
        id:1,
        img:"https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Best_Sellers_2.png?v=1661763237",
        text:"Bestsellers"
    },
    {
        id:2,
        img:"https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Easy_To_Care_2_00213678-218b-41b6-b7a7-dc8a3e2a5da2.png?v=1661763579",
        text:"Easy to Care"
    },{
        id:3,
        img:"https://cdn.shopify.com/s/files/1/0579/7924/0580/files/XL_Plants_2.png?v=1661763445",
        text:"Large plants"
    },{
        id:4,
        img:"https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Ceramic_Pots_2_dc27090b-0488-4167-a53b-02c523ac0e1b.png?v=1661763610",
        text:"Ceramic Pots"
    },{
        id:5,
        img:"https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Vegetable_Seeds_2.png?v=1661763516",
        text:"Vegetable seeds"
    },
    {
        id:6,
        img:"https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Vegetable_Seeds_2.png?v=1661763516",
        text:"Fertilizers"
    }
]
  return (
    <div className='BannerBtm'>
      
          {
            items.map((item)=>(
               <div className='rounded-image'>
                  <img className="img1" src={item.img} alt="jithin"></img>
                  <div >{item.text}</div>
               </div>
            ))
          }
       </div>
    
  )
}

export default BannerBtm
