import { BiSolidUpArrow } from "react-icons/bi";
import "./Menu.css";
import Carousel from "../Carousel/index";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../Khadamat";
import { Link, Outlet } from "react-router-dom";

import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  ListGroup,
} from "react-bootstrap";

import { useState } from "react";

const onChangeLang = (e) => {
  const lang_code = e.target.value;
  i18n.changeLanguage(lang_code);
};

function Menu() {
  const [isShowBox, setIsShowBox] = useState(false);
  const { i18n, t } = useTranslation();

  return (
    <div
      className="background fadeShow flex w-full flex-col items-center justify-start gap-4"
      dir={i18n.dir()}
      style={{ position: "sticky", top: "0", zIndex: "1000" }}
    >
      <Navbar
        expand="lg"
        className=" bg-transparent"
        style={{ direction: "rtl" }}
      >
        <Container
          className=" fadeShow flex w-full flex-col items-center justify-start gap-4"
          dir={i18n.dir()}
        >
          <Navbar.Brand href="#home">{t("TosePayamAsia")}</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className=" d-flex justify-content-end"
          >
            <Nav>
              <Nav.Link href="">
                <Link className="clr" to="/safheasli">
                  {t("Home")}
                </Link>
              </Nav.Link>

              <Nav.Link href="" className="navbaritem">
                <Link className="clr" to="/contact">
                  {t("ContactUs")}
                </Link>
              </Nav.Link>
              <Nav.Link href="" className="navbaritem">
                <Link className="clr" to="/about">
                  {t("AboutUs")}
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;
