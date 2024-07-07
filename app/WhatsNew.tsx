"use client";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useScroll } from "./scrollContext";

export default function WhatsNew() {
  const { whatsNewRef } = useScroll();

  return (
    <section
      ref={whatsNewRef}
      className="px-6 py-6 text-black bg-white md:py-10 sm:px-12 md:px-20 lg:px-28"
    >
      <div className="flex flex-col items-center justify-center">
        <p className="mb-4 text-3xl font-bold md:text-5xl">What&#39;s New?</p>
        <p className="max-w-xl mb-10 text-center md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          fermentum orci eu tellus maximus, ac aliquet turpis mollis.
        </p>
        <div className="hidden gap-4 md:flex">
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border-opacity-10 border-b-2 border-r-2 border-l-2 border-[#9ca3af]">
            <Image
              src="/welcome.png"
              width={400}
              height={400}
              className="rounded-xl"
              alt="Nothing"
            />
            <p className="text-xl font-bold max-w-[400px] text-center p-4">
              Welcome App for Users to navigate through Arka Linux.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border-opacity-10 border-b-2 border-r-2 border-l-2 border-[#9ca3af]">
            <Image
              src="/xfce.png"
              width={400}
              height={400}
              className="rounded-xl"
              alt="Nothing"
            />
            <p className="text-xl font-bold max-w-[400px] text-center p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border-opacity-10 border-b-2 border-r-2 border-l-2 border-[#9ca3af]">
            <Image
              src="/xfce.png"
              width={400}
              height={400}
              className="rounded-xl"
              alt="Nothing"
            />
            <p className="text-xl font-bold max-w-[400px] text-center p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="md:hidden max-w-[300px] sm:max-w-[500px]">
          <Splide
            options={{
              interval: 3000,
              rewind: true,
              autoplay: true,
              arrows: true,
              pagination: false,
              perPage: 1,
              drag: false,
            }}
          >
            <SplideSlide>
              <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border-opacity-10 border-b-2 border-r-2 border-l-2 border-[#9ca3af]">
                <Image
                  src="/welcome.png"
                  width={500}
                  height={500}
                  className="rounded-xl"
                  alt="Nothing"
                />
                <p className="text-xl font-bold max-w-[400px] text-center p-4">
                  Welcome App for Users to navigate through Arka Linux.
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border-opacity-10 border-b-2 border-r-2 border-l-2 border-[#9ca3af]">
                <Image
                  src="/xfce.png"
                  width={500}
                  height={500}
                  className="rounded-xl"
                  alt="Nothing"
                />
                <p className="text-xl font-bold max-w-[400px] text-center p-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border-opacity-10 border-b-2 border-r-2 border-l-2 border-[#9ca3af]">
                <Image
                  src="/xfce.png"
                  width={500}
                  height={500}
                  className="rounded-xl"
                  alt="Nothing"
                />
                <p className="text-xl font-bold max-w-[400px] text-center p-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <Link
          href="/downloads"
          className="px-4 py-2 text-xl md:px-8 md:py-3 bg-[#161a1e] rounded-full text-white mt-10 md:text-2xl"
        >
          Downloads
        </Link>
      </div>
    </section>
  );
}
