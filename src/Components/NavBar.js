import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import Searchbar from "./Searchbar";
import "./navbar.css";
import i18n from "../i18n";

import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../Pages/Khadamat";

const onChangeLang = (e) => {
  const lang_code = e.target.value;
  i18n.changeLanguage(lang_code);
};

function BasicExample() {
  const { i18n, t } = useTranslation();
  const [isShowSearchBox, setIsShowSearchBox] = useState(false);

  const showSearchBoxHandler = () => {
    if (isShowSearchBox) {
      setIsShowSearchBox(false);
    } else {
      setIsShowSearchBox(true);
    }
  };

  const changingStatusHandler = (status) => {
    setIsShowSearchBox(status);
  };

  return (
    <>
      <div className="bgc">
        <Navbar style={{ direction: "ltr" }}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="d-flex justify-content-end"
            >
              <Nav>
                <Nav.Link onClick={showSearchBoxHandler}>
                  <FiSearch color="#f26422" />
                </Nav.Link>
                <Nav.Link href="#link">
                  <select defaultValue={i18n.language} onChange={onChangeLang}>
                    {LANGUAGES.map(({ code, label }) => (
                      <option key={code} value={code}>
                        {label}
                      </option>
                    ))}
                  </select>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {isShowSearchBox && (
        <Searchbar
          showStatus={isShowSearchBox}
          onChangeStatus={(status) => changingStatusHandler(status)}
        />
      )}
    </>
  );
}

export default BasicExample;
