import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

import { RevealOnScroll } from "../RevealOnScroll";

export const ArtCarouselSection = () => {
  const images = [
    {
      src: "artpics/art_1.png",
      caption: "cold waters (digital art)",
    },
    {
      src: "artpics/art_2.jpg",
      caption: "apple in hand (my first foray into watercolor)",
    },
    {
      src: "artpics/art_3.png",
      caption: "frog skating (digital art)",
    },
    {
      src: "artpics/art_4.png",
      caption: "standing against sunset (digital art)",
    },
    {
      src: "artpics/art_5.png",
      caption: "superman 2025 (digital art)",
    },
    {
      src: "artpics/art_6.jpg",
      caption: "father and son (pencil sketch)",
    },
    {
      src: "artpics/art_7.jpg",
      caption: "here there be dragons (my second foray into watercolor)",
    },
    {
      src: "artpics/art_8.jpg",
      caption: "after dark (zine)",
    },
    {
      src: "artpics/art_9.png",
      caption: "boy and seal (digital art)",
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
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            My Doodles (Click In!)
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, Grid]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
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
                    className="max-h-[60vh] max-w-[80vh] w-auto sm:h-auto sm:aspect-square sm:object-cover object-contain"
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
            onClick={(e) => {
              e.stopPropagation();
              setSelected(null);
            }}
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
