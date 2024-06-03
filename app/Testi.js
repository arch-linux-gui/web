"use client";
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { color } from "framer-motion";

const videos = [
  "https://www.youtube-nocookie.com/embed/oPzSUczBT3I?si=VCmgDKNLLS9Br5r3",
  "https://www.youtube-nocookie.com/embed/cxj1SPJihpA?si=VquT1aSsUjDTyd66",
  "https://www.youtube-nocookie.com/embed/zQLknMv4sOs?si=TkFyqDex0nfHxOhH",
  "https://www.youtube-nocookie.com/embed/sBgbEVbAT2g?si=2ZayTt99MgeAWJFA",
  "https://www.youtube-nocookie.com/embed/e0U7VY5CkwQ?si=ChIHwo98dhcoOCk2",
];

export default function Testi() {
  const [perPage, setPerPage] = useState(2);

  useEffect(() => {
    const isMobileDevice = window.innerWidth <= 768;

    setPerPage(isMobileDevice ? 1 : 2);
    
    const handleResize = () => {
      setPerPage(window.innerWidth <= 768 ? 1 : 2);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="px-6 py-6 text-black bg-white md:py-10 sm:px-12 md:px-20 lg:px-28">
      <div className="flex flex-col items-center justify-center">
        <p className="mb-4 text-3xl font-bold md:text-5xl">Testimonials</p>
        <div className="bg-[#f6f5f5] px-4 py-8 md:p-12 rounded-2xl w-full">
          <Splide
            options={{
              type: 'loop',
              moveBy: 1,
              autoplay: true,
              interval: 3000,
              arrows: true,
              drag: false,
              pagination: true,
              gap: '1em',
              perPage: perPage,
            }}
          >
            {videos.map((video, index) => (
              <SplideSlide key={index}>
                <div
                  className="mb-7 flex items-center justify-center"
                >
                  <iframe
                    src={video}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-[300px] md:h-[500px] rounded-2xl"
                  ></iframe>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
}
