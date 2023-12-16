import React, { useEffect, useState } from "react"
import SuccessCard from '../../assets/success_card_test.png'

const SuccesStory = () => {

  const [activeImage, setActiveImage] = useState('')

  const [currentKey, setCurrentKey] = useState(0)

  const [nextImg, setNextImg] = useState("")

  const [prevImage, setPrevImage] = useState("")

  const data = [
    SuccessCard, SuccessCard, SuccessCard, SuccessCard, SuccessCard
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

          {/* {
            data.map((data, i) => {
              return (
                <img src={data} alt="" className={data[i] == data ? "flex" : "hidden"} onClick={() => { changeCardState(data, i) }} key={i} />
              )
            })
          } */}

          <img src="" alt="" />

        </div>

      </div>
    </>
  )
}

export default SuccesStory
