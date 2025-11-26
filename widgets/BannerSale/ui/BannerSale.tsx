'use client'
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import {Carousel} from "@/components/ui";
import {Container} from "@/shared/ui/container";
import {CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Image from "next/image";





const ImagesBanner = [
  '/time.jpg',
  '/sale1.jpg',
  '/sale2.jpg',
  '/sale3.jpg',
  '/sale4.jpg',
]


export const BannerSale = () => {

  const autoplay = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    })
  )

  return (
    <Container className='mx-auto py-5'>
      <Carousel
        plugins={[autoplay.current]}
        className="w-full max-w-[1280px] mx-auto overflow-visible rounded-xl"
      >
        <CarouselContent className="flex gap-5 px-[calc((1280px-200px)/2)]">
          {ImagesBanner.map((src, i) => (
            <CarouselItem key={i} className="flex-shrink-0 w-[200px]">
              <Image
                src={src}
                alt=""
                width={200}
                height={300}
                className="w-[200px] h-[300px] object-cover rounded-xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Container>
  )
}