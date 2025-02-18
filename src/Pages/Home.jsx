import React, { useState } from 'react'
import "./Home.css"

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from 'axios';

function Home() {

  const [productData,setProductData]=useState("")

  axios.get(`${import.meta.env.VITE_BASEURL}products/getproduct`)
  .then((res)=>{
    console.log(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })

  return (
    <>
      {/* slider here  */}

      <div className="slider-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="https://www.menmoms.in/cdn/shop/files/Diapers_Hygiene_-_2_Mobile_20Dec.jpg?v=1734674808&width=600"
            />
            <img
              src="https://www.menmoms.in/cdn/shop/files/Diapers_Hygiene_-_2_Desktop_20Dec.jpg?v=1734674808&width=1400"
              alt="Slide 1"
            />
          </picture>
        </SwiperSlide>

        <SwiperSlide>
          <picture>
            {/* <source
              media="(max-width: 768px)"
              srcSet="https://bornbabies.com/cdn/shop/files/baby_bedding-2_mobile.jpg?v=1728124754&width=600"
            /> */}
            <img
              src="https://bornbabies.com/cdn/shop/files/baby_bedding-2.jpg?v=1728124754&width=3000"
              alt="Slide 2"
            />
          </picture>
        </SwiperSlide>

        <SwiperSlide>
          <picture>
            {/* <source
              media="(max-width: 768px)"
              srcSet="https://bornbabies.com/cdn/shop/files/christmas-banner-2_mobile.jpg?v=1734422162&width=600"
            /> */}
            <img
              src="https://bornbabies.com/cdn/shop/files/christmas-banner-2.jpg?v=1734422162&width=3000"
              alt="Slide 3"
            />
          </picture>
        </SwiperSlide>

        <SwiperSlide>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="https://www.menmoms.in/cdn/shop/files/EOSS_1st_Mobile_20Dec.webp?v=1738930381&width=600"
            />
            <img
              src="https://www.menmoms.in/cdn/shop/files/EOSS_1st_Desktop_20Dec.webp?v=1738930381&width=1500"
              alt="Slide 4"
            />
          </picture>
        </SwiperSlide>

        <SwiperSlide>
          <picture>
            {/* <source
              media="(max-width: 768px)"
              srcSet="https://www.menmoms.in/cdn/shop/files/Baby_Pram_3_Mobile_20Dec.jpg?v=1734674806&width=600"
            /> */}
            <img
              src="https://www.menmoms.in/cdn/shop/files/Baby_Pram_3_Desktop_20Dec.jpg?v=1734674806&width=1400"
              alt="Slide 5"
            />
          </picture>
        </SwiperSlide>
      </Swiper>
    </div>

        <div className="container-fluid">
        <div className="row p-0 m-0">
          <div className="col-12 position-relative d-none d-sm-block d-md-block d-lg-block  p-0">
            <img src="https://images.ctfassets.net/dvf03q5b4rnw/5NOkluSZN6elcz6zfF4NIk/baf4105871fbed8da2d6f60999c2e434/HP_desk_eng.jpg?w=2000&h=982&q=80" style={{width:"100%"}} alt="" />
            <div className='overlay'  style={{top:"90%"}}>

            <button className="btn btn-dark ps-5 pe-5 pt-2 pb-2">Shop</button>
            </div>
          </div>
          <div className="col-12 position-relative d-block d-sm-none d-md-none d-lg-none  p-0">
            <img src="https://images.ctfassets.net/dvf03q5b4rnw/5wZEhQ95mSV1cYa1O7hMDv/b6bc3c797e4f20b98da5d6f715504c46/HP_mobile_eng_.jpg?w=540&h=675&q=80" style={{width:"100%"}} alt="" />
            <div className='overlay'>
            <button className="btn btn-dark">Shop</button>
            </div>
          </div>
        </div>
      </div>



            {/* <div>
            <a class="a-all-product" href="">
                <div class="product" onmouseover="changeImage('${containerId}-img-${id}', '${hoverImage}')" onmouseout="changeImage('${containerId}-img-${id}', '${image}')">
                    <img id="${containerId}-img-${id}" src="${image}" alt="${title}" />
                    <div class="product1-con">
                        <h3>${title}</h3>
                        <p>Price: £ ${price}</p>
                        <a href="" class="Addtocard ms-4" id="Add_TO_Cart22">Add To Bag</a>
                    </div>
                </div>
            </a>
            </div> */}


      <div className="container-fluid mt-5">
        <div className="row p-0 m-0">
          <div className="col-12 position-relative d-none d-sm-block d-md-block d-lg-block  p-0">
            <img src="https://images.ctfassets.net/dvf03q5b4rnw/Cw9DoMiL61NwOMkoBk4Ra/4361511270751f8a8ec8f097c4befcaf/BABYSHOP_LP_BABY_BIRTH_GUIDE_BANNER_FEB_24.jpg?w=2000&h=666&q=80" style={{width:"100%"}} alt="" />
            <div className='overlay'>
            <h2 style={{fontFamily:"GT Walsheim Pro, Helvetica, Arial, sans-serif",fontWeight:"700"}}>Baby Gift Guide</h2>
            <button className="btn btn-dark">Discover</button>
            </div>
          </div>
          <div className="col-12 position-relative d-block d-sm-none d-md-none d-lg-none  p-0">
            <img src="https://images.ctfassets.net/dvf03q5b4rnw/25u31raM7btkLeZthogT9n/9329033a4d2daeb3ba602e1c32f4589a/BABYSHOP_LP_BABY_BIRTH_GUIDE_BANNER_MOBILE_FEB_24.jpg?w=600&h=600&q=80" style={{width:"100%"}} alt="" />
            <div className='overlay'>
            <h2 style={{fontFamily:"GT Walsheim Pro, Helvetica, Arial, sans-serif",fontWeight:"700"}}>Baby Gift Guide</h2>
            <button className="btn btn-dark">Discover</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
      <div className="row">
        {/* Left Image */}
        <div className="col-md-6 position-relative image-container">
          <img
            src="https://images.ctfassets.net/dvf03q5b4rnw/5Ogvlo2pmhNcALn5CdmgeF/95561f6a4f46e89e24462ec8b96955f2/HP_rain.jpg?w=1120&h=1100&q=80"
            alt="Rainwear for kids"
            className="img-fluid"
          />
          <div className="overlay">
            <h2 style={{fontFamily:"GT Walsheim Pro, Helvetica, Arial, sans-serif",fontWeight:"700"}}>Rainwear for kids</h2>
            <button className="btn btn-dark">Discover</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-md-6 position-relative image-container">
          <img
            src="https://images.ctfassets.net/dvf03q5b4rnw/6i45UrqVYAl2aaXczzMJYU/5a085f14f46bbc468b4b1b9cb74a1517/HP_shell.jpg?w=1120&h=1100&q=80"
            alt="Shellwear for kids"
            className="img-fluid"
          />
          <div className="overlay">
            <h2 style={{fontFamily:"GT Walsheim Pro, Helvetica, Arial, sans-serif",fontWeight:"700"}}>Shellwear for kids</h2>
            <button className="btn btn-dark">Discover</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home