import "./footer.css";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiTwotonePhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { MdPlayArrow } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const { i18n, t } = useTranslation();
  return (
    <div
      className="akharin fadeShow flex w-full flex-col items-center justify-start gap-4"
      dir={i18n.dir()}
    >
      <div className="address-sherkat">
        <p>{t("CompanyAddress")}</p>
        <div className="daftar">
          <HiLocationMarker size={18} color=" #f26422" />
          <p>
            <p>{t("DaftarMarkazi")}</p>
          </p>
        </div>
        <div className="smt">
          <p>{t("Address")}</p>
        </div>
        <div className="neshani-karkhone">
          <HiLocationMarker size={18} color=" #f26422" />

          {t("NeshaniKarkhone")}
        </div>
        <div className="karkhone">
          <p>{t("Karkhane")}</p>
        </div>
      </div>

      <div className="dast-resi">
        <div>{t("DastresiSari")}</div>
        <div className="link">
          <div className="link">
            <div className="center">
              <ul>
                <li>
                  {i18n.language === "es" ? (
                    <MdPlayArrow size={18} color="#f26422" />
                  ) : (
                    <BiSolidLeftArrow size={18} color="#f26422" />
                  )}
                  <a className="tm" href="/contact">
                    {t("TamasBaMa")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="link">
            <div className="center">
              <ul>
                <li className="dar">
                  {i18n.language === "es" ? (
                    <MdPlayArrow size={18} color="#f26422" />
                  ) : (
                    <BiSolidLeftArrow size={18} color="#f26422" />
                  )}
                  <a className="tm" href="/about">
                    {t("DarbareyeMa")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="link">
            <div className="center">
              <ul>
                <li>
                  {i18n.language === "es" ? (
                    <MdPlayArrow size={18} color="#f26422" />
                  ) : (
                    <BiSolidLeftArrow size={18} color="#f26422" />
                  )}
                  <a className="tm" href="#">
                    {t("SabtSefaresh")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="link">
            <div className="center">
              <ul>
                <li>
                  {i18n.language === "es" ? (
                    <MdPlayArrow size={18} color="#f26422" />
                  ) : (
                    <BiSolidLeftArrow size={18} color="#f26422" />
                  )}
                  <a className="tm" href="/safheasli">
                    {t("SafheAsli")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tms-bama">
        <p>{t("TamasBaMa")}</p>

        <div className="telephone">
          <ul>
            <li>
              {i18n.language === "es" ? (
                <FaPhoneAlt size={20} color=" #f26422" />
              ) : (
                <AiTwotonePhone size={18} color="#f26422" />
              )}
              <a className="tm" href="#">
                {t("Tell")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="shabake-ejtemaee">
        <p>{t("ShabakeEjtemaee")}</p>
        <div className="icon-ertebate">
          <a href="#">
            <div className="whatsapp">
              <BsWhatsapp size={20} color="#fff" />
            </div>
          </a>
          <div className="icon-telegram">
            <a href="">
              <div className="telegram">
                <BsTelegram size={22} color="#fff" />
              </div>
            </a>
          </div>
          <div className="icon-facebook">
            <a href="">
              <div className="facebook">
                <BiLogoFacebookCircle size={22} color="#fff" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
