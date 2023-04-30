import ArticlesContainer from "@/components/articles";
import Layout from "@/components/layout";
import Head from "next/head";
import React from "react";

function Projects() {
  return (
    <Layout>
      <Head>
        <title>Articles</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticlesContainer/>
    </Layout>
  );
}

export default Projects;
