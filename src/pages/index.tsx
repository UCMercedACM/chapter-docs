import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CardFeatures from "@site/src/components/features";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";

import clsx from "clsx";
import type { ReactNode } from "react";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Central documentation hub for Associate of Computing Machinery, UC Merced Chapter"
    >
      <HomepageHeader />
      <main>
        <CardFeatures />
      </main>
    </Layout>
  );
}
