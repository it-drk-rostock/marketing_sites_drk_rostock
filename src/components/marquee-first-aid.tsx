import React from "react";
import { motion } from "motion/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const MarqueeFirstAid = () => {
  const cards = [
    {
      id: 1,
      title: "Rotkreuzkurs EH Fortbildung",
      image:
        "https://www.drk-rostock.de/fileadmin/Erste_Hilfe_Intern/erste-hilfe-fortbildung.jpg",
    },
    {
      id: 2,
      title: "Rotkreuzkurs Erste-Hilfe",
      image:
        "https://www.drk-rostock.de/fileadmin/Erste_Hilfe_Intern/erste-hilfe.jpg",
    },
    {
      id: 3,
      title: "Sanitätsdienstliche - Ausbildung",
      image:
        "https://www.drk-rostock.de/fileadmin/Erste_Hilfe_Intern/sanit%C3%A4tsausbildung.jpg",
    },
    {
      id: 4,
      title: "Rotkreuzkurs EH am Kind",
      image:
        "https://www.drk-rostock.de/fileadmin/Erste_Hilfe_Intern/erste-hilfe-kind.avif",
    },
    {
      id: 5,
      title: "Rotkreuzkurs EH Sport",
      image:
        "https://www.drk-rostock.de/fileadmin/Erste_Hilfe_Intern/erste-hilfe-sport.jpg",
    },
  ];

  return (
    <div className="w-full h-full">
      <Swiper
        direction={"vertical"}
        autoplay={{
          delay: 7000,
        }}
        className="w-full h-full"
        spaceBetween={24}
        modules={[Autoplay]}
        slidesPerView={2}
        slidesPerGroup={2}
        speed={3000}
      >
        {cards.map((card, index) => (
          <SwiperSlide>
            <motion.article
              key={card.id}
              className={`bg-white h-full shrink-0 w-full rounded-md overflow-hidden relative`}
            >
              <div
                className={`bg-gradient-to-t  ${
                  index % 2 === 0
                    ? "from-tertiary-tertiary/60"
                    : "from-primary-primary/60"
                } absolute top-0 left-0 w-full h-full flex flex-col items-start justify-end p-4`}
              >
                <h3 className="text-white font-poppins text-2xl">
                  {card.title}
                </h3>
              </div>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </motion.article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MarqueeFirstAid;
