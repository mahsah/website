import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { initReactI18next } from "react-i18next";
import Footer from "../Footer/index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function ThreedSlider() {
  const { i18n, t } = useTranslation();
  return (
    <div>
      <div className="swiperslider">
        <div className="tolidatgroup">
          <h2>{t("TolidatSherkat")}</h2>
        </div>

        <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="img/hv.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="img/mv.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="img/lv1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="img/IMG_9949.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="img/IMG_9952.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="img/contrl.jpg" />
            </SwiperSlide>
          </Swiper>
        </>
        <div className="sefaresh-sabt">
          <div className="sabt-sefaresh">
            <div className="icon-sabt">
              <AiOutlineShoppingCart size={26} />
            </div>
            <div className="paragraf-sabt">
              <p>{t("SabtSefaresh")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
