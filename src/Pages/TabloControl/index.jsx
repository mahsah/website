import Menu from "../Menu/Menu";
import "./tablocontrol.css";
import { BsTelegram } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { BiSolidLeftArrow } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { AiTwotonePhone } from "react-icons/ai";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../Khadamat";

const TabloControl = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="tablo">
      <div className="menutc">
        <Menu />
      </div>
      <div className="dore-m">
        <div className="motor">
          <h2>تابلو کنترل دور موتور</h2>
        </div>
      </div>
      <div className="controls">
        <div className="syse">
          <div className="rlt">
            <img className="imgdos" src="img/IMG_0332.JPG" alt="" />
            <img className="imgdos" src="img/IMG_0188.JPG" alt="" />
          </div>
        </div>
      </div>
      <div className="doremm">
        <div className="motorrr">
          <p>
            تنظیم سرعت اصلی ترین کار درایو AC می باشد. لذا معمولا تابلو برق
            اینورتر در روی درب خود یک پتانسیومتر (ولوم) دارد تا اپراتور توسط آن
            بتواند مقدار سرعت مورد نیاز الکتروموتور را تنظیم کنه. سوئیچ های بای
            پس هم در هنگام وقوع فالت برای اینورتر، موتور را بصورت مستقیم به شبکه
            سه فاز متصل می کنند.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabloControl;
