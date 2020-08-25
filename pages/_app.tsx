/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import App, { AppInitialProps, AppContext } from "next/app";
import { ThemeProvider } from "styled-components";
import { appWithTranslation } from "@Server/i18n";

const theme = {
    colors: {
        primary: "#0070f3",
    },
};

class MyApp extends App {
    static async getInitialProps({
        Component,
        ctx,
    }: AppContext): Promise<AppInitialProps> {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }
}

export default appWithTranslation(MyApp);
