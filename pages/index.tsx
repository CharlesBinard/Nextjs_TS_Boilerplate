import Link from "next/link";
import React from "react";
import { NextPage } from "next";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "@Server/i18n";
import Layout from "@Components/Layout";
import ButtonTest from "@Theme/ButtonTest";

type InitialProps = {
    namespacesRequired: string[];
};

const IndexPage: NextPage<WithTranslation, InitialProps> = ({ t }) => (
    <Layout title="Home | Next.js + TypeScript Example">
        <h1>{t("common:hello")}</h1>
        <p>
            <Link href="/about">
                <p>About</p>
            </Link>
            <ButtonTest> TEST </ButtonTest>
        </p>
    </Layout>
);

IndexPage.getInitialProps = async () => ({
    namespacesRequired: ["common"],
});

export default withTranslation("common")(IndexPage);
