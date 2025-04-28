import { motion } from "motion/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import QrCode from "./qr-code.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect } from "react";

type TMarquee = {
  cards: {
    id: string;
    title: string;
    image: string;
  }[];
};

async function getCards() {
  const res = await axios
    .get(
      "https://drk-rostock.dvinci-hr.com/jobPublication/list.json?fields=big"
    )
    .then((res) => res.data);
  return res;
}

const MarqueeJobs = () => {
  const {
    isPending,
    data: cards,
    refetch,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: getCards,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 3600000); // 1 hour (3600000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  if (isPending) {
    return (
      <div className="w-full h-[60%]">
        <Skeleton className="h-full w-full" />
      </div>
    );
  }

  return (
    <div className="w-full h-[60%]">
      <Swiper
        autoplay={{
          delay: 7000,
        }}
        className="w-full h-full"
        spaceBetween={40}
        modules={[Autoplay]}
        slidesPerView={3}
        slidesPerGroup={3}
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
                <h3
                  style={{
                    /* overflowWrap: "break-word" */
                    wordWrap: "break-word",
                    /* wordBreak: "break-all" */
                  }}
                  className="text-white font-poppins text-2xl"
                >
                  {card.pageTitle}
                </h3>
                <div className="flex flex-col mt-2">
                  <p className="text-white font-poppins text-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 384 512"
                      className={`fill-current inline-block mr-2 ${
                        index % 2 === 0 ? "text-red-600" : "text-blue-600"
                      }`}
                    >
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>{" "}
                    {card.jobOpening.location}{" "}
                  </p>
                  <p className="text-white font-poppins text-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                      className={`fill-current inline-block mr-2 ${
                        index % 2 === 0 ? "text-red-600" : "text-blue-600"
                      }`}
                    >
                      <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                    </svg>{" "}
                    {card.jobOpening.categories[0].name}
                  </p>
                </div>
                <div className="absolute top-4 right-4">
                  <QrCode value={card.jobPublicationURL} />
                </div>
              </div>
              <img
                src={card.images[0].url}
                alt="Erste Hilfe Ausbildung"
                className="w-full h-full  object-cover"
              />
            </motion.article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MarqueeJobs;
