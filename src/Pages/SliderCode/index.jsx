import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";
import { AiTwotonePhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import "../../i18n";
import Footer from "../Footer/index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function SliderCode() {
  const { i18n, t } = useTranslation();
  return (
    <div className="dre">
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiperslider "
        >
          <SwiperSlide>
            <img src="img/ABB-1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/ISO-9001-1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/ISO-14001-1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/Partner-02-1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/Partner-03-1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/Siemens-1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/Wohner-1.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </>
      <div>
        <Footer />
      </div>
    </div>
  );
}
