import NextI18Next from "next-i18next";
import path from "path";

const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;

const NextI18NextInstance = new NextI18Next({
    defaultLanguage: "fr",
    otherLanguages: ["en"],
    localeSubpaths,
    localePath: path.resolve("./public/static/locales"),
});

export const { appWithTranslation, withTranslation } = NextI18NextInstance;

export default NextI18NextInstance;
