import Menu from "../../Pages/Menu/Menu";
import "../ContactUs/contact.css";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { BiSolidLeftArrow } from "react-icons/bi";
import { AiTwotonePhone } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { MdPlayArrow } from "react-icons/md";
import Footer from "../Footer/index";

const ContactUs = () => {
  const { i18n, t } = useTranslation();
  return (
    <div
      className="menu fadeShow flex w-full flex-col items-center justify-start gap-4"
      dir={i18n.dir()}
    >
      <Menu />
      <div className="tamas">
        <div className="aks">
          {i18n.language === "es" ? (
            <img className="imglogo" src="img/logo-rangi-copy.jpg" alt="" />
          ) : (
            <img className="imglogo" src="img/logo-rangi.jpg" alt="" />
          )}
          <div className="phone">
            <FiPhoneCall size={20} />
            <p className="phone">{t("Tell")}</p>
          </div>
          <div className="icon-ertebate">
            <div className="whatsapp">
              <BsWhatsapp size={20} />
            </div>
            <div className="icon-telegram">
              <div className="telegram">
                <BsTelegram size={22} />
              </div>
            </div>
            <div className="icon-facebook">
              <div className="facebook">
                <BiLogoFacebookCircle size={22} />
              </div>
            </div>
          </div>
        </div>
        <div className="ertebat">
          <p>{t("TamasBaMa")}</p>
          <p>{t("DaftarMarkazi")}</p>

          <p>{t("Address")}</p>

          <p>{t("NeshaniKarkhone")}</p>
          <p>{t("Karkhane")}</p>
          <p>{t("TamasBaMa")}</p>
          <p>{t("Tell")}</p>
        </div>
        <div className="map-section">
          <div className="gmap-frame">
            <iframe
              id="gmap_canvas"
              width="100%"
              height="400"
              title="توسعه پیام آسیا"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=35.76724502901802,%2051.46171177791058+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Population Estimator map
              </a>
            </iframe>
          </div>
        </div>

        <div className="mapp-section">
          <div className="gmapp-frame">
            <iframe
              id="gmapp_canvas"
              title="location karkhone"
              width="100%"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=35.758335,50.8398113+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Population Estimator map
              </a>
            </iframe>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
