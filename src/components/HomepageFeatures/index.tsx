import Link from "@docusaurus/Link";

import Card from "@site/src/components/card";
import CardBody from "@site/src/components/card/body";
import CardHeader from "@site/src/components/card/header";

import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

interface CardItem {
  title: string;
  description: string;
  link: string;
}

const CardList: CardItem[] = [
  {
    title: "Test",
    description: "testing again",
    link: "/about",
  },
  {
    title: "Test",
    description: "testing again",
    link: "/about",
  },
];

function Feature({ title, description, link }: CardItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Link to={link} style={{ color: "#FFF", textDecoration: "none" }}>
          <Card shadow="tl">
            <CardHeader>{title}</CardHeader>
            <CardBody>{description}</CardBody>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CardList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
