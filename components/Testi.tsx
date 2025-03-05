"use client";
import HandleYT from "@/lib/HandleYT";
import Loader from "@/lib/loader";
import { Suspense, useEffect, useState } from "react";
import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
} from "./ui/carousel";

const videos = [
  "SN-rvjQxpgs",
  "VEWI5EFbhtc",
  "oPzSUczBT3I",
  "cxj1SPJihpA",
  "zQLknMv4sOs",
  "sBgbEVbAT2g",
  "e0U7VY5CkwQ",
];

export default function VideoCarousel() {
  const [perPage, setPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setPerPage(window.innerWidth <= 1024 ? 1 : 2);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const videoGroups: string[][] = videos.reduce(
    (resultArray: string[][], item, index) => {
      const chunkIndex = Math.floor(index / perPage);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    },
    []
  );

  return (
    <section className="px-4 py-6 md:py-10 md:px-8 lg:px-12 bg-orange-50 dark:bg-[#121215]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-6 text-3xl md:text-5xl lg:text-6xl font-bold text-center text-orange-600 dark:text-orange-400">
          Testimonials
        </h2>
        <div className="w-full max-w-7xl">
          <Carousel className="relative" carouselOptions={{ loop: true }}>
            <div className="flex flex-col items-center">
              <CarouselMainContainer className="h-[300px] sm:h-[400px] md:h-[500px]">
                {videoGroups.map((group, groupIndex) => (
                  <SliderMainItem key={groupIndex} className="bg-transparent">
                    <div className="flex gap-4 h-full">
                      {group.map((videoId, index) => (
                        <div key={index} className="flex-1 h-full">
                          <div className="w-full h-full rounded-xl overflow-hidden bg-background">
                            <Suspense fallback={<Loader />}>
                              <HandleYT videoId={videoId} />
                            </Suspense>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SliderMainItem>
                ))}
              </CarouselMainContainer>
              <div className="flex justify-between w-full mt-4">
                <CarouselPrevious className="w-10 h-10 border border-gray-700 dark:border-gray-300 rounded-full flex items-center justify-center" />
                <CarouselNext className="w-10 h-10 border border-gray-700 dark:border-gray-300 rounded-full flex items-center justify-center" />
              </div>
              <div className="mt-2">
                <CarouselThumbsContainer className="gap-x-2">
                  {videoGroups.map((_, index) => (
                    <CarouselIndicator key={index} index={index} />
                  ))}
                </CarouselThumbsContainer>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
