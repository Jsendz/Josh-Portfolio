// src/lib/i18n.ts
import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'es', 'fr'] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = 'en';

function ensureLocale(input?: string): Locale {
  if (input && (locales as readonly string[]).includes(input as Locale)) return input as Locale;
  if (input?.includes('-')) {
    const base = input.split('-')[0];
    if ((locales as readonly string[]).includes(base as Locale)) return base as Locale;
  }
  return defaultLocale;
}

export default getRequestConfig(async ({locale}) => {
  const safe = ensureLocale(locale);
  const messages = (await import(`../../messages/${safe}.json`)).default;
  return {locale: safe, messages};
});
