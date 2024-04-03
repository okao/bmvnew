"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  A11y,
  Autoplay,
  EffectFade,
  EffectFlip,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-fade"

import { cn } from "@/lib/utils"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import { mvAanamu, mvRasmee } from "@/config/fonts"

const ReelGallery = () => {
  // const [loading, setLoading] = useState(true)

  // const images = [
  //   {
  //     id: 1,
  //     author: "Alejandro Escamilla",
  //     width: 1024,
  //     height: 980,
  //     url: "https://unsplash.com/photos/yC-Yzbqy7PY",
  //     download_url: "https://picsum.photos/seed/picsum/200/300",
  //   },
  //   {
  //     id: 2,
  //     author: "Alejandro Escamilla",
  //     width: 1024,
  //     height: 980,
  //     url: "https://unsplash.com/photos/LNRyGwIJr5c",
  //     download_url: "https://fastly.picsum.photos/id/2/1200/800",
  //   },
  //   {
  //     id: 3,
  //     author: "Paul Jarvis",
  //     width: 1024,
  //     height: 980,
  //     url: "https://unsplash.com/photos/6J--NXulQCs",
  //     download_url: "https://fastly.picsum.photos/id/3/1200/800",
  //   },
  //   {
  //     id: 3,
  //     author: "Tina Rataj",
  //     width: 1024,
  //     height: 980,
  //     url: "https://unsplash.com/photos/pwaaqfoMibI",
  //     download_url: "https://fastly.picsum.photos/id/4/1200/800",
  //   },
  //   {
  //     id: 5,
  //     author: "Lukas Budimaier",
  //     width: 1024,
  //     height: 980,
  //     url: "https://unsplash.com/photos/6cY-FvMlmkQ",
  //     download_url: "https://fastly.picsum.photos/id/5/1200/800",
  //   },
  // ]

  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty("--progress", 1 - progress)
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  // }
  const imgs = []

  // useEffect(() => {
  //   fetch("https://picsum.photos/v2/list")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       imgs = data

  //       console.log(imgs)

  //       setLoading(false)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, [imgs])

  // if (loading) {
  //   return <div className="mx-auto py-8 md:container">Loading...</div>
  // }

  return (
    <div className="px-4 py-8 md:container md:mx-auto">
      <Swiper
        effect="flip"
        spaceBetween={60}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFlip]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="ltr relative w-full bg-gray-900"
      >
        {/* {imgs?.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <a className="rtl block" href="/14774">
                <div style={{ lineHeight: 0 }}>
                  <img className="w-full object-cover" src={image.url} alt="" />
                </div>
                <div>
                  <h2
                    className={cn(
                      "absolute inset-x-0 top-0  bg-black p-4 leading-relaxed text-white opacity-65",
                      mvRasmee.className
                    )}
                  >
                    ރޯދައާއެކު މާލޭގެ ބާޒާރުމަތި
                  </h2>
                </div>
              </a>
            </SwiperSlide>
          )
        })} */}
        <SwiperSlide>
          <div>
            <div style={{ lineHeight: 0 }}>
              <img
                className="w-full object-cover"
                src="https://picsum.photos/id/0/300/300"
                alt=""
              />
            </div>
            <div>
              <h2
                className={cn(
                  "absolute inset-x-0 top-0  bg-black p-4 leading-relaxed text-white opacity-65",
                  mvRasmee.className
                )}
              >
                ރޯދައާއެކު މާލޭގެ ބާޒާރުމަތި
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div style={{ lineHeight: 0 }}>
              <img
                className="w-full object-cover"
                src="https://picsum.photos/id/1/300/300"
                alt=""
              />
            </div>
            <div>
              <h2
                className={cn(
                  "absolute inset-x-0 top-0  bg-black p-4 leading-relaxed text-white opacity-65",
                  mvRasmee.className
                )}
              >
                ރޯދައާއެކު މާލޭގެ ބާޒާރުމަތި
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div style={{ lineHeight: 0 }}>
              <img
                className="w-full object-cover"
                src="https://picsum.photos/id/2/300/300"
                alt=""
              />
            </div>
            <div>
              <h2
                className={cn(
                  "absolute inset-x-0 top-0  bg-black p-4 leading-relaxed text-white opacity-65",
                  mvRasmee.className
                )}
              >
                ރޯދައާއެކު މާލޭގެ ބާޒާރުމަތި
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ReelGallery
