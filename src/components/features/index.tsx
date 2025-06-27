import Link from "@docusaurus/Link";

import Card from "@site/src/components/card";
import CardBody from "@site/src/components/card/body";
import CardHeader from "@site/src/components/card/header";

import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";

interface CardItem {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

const CardList: CardItem[] = [
  {
    icon: <Icon icon="material-symbols:3g-mobiledata-rounded" width="28" height="28" />,
    title: "Test",
    description: "testing again",
    link: "/about",
  },
  {
    icon: <Icon icon="material-symbols:3g-mobiledata-rounded" width="28" height="28" />,
    title: "Test",
    description: "testing again",
    link: "/about",
  },
];

function Feature({ icon, title, description, link }: CardItem) {
  return (
    <div className={clsx("col padding-vert--md")}>
      <div className="text--center padding-horiz--md">
        <Link to={link} style={{textDecoration: "none" }} className="">
          <Card shadow="tl">
            <CardHeader variant="secondary" icon={icon} style={{justifyContent: "left"}}>{title}</CardHeader>
            <CardBody variant="secondary">{description}</CardBody>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default function CardFeatures(): ReactNode {
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
