import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home/Home";
import TabloControl from "./Pages/TabloControl";
import Carousel from "./Pages/Carousel/index";
import Tolidat from "./Pages/Tolidat/index";
import Khadamat from "./Pages/Khadamat";
import ThreedSlider from "./Pages/ThreedSlider";
import SliderCode from "./Pages/SliderCode";

import Footer from "./Pages/Footer";
import SafheAsli from "./Pages/SafheAsli/index";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/tablocontrol",
    element: <TabloControl />,
  },

  {
    path: "/carousel",
    element: <Carousel />,
  },
  {
    path: "/tolidat",
    element: <Tolidat />,
  },
  {
    path: "/khadamat",
    element: <Khadamat />,
  },
  {
    path: "/threedslider",
    element: <ThreedSlider />,
  },
  {
    path: "/slidercode",
    element: <SliderCode />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },

  {
    path: "/safheasli",
    element: <SafheAsli />,
  },
];

export default routes;
