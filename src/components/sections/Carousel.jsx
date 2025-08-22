import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

import { RevealOnScroll } from "../RevealOnScroll";

export const CarouselSection = () => {
  const images = [
    {
      src: "normalpics/normal_1.jpeg",
      caption:
        "white wake / cold surf / pale sun / our commune of liberty and light",
    },
    {
      src: "normalpics/normal_3.jpeg",
      caption:
        "spokes of light at the terminal / the great churn must continue, i know / there i was: the ouroboric epicenter / and all i could think of was home",
    },
    {
      src: "normalpics/normal_6.jpeg",
      caption:
        "i saw a stranger take a picture here and copied her without speaking",
    },
    {
      src: "normalpics/normal_8.jpeg",
      caption:
        "i sketched him outside of the trader joe's near tompkins square (is there anything as undoing as a brother?)",
    },
    {
      src: "normalpics/normal_9.jpeg",
      caption: "summer '26, i have high hopes for you",
    },
    {
      src: "normalpics/normal_10.jpeg",
      caption:
        "even here, the light passes through (i wrote a letter to an incarcerated artist in this room)",
    },
    {
      src: "normalpics/normal_11.jpeg",
      caption:
        "know what you are / know what you will be / ashes upon ashes / bones upon bones",
    },
    {
      src: "normalpics/normal_12.jpeg",
      caption:
        "sketch of my friend (not very good but i will practice that which is difficult, yes i will)",
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section
      id="gallery"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            The Great City Daze of Summer 2025
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            I spent a quiet four months in New York City. Seeing as we are all
            mere accumulations of moments, here are some of mine for sharing.
            Click in for the good ol' editorial.
          </p>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, Grid]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            grid={{ rows: 1 }}
            breakpoints={{
              0: { slidesPerView: 1, grid: { rows: 1 } },
              768: { slidesPerView: 3, grid: { rows: 1 } },
            }}
            className=""
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <div
                  className="w-full h-full flex items-center justify-center cursor-pointer overflow-hidden"
                  onClick={() => setSelected(img)}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="max-h-[70vh] w-auto sm:w-full sm:h-auto sm:aspect-square sm:object-cover object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </RevealOnScroll>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-black/90 p-6 max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.caption}
              className="max-w-full max-h-[80vh] object-contain mb-4 mx-auto"
            />
            <p className="text-gray-300 text-center">{selected.caption}</p>
          </div>
        </div>
      )}

      <style jsx global>{`
        /* Pagination dots */
        .swiper-pagination-bullet {
          background: #888 !important;
          opacity: 0.7 !important;
        }
        .swiper-pagination-bullet-active {
          background: white !important;
          opacity: 1 !important;
        }

        /* Navigation buttons: simple transparent gray */
        .swiper-button-prev,
        .swiper-button-next {
          color: white !important;
          background: rgba(128, 128, 128, 0.3); /* semi-transparent gray */
          width: 40px;
          height: 40px;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 18px !important;
        }
      `}</style>
    </section>
  );
};
