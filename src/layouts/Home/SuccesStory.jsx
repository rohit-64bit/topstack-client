import React, { useEffect, useState } from "react"
import SuccessCard from '../../assets/success_card_test.png'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SuccesStory = () => {

  const [activeImage, setActiveImage] = useState('')

  const [currentKey, setCurrentKey] = useState(0)

  const [nextImg, setNextImg] = useState("")

  const [prevImage, setPrevImage] = useState("")

  const data = [
    "http://cdn.proxiplays.com/images-1707550455529-871100057.jpeg",
    "http://cdn.proxiplays.com/images-1707550455530-680680995.jpeg",
    "http://cdn.proxiplays.com/images-1707550455541-305480867.jpeg",
    "http://cdn.proxiplays.com/images-1707550455541-397232714.jpeg",
    "http://cdn.proxiplays.com/images-1707550455547-372551019.jpeg"
  ]

  const changeCardState = (card, key, type) => {

    if (type === "next") {

      // handle the next card change update the key to +1

    } else if (type === "prev") {

      //handle the previous card change update the key to -1

    } else {

      // handle the continuing state to suffle the next card once the array limit is reached

    }

  }

  // useEffect(() => {

  //   setInterval(() => {

  //     setActiveImage("")

  //   }, 3000)

  // }, [])

  return (
    <>
      <div className="min-h-screen max-h-max items-center p-5 md:p-16 lg:p-24 xl:p-32 py-20 service-bg bg-no-repeat bg-center flex flex-col gap-24">

        <div className='text-3xl md:text-4xl font-bold text-center'>Success Story</div>

        <div className="flex gap-10 overflow-hidden">

          <Swiper
            spaceBetween={50}
            allowTouchMove={true}
            allowSlideNext={true}
            allowSlidePrev={true}
            slidesPerView={3}
            speed={4000}
            loop={true}
            autoplay={{ delay: 8000 }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {
              data.map((data, i) => {
                return (
                  <SwiperSlide
                    key={i}
                  >
                    <img src={data} alt="" />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>

        </div>

      </div>
    </>
  )
}

export default SuccesStory
