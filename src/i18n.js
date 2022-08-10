import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-locize-backend';
import LastUsed from 'locize-lastused';
import { locizePlugin } from 'locize';
import { DateTime } from 'luxon';

const isProduction = process.env.NODE_ENV === 'production';

const locizeOptions = {
    projectId: process.env.REACT_APP_LOCIZE_PROJECTID,
    apiKey: process.env.REACT_APP_LOCIZE_APIKEY, // YOU should not expose your apps API key to production!!!
    referenceLng: process.env.REACT_APP_LOCIZE_REFLNG,
    version: process.env.REACT_APP_LOCIZE_VERSION,
    allowedAddOrUpdateHosts: process.env.REACT_APP_LOCIZE_ALLOWEDHOSTS.split(' '),
};
if (!isProduction) {
    // locize-lastused
    // sets a timestamp of last access on every translation segment on locize
    // -> safely remove the ones not being touched for weeks/months
    // https://github.com/locize/locize-lastused
    i18n.use(LastUsed);
}
i18n
    // locize-lastused
    // sets a timestamp of last access on every translation segment on locize
    // -> safely remove the ones not being touched for weeks/months
    // https://github.com/locize/locize-lastused
    .use(LastUsed)
    // locize-editor
    // InContext Editor of locize
    .use(locizePlugin)
    // i18next-locize-backend
    // loads translations from your project, saves new keys to it (saveMissing: true)
    // https://github.com/locize/i18next-locize-backend
    .use(Backend)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
            format: (value, format, lng) => {
                if (value instanceof Date) {
                    return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime[format])
                }
                return value;
            } // not needed for react as it escapes by default
        },
        backend: locizeOptions,
        locizeLastUsed: locizeOptions,
        saveMissing: (process.env.REACT_APP_LOCIZE_SAVEMISSING === 'true'),
    });
export default i18n;
