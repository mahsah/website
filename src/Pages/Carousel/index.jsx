import React from "react";
import "./Carousel.css";
import ImageSlider from "../../Components/ImageSlider";
import { Link, Outlet } from "react-router-dom";
import ThreedSlider from "../ThreedSlider";
import SliderCode from "../SliderCode";
import i18n from "../../i18n";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../Khadamat";

const onChangeLang = (e) => {
  const lang_code = e.target.value;
  i18n.changeLanguage(lang_code);
};

const Carousel = () => {
  const { i18n, t } = useTranslation();

  const slides = [
    { url: "img/imagesu.jpg" },
    { url: "img/imgb.jpg" },
    { url: "img/sliderm.jpg" },
    { url: "img/imagea.jpg" },
    { url: "img/bgcd.jpg" },
    { url: "img/akskarkhone.jpg" },
  ];
  const containerStyles = {
    width: "100%",
    height: "390px",
    margin: "0 auto",
  };

  return (
    <div
      className="fadeShow flex w-full flex-col items-center justify-start gap-4"
      dir={i18n.dir()}
    >
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <div className="mtn-moarefi">
        <div className="sofi">
          <p> {t("MatnTarikhche")}</p>
        </div>

        <div className="logo">
          <div className="old">
            {i18n.language === "es" ? (
              <img className="imagef" src="img/logo-rangi-copy.jpg" alt="" />
            ) : (
              <img className="imagef" src="img/logo-rangi.jpg" alt="" />
            )}
          </div>
        </div>
      </div>
      <div className="koliat">
        <div className="tolidat">
          <Link className="link" to="/tolidat">
            <img className="imgtolid" src="img/aksetolid.jpg" alt="" />
            <h2 className="tolis">{t("Tolidat")}</h2>
          </Link>
        </div>
        <div className="khadamat">
          <Link className="link" to="/khadamat">
            <img className="imgtolid" src="img/images.jpg" alt="" />
            <h2 className="tolis">{t("Khadamat")}</h2>
          </Link>
        </div>
      </div>
      <div>
        <ThreedSlider />
      </div>
      <div>
        <SliderCode />
      </div>
    </div>
  );
};

export default Carousel;
