import { de, enUS, fr } from 'date-fns/locale';

const LOCALES = {
  en: enUS,
  de: de,
  fr: fr,
};

function getLocale(lang: string) {
  return LOCALES[lang] ?? enUS;
}

export { getLocale };
