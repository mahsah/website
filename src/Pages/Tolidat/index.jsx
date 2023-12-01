import "./tolidat.css";
import Menu from "../Menu/Menu";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiTwotonePhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { MdPlayArrow } from "react-icons/md";
import Footer from "../Footer";

const Tolidat = () => {
  const { i18n, t } = useTranslation();
  console.log(i18n.language);
  return (
    <div
      className="fadeShow flex w-full flex-col items-center justify-start gap-4"
      dir={i18n.dir()}
    >
      <Menu />
      <div className="onvan">
        <p>{t("MoarefiTolidat")}</p>
      </div>
      <div className="Tolidat">
        <div className="anvae-tablo">
          <div className="tablo-tolidat">
            {i18n.language === "es" ? (
              <MdPlayArrow size={18} color="#f26422" />
            ) : (
              <BiSolidLeftArrow size={18} color="#f26422" />
            )}
          </div>
          <div className="controlt">
            <p>{t("AnvaeTabloControl")}</p>
          </div>
        </div>
        <div className="atccm">
          <div className="dormotort">
            <p>{t("TabloControlDoreMotor")}</p>
          </div>
          <div className="dormotort">{t("AnvaeTabloControlZedEnfejar")}</div>
          <div className="dormotort">{t("SystemControlTahrik")}</div>
        </div>
        <div className="anvaetablobargh">
          <div>
            {i18n.language === "es" ? (
              <MdPlayArrow size={18} color="#f26422" />
            ) : (
              <BiSolidLeftArrow size={18} color="#f26422" />
            )}
          </div>
          <div className="tablobargh">
            <p>{t("AnvaeTabloBargh")}</p>
          </div>
        </div>
        <div className="anvae-tablobrg">
          <div className="bargh">
            <p>{t("TabloBarghFesharZaeif")}</p>
          </div>
          <div className="bargh">{t("TabloBarghFesharGhavi")}</div>
          <div className="bargh">{t("TabloBarghFesharMotevaset")}</div>
          <div className="bargh">{t("TabloEslahZaribGhodrat")}</div>
          <div className="bargh">{t("AnvaeTabloBarghZedEnfejar")}</div>
          <div className="bargh">{t("TabloContorBargh")}</div>
        </div>
        <div className="anvaetablobargh">
          <div>
            {i18n.language === "es" ? (
              <MdPlayArrow size={18} color="#f26422" />
            ) : (
              <BiSolidLeftArrow size={18} color="#f26422" />
            )}
          </div>
          <div className="tablobargh">
            <h5>{t("AnvaePanel")} </h5>
          </div>
        </div>
        <div className="anvae-tablobrg">
          <div className="bargh">
            <p> {t("PanelControlMobtani")}</p>
          </div>
          <div className="bargh">{t("PanelJamavariEtelaat")}</div>
          <div className="bargh">{t("PanelControlVaMonitoring")}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tolidat;
