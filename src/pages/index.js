import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function HomepageHeader() {
  // const { siteConfig: {customFields}, } = useDocusaurusContext();
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        {/* <div class="container"> */}
        <div class="row">
          <div class="col">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg" to="/docs">
                Docs
              </Link>
              {/* <Link
                className="button button--secondary button--lg"
                to="/docs/navigating-irmis Documentation"
              >
                FAQs
              </Link> */}
            </div>
          </div>
          <div class="col">
            <iframe
              src={
                "https://webchat.botframework.com/embed/JimVALUEONE?s=JimVALUETWO"
              }
            ></iframe>
          </div>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
