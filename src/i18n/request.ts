import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Validate the locale - ensure locale is always a string
  const validLocale = ['en', 'zh'].includes(locale as string) ? (locale as string) : 'en';
  
  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
});