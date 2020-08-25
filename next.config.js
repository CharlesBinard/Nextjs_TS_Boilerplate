const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const nextRuntimeDotenv = require("next-runtime-dotenv");
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const withConfig = nextRuntimeDotenv({ public: ["API_URL", "API_KEY"] });

const localeSubpaths = {
    fr: 'fr',
    en: 'eng',
}

const nextConfig = {
    analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
        server: {
            analyzerMode: "static",
            reportFilename: "../bundles/server.html",
        },
        browser: {
            analyzerMode: "static",
            reportFilename: "../bundles/client.html",
        },
    },
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
      localeSubpaths,
    },
};


module.exports = withConfig(
    withPlugins([[withBundleAnalyzer]], nextConfig)
);