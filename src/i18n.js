import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "fa",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: "Multi-language app",
        ContactUs: "Contact Us",
        AboutUs: "About Us",
        Home: "Home",
        TosePayamAsia: "Tose Payam Asia",
        MatnTarikhche:
          "The experience and activity of the founders of Payam Asia Development Company by participating in the field of implementation and design projects in the country in the fields of construction, oil and gas and petrochemical industries, water and sewage, and telecommunications, including hundreds of kilometers of transmission lines, and at the same time in the management of supply and ordering. And the purchase and import of goods needed by the oil, gas and petrochemical industries, the group of mechanical goods, precision and electrical tools, and efforts to secure credits from domestic and foreign sources began. With entrepreneurship and the design and construction of a production unit for all kinds of export bitumen in 2016 and its successful operation, the managers' motivation to take another step was strengthened. In 2017, the leading complex of the Asian oil industry, the leader in the supply and distribution of steel sections and metal products was established under the Aeromart brand, and today it is proud to be a platform for the development of more than 150 young workers by applying the experiences of veterans in the steel field. . It happened that the founders of the company have established Payam Asia Development Company and built a factory in the special economic zone of Payam Karaj Airport, which is ready to operate and provide services in the field of information and communication technology, in order to advance the goals and meet the needs.",
        MoarefiTolidat: "Introduction of products",
        AnvaeTabloControl:
          "Types of control panels, control and process, control and protection",
        TabloControlDoreMotor: "Engine speed control board",
        AnvaeTabloControlZedEnfejar: "Types of anti-explosion control panels",
        SystemControlTahrik:
          "Industrial equipment control, excitation, start-up and protection system",
        AnvaeTabloBargh: "Types of electrical boards",
        TabloBarghFesharZaeif: "Low Voltage Boards(up to one kilovolt)",
        TabloBarghFesharGhavi: "High Voltage Board",
        TabloBarghFesharMotevaset: "Medium Voltage Board",
        TabloEslahZaribGhodrat: "Repair factor correction board (capacitor)",
        AnvaeTabloBarghZedEnfejar: "Types of explosion-proof electrical boards",
        TabloContorBargh: "Electricity meter board",
        AnvaePanel: "Types of panels",
        PanelControlMobtani: "PLC based control panel",
        PanelJamavariEtelaat: "Telemetry data collection panel",
        PanelControlVaMonitoring:
          "Industrial process control and monitoring panel",
        CompanyAddress: "Company Address : ",
        DaftarMarkazi: "Central Office",
        Address:
          "Iran, Tehran, Pasdaran St., 9th Bustan St. (Jaafari), after Padayar Fard Intersection, No. 122, 5th Floor, Unit 19",
        NeshaniKarkhone: "Factory Address",
        Karkhane:
          "Iran, Karaj, Mehrshahr, Eram Blvd, near Mahdasht, Payam Special Economic Zone, Phase 4, Block P4-IN, Plot 3",
        DastresiSari: "quick access",
        SafheAsli: "Main Page",
        TamasBaMa: "Contact Us",
        DarbareyeMa: "About Us",
        SabtSefaresh: "Order",
        Tell: "021-22774050",
        ShabakeEjtemaee: "On Social Networks",
        Tolidat: "Products",
        Khadamat: "Services",
        TolidatSherkat: "Productions of Tose Payam Asia Company",
        Matndarbarema:
          "Tose'e Payam Asia Engineering Company, having a specialized and experienced team, is ready to provide technical and commercial consulting services for the construction and developing of high, medium and low voltage switchboards control cabinet for large and small projects in Iran and neighboring countries along with economic estimation in the field of electricity and IT and ICT. This company has engineering capabilities in the field of design and optimization of related plans in the field of power plants and the commissioning and design of electricity supply connected and disconnected (Stand alone) from the national grid through gas power plants and renewable for large and small industries.",

        Moshavere:
          "Consulting: Tose'e Payam Asia Engineering Company, having a specialized and experienced team, is ready to provide technical and commercial consulting services for the construction and developing of high, medium and low voltage switchboards control cabinet for large and small projects in Iran and neighboring countries along with economic estimation in the field of electricity and IT and ICT. This company has engineering capabilities in the field of design and optimization of related plans in the field of power plants and the commissioning and design of electricity supply connected and disconnected (Stand alone) from the national grid through gas power plants and renewable for large and small industries.",

        Peymankari:
          "Contracting: With more than 15 years of experience in the field of oil and gas and industry and power plants installation, it is possible to carry out specialized engineering projects in the field of infrastructure along with the assembly of specialized equipment in the Payam Special Economic Zone factory in this complex. This company has the ability and eligibility to implement renewable power plant projects such as solar, wind and biomass in the country with its experienced and expert technical staff.",

        TaminVaTadarokatTajhizat:
          "Procurement: One of the important and main elements of technical and engineering projects is the supply of required parts and equipment from reliable and quality sources. Due to the location of the Tose'e Payam Asia factory in the Payam special economic free zone, it is possible for this company to procure the required parts and equipment in the reasonable possible time from well-known and approved supplier and provide them to respected clients. ",
        Tolid:
          "Production: The Tose'e Payam Asia factory has well-equipped manufacturing and storage system for, assembly and production of industrial parts. We are also honor that along with industrial machine we have highly educated and experienced team in the production line of electrical equipment to satisfy the clients from private and state sector. The factory located in one of the best and most accessible industrial areas in the country and due to its location we have  a good opportunity to supply of equipment for customers. ",
        jostojo: "search",
        khadamatsherkat:
          "Services of Payam Asia Development Engineering Company",
        heyatmodire: "Board of Directors",
        modiriatmali: "Financial management and human resources",
        modiriatbarnamerizi: "Planning and production management",
        modirbazargani: "Business manager and sales engineer",
        modiriatmohandesi: "Engineering and quality management",
      },
    },
    fa: {
      translation: {
        title: "چند زبانه",
        ContactUs: "تماس با ما",
        AboutUs: "درباره ما",
        Home: "صفحه اصلی",
        TosePayamAsia: "توسعه پیام آسیا",
        MatnTarikhche:
          "تجربه و فعالیت موسسین شرکت توسعه پیام آسیا با حضور در عرصه پروژه های اجرائی و طراحی کشور در زمینه های عمرانی، صنایع نفت و گاز و پتروشیمی، آب و فاضلاب و مخابرات مشتمل بر صد ها کیلومتر خطوط انتقال و همزمان در مدیریت تامین و سفارش گذاری و خرید و واردات کالاهای مورد نیاز صنایع نفت ، گاز و پتروشیمی ، گروه کالاهای مکانیکال ،ابزار دقیق و الکتریکی و تلاش جهت تامین اعتبارات از منابع داخلی و خارجی آغاز گشت. با کارآفرینی و طراحی و ساخت واحد تولید انواع قیرصادراتی در سال 1386 و بهره برداری موفق آن ، انگیزه مدیران جهت برداشتن گامی دیگر تقویت شد . در سال 1397 مجموعه پیشرو صنعت نفت آسیا ، پیشرو در تامین و توزیع مقاطع فولادی و محصولات فلزی تحت برند Iromart ایجاد گردید و امروز افتخار این را دارد ،با به کارگیری تجارب پیشکسوتان عرصه فولاد ، بستری جهت پیشرفت بیش از 150 نیروی جوان باشد. این شد که موسسین شرکت جهت پیشبرد اهداف و تامین نیاز ، اقدام به تاسیس شرکت توسعه پیام آسیا و احداث کارخانه در منطقه ویژه اقتصادی فرودگاه پیام کرج نموده اند که آماده بهره برداری و ارائه خدمات در حوزه فناوری اطلاعات و ارتباطات میباشد.",
        MoarefiTolidat: "معرفی تولیدات",
        AnvaeTabloControl: "انواع تابلو کنترل، کنترل و پروسس، کنترل و حفاظت",
        TabloControlDoreMotor: "تابلو کنترل دور موتور",
        AnvaeTabloControlZedEnfejar: "انواع تابلو کنترل ضد انفجار",
        SystemControlTahrik:
          "سیستم کنترل، تحریک، راه انداز و حفاظت تجهیزات صنعتی",
        AnvaeTabloBargh: "انواع تابلو برق",
        TabloBarghFesharZaeif: " تابلو برق فشار ضعیف (تا یک کیلو ولت) LV",
        TabloBarghFesharGhavi: "تابلو برق فشار قوی",
        TabloBarghFesharMotevaset: "تابلو برق فشار متوسط",
        TabloEslahZaribGhodrat: "تابلو اصلاح ضریب قدرت (خازنی)",
        AnvaeTabloBarghZedEnfejar: "انواع تابلو برق ضد انفجار",
        TabloContorBargh: "تابلو کنتور برق",
        AnvaePanel: "انواع پانل",
        PanelControlMobtani: " پانل کنترل مبتنی بر PLC",
        PanelJamavariEtelaat: "پانل جمع آوری اطلاعات تله متری",
        PanelControlVaMonitoring: "پانل کنترل و مانیتورینگ فرآیند صنعتی",
        CompanyAddress: "آدرس شرکت",
        DaftarMarkazi: "دفتر مرکزی",
        Address:
          "تهران ، خیابان پاسداران ، خیابان بوستان نهم (جعفری) ، بعد از تقاطع پایدار فرد ، پلاک 122 ، طبقه 5 ، واحد 19",
        NeshaniKarkhone: "نشانی کارخانه",
        Karkhane:
          "کرج ، مهرشهر ، بلوار ارم ، نرسیده به ماهدشت ، منطقه ویژه اقتصادی پیام ، فاز 4، بلوک P4-IN ، قطعه 3",
        DastresiSari: "دسترسی سریع",
        SafheAsli: "صفحه اصلی",
        TamasBaMa: "تماس با ما",
        DarbareyeMa: "درباره ما",
        SabtSefaresh: "ثبت سفارش",
        Tell: "021-22774050",
        ShabakeEjtemaee: "در شبکه های اجتماعی",
        Tolidat: "تولیدات",
        Khadamat: "خدمات",
        TolidatSherkat: "تولیدات توسعه پیام آسیا",
        Matndarbarema:
          "شرکت توسعه پیام آسیا با داشتن تیم تخصصی و مجرب آمادگی انجام خدمات مشاوره فنی و بازرگانی جهت ساخت انواع تابلوهای برق فشار قوی، متوسط و ضعیف و کنترل برای پروژه های کلان و خرد در ایران و کشورهای همسایه به همراه برآورد اقتصادی حوزه برق و IT و ICT را دارد. این شرکت با قابلیت مهندسی در حوزه طراحی و بهینه سازی طرح مرتبط در حوزه نیروگاهی و راه اندازی و طراحی تامین برق متصل و منفصل از شبکه از طریق نیروگاههای گازی، و تجدید پذیر برای صنایع بزرگ و کوچک را دارا می باشد.",
        Moshavere:
          "مشاوره: شرکت توسعه پیام آسیا با داشتن تیم تخصصی و مجرب آمادگی انجام خدمات مشاوره فنی و بازرگانی جهت ساخت انواع تابلوهای برق فشار قوی، متوسط و ضعیف و کنترل برای پروژه های کلان و خرد در ایران و کشورهای همسایه  به همراه برآورد اقتصادی  حوزه برق و IT و ICT را دارد. این شرکت با قابلیت مهندسی در حوزه طراحی و بهینه سازی طرح مرتبط در حوزه نیروگاهی و راه اندازی  و طراحی  تامین برق  متصل و منفصل از شبکه از طریق نیروگاههای  گازی، و تجدید پذیر برای صنایع بزرگ و کوچک را دارا می باشد. ",
        Peymankari:
          "پیمانکاری: با تجربه بالای 15 سال فعالیت در حوزه نفت ، گاز ، صنعت و نیروگاهی ، امکان اجرای تخصصی پروژه های مهندسی  حوزه زیر ساخت به همراه مونتاژ تجهیزات تخصصی در کارخانه منطقه اقتصادی ویژه پیام، در این مجموعه فراهم می باشد. این شرکت با داشتن نیروی مجرب و متخصص فنی و قابلیت اجرای پروژه های نیروگاهی تجدید پذیر از قبیل خورشیدی، بادی و زیست توده در کشور را دارا می باشد.",
        TaminVaTadarokatTajhizat:
          "تامین و تدارکات تجهیزات: یکی از ارکان مهم و اصلی  پروژه های فنی و مهندسی تامین قطعات و تجهیزات مورد نیاز از منابع مطمئن و با کیفیت می باشد. به دلیل قرار گرفتن کارخانه توسعه پیام آسیا در منطقه ویژه اقتصادی پیام ، این امکان برای این مجموعه فراهم شده است تا قطعات و تجهیزات مورد نیاز را در کمترین زمان ممکن و از مبادی شناخته شده و مورد تایید سازمان های ذیربط تهیه و در اختیار کارفرمایان محترم قرار داده  می شود.",
        Tolid:
          "تولید: فضای کارخانه مجهز به تجهیزات تولیدی و مونتاژ و  سیستم انبار داری مجهز جهت ساخت ، مونتاژ و تولید قطعات صنعتی در کنار پرسنل مجرب تولید تجهیزات برقی در یکی از بهترین و در دسترس ترین منطقه کارگاهی کشور قرار گرفته است. این مرکز با توجه به قرار گرفتن در منطقه ویژه اقتصادی فرصت مناسبی برای تامین سریع تجهیزات و ادوات مرتبط با راه اندازی و سیستم های کنترلی و حفاظتی برق برای مشتریان فراهم ساخته است.",
        jostojo: "جست و جو کنید",
        khadamatsherkat: "خدمات شرکت مهندسی توسعه پیام آسیا",
        heyatmodire: "هیئت مدیره",
        modiriatmali: "مدیریت مالی و منابع انسانی",
        modiriatbarnamerizi: "مدیریت برنامه ریزی و تولید",
        modirbazargani: "مدیر بازرگانی و مهندس فروش",
        modiriatmohandesi: "مدیریت مهندسی و کیفیت",
      },
    },
  },
});

export default i18n;
