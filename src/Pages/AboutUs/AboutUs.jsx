import Menu from "../../Pages/Menu/Menu";
import "../AboutUs/AboutUs.css";
import { BsTelegram } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { BiSolidLeftArrow } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { AiTwotonePhone } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import "../../i18n";
import Footer from "../Footer/index";

const AboutUs = () => {
  const { i18n, t } = useTranslation();
  return (
    <div
      className="fadeShow flex w-full flex-col items-center justify-start gap-4  AboutUs"
      dir={i18n.dir()}
    >
      <div>
        <Menu />
      </div>

      <div className="aboutus">
        <div className="about">
          <h2>{t("DarbareyeMa")}</h2>
        </div>
      </div>

      <div className="moshavere">
        <div className="mtn-moshavere">
          <p>{t("Matndarbarema")}</p>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
