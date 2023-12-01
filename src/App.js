import NavBar from "./Components/NavBar.js";
import { Outlet, useRoutes } from "react-router-dom";
import routes from "./router.js";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import React from "react";

const locales = {
  en: { title: "English" },
  fa: { title: "Farsi" },
};

function App() {
  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState(0);

  const router = useRoutes(routes);
  return (
    <>
      <NavBar />
      <span id="#top"></span>

      {router}
    </>
  );
}

export default App;
