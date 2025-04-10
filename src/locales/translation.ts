import SpaConfig from "../../yukina.config";
import type I18nKeys from "./keys";
import { en } from "./languages/en";
import { zh_CN } from "./languages/zh_cn";

const translations = {
  en: en,
  "zh-CN": zh_CN,
  // es: {} // Añadir traducciones al español aquí si es necesario
};

const getTranslation = (lang: string) => {
  switch (lang) {
    case "en":
      return translations.en;
    case "zh-CN":
      return translations["zh-CN"];
    // case "es":
    //   return translations.es;
    default:
      return translations.en; // Fallback a inglés
  }
};

export function i18n(key: I18nKeys | string): string {
  const lang = SpaConfig.locale;
  const translationSet = getTranslation(lang);

  // Intentar obtener la traducción, si no existe, devolver la clave
  const translation = translationSet[key as keyof typeof translationSet];
  return translation !== undefined ? translation : key;
}
