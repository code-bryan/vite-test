import i18n from 'i18n-js';
import en from './en';
import es from './es';

i18n.translations = { en, es };
i18n.locale = 'en';
i18n.defaultLocale = 'en';

export const switchLocale = (locale: string = 'en') => {
  i18n.locale = locale;
};

type Message = string | object;

interface Interpolate { 
  [key: string]: any;
}
interface TranslateOptions {
  message?: string | undefined;
  defaults?: Array<{ message: Message } | undefined>;
  defaultValue?: Message | undefined;
  interpolate?: Interpolate;
}

export const translate = (scope: string, options?: TranslateOptions) => i18n.t(scope, { ...options, ...options?.interpolate } as any);