import Card from "@site/src/components/card";
import CardBody from "@site/src/components/card/body";
import CardFooter from "@site/src/components/card/footer";
import CardHeader from "@site/src/components/card/header";
// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from "@theme-original/MDXComponents";
export default {
  // Reusing the default mapping
  ...MDXComponents,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
};
