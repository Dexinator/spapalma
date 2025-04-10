import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const SpaConfig: Configuration = {
  title: "SPA para el Alma",
  subTitle: "Bienestar Integral: Biodecodificación y Cenas Sensoriales",
  brandTitle: "SPA para el Alma",

  description: "Descubre terapias de biodecodificación y experiencias únicas de cenas sensoriales para tu bienestar físico y emocional.",

  site: "https://www.spaparaelalma.com",

  locale: "es",

  navigators: [],

  username: "SPA para el Alma",
  sign: "Reconecta con tu esencia.",
  avatarUrl: "/logo.png",
  socialLinks: [
    // {
    //   icon: "line-md:instagram",
    //   link: "https://instagram.com/spaparaelalma",
    // },
    // {
    //   icon: "line-md:facebook",
    //   link: "https://facebook.com/spaparaelalma",
    // },
  ],
  maxSidebarCategoryChip: 0,
  maxSidebarTagChip: 0,
  maxFooterCategoryChip: 0,
  maxFooterTagChip: 0,

  banners: [],

  slugMode: "RAW",

  license: {
    name: "",
    url: "",
  },

  bannerStyle: "STATIC",
};

export default SpaConfig;
