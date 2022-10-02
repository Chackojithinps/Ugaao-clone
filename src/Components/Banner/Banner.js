import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'

const Banner = () => {
  return (
    <div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/live-now-hari-bhari-diwali-sale-2022-01new.jpg?v=1664379172&width=2200"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Home_Page_Banner_Generic_20.08_Comp.png?v=1661755438"
                alt="Second slide"
                />

                <Carousel.Caption className='bannerCaptions'>
                    <h1 className='bannertitle'>Bring your next plant</h1>
                    <h1 className='bannertitle'>home</h1>
                    <div className='bannerbtn'>
                        <button className='btn1'>SHOP PLANTS → </button>
                    </div>
               
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner
