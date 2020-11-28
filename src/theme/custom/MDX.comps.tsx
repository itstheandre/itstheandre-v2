import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "./MDX/components";

export const MDXWrapper: React.FC = ({ children }) => (
  <MDXProvider components={mdxComponents}>{children}</MDXProvider>
);
