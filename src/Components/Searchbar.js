import React, { useState } from "react";
import "./Searchbar.css";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function Searchbar({ showStatus, onChangeStatus }) {
  const [cancel, setCancel] = useState(showStatus);
  const { i18n, t } = useTranslation();

  return (
    <div>
      <div
        className="inp d-flex align-items-center justify-content-center fadeShow flex w-full flex-col items-center justify-start gap-4"
        dir={i18n.dir()}
      >
        <Button
          onClick={() => {
            setCancel(false);
            onChangeStatus(false);
          }}
          className="btno btn ms-5 border-0 bg-transparent text-dark"
        >
          Cancel
        </Button>
        <div className="d-flex inputContainer">
          <Button className="searchBtn text-white bg-warning border-0 rounded-0">
            Search
          </Button>
          <input
            type="text"
            placeholder={t("jostojo")}
            className="searchInput border-0 bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
