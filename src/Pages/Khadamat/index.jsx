import { useState } from "react";
import "./khadamat.css";
import "../../i18n";
import { useTranslation } from "react-i18next";
import Menu from "../Menu/Menu";
import Footer from "../Footer";

export const LANGUAGES = [
  { label: "English", code: "es" },
  { label: "Persian", code: "fa" },
];

const Khadamat = () => {
  const { i18n, t } = useTranslation();
  const [step, setStep] = useState("modir");
  return (
    <div
      className="chart flex w-full flex-col items-center justify-start gap-4"
      dir={i18n.dir()}
    >
      <div className="Menu">
        <Menu />
      </div>
      <div className="khdmt">
        <h2>{t("Khadamat")}</h2>
      </div>

      {step === "modir" ? (
        <div className="heyat-modir">
          {i18n.language === "es" ? (
            <img className="imagemo" src="img/Untitled.png" alt="" />
          ) : (
            <img src="img/heyat-modire.jpg" alt="" />
          )}
        </div>
      ) : step === "mali" ? (
        <div className="modiriat-mali">
          {i18n.language === "es" ? (
            <img className="imagemy" src="img/yuj.jpg" alt="" />
          ) : (
            <img src="img/modiriat-mali-va-manabe-ensani.jpg" alt="" />
          )}
        </div>
      ) : step === "modirebarnamerizi" ? (
        <div className="modir-barnamerizi">
          {i18n.language === "es" ? (
            <img className="imagemy" src="img/modirbarnamerizi.jpg" alt="" />
          ) : (
            <img src="img/midir barname rizi.jpg" alt="" />
          )}
        </div>
      ) : step === "modirbazargani" ? (
        <div className="modiriat-mali">
          {i18n.language === "es" ? (
            <img className="imagemy" src="img/modiriatbazarganien.jpg" alt="" />
          ) : (
            <img src="img/modir-bazargani-va-mohandesi-forosh.jpg" alt="" />
          )}
        </div>
      ) : (
        step === "modiriatmohandesi" && (
          <div className="modir-barnamerizi">
            {i18n.language === "es" ? (
              <img className="imagemy" src="img/modiriatmohandesi.jpg" alt="" />
            ) : (
              <img src="img/modiriat-mohandesi-va-keyfiat.jpg" alt="" />
            )}
          </div>
        )
      )}
      <div className="buttons">
        <button
          className="button"
          onClick={() => {
            setStep("modir");
          }}
        >
          {t("heyatmodire")}
        </button>
        <button
          className="button"
          onClick={() => {
            setStep("mali");
          }}
        >
          {t("modiriatmali")}
        </button>
        <button
          className="button"
          onClick={() => {
            setStep("modirebarnamerizi");
          }}
        >
          {t("modiriatbarnamerizi")}
        </button>
        <button
          className="button"
          onClick={() => {
            setStep("modirbazargani");
          }}
        >
          {t("modirbazargani")}
        </button>
        <button
          className="button"
          onClick={() => {
            setStep("modiriatmohandesi");
          }}
        >
          {t("modiriatmohandesi")}
        </button>
      </div>
      <div className="mtn-kh">
        <div className="khedmat">
          <h4>{t("khadamatsherkat")}</h4>
        </div>
        <div className="matn-sherkat">
          <p>{t("Moshavere")}</p>

          <p>
            <p>{t("Peymankari")}</p>
          </p>

          <p>{t("TaminVaTadarokatTajhizat")}</p>

          <p>{t("Tolid")}</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Khadamat;
