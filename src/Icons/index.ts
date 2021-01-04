import { FC } from "react";
import {
  BootstrapIcon,
  ChakraIcon,
  GatsbyIcon,
  GraphQLIcon,
  HTML5Icon,
  JsIcon,
  MaterialUiIcon,
  NestJsIcon,
  NextJsIcon,
  NodeJsIcon,
  P5Icon,
  ReactIcon,
  ShopifyIcon,
  StyledComponentsIcon,
  TsIcon,
} from "./TechIcons";
import { MyIconProps } from "./TechIcons/interface";
export * from "./Github.icon";
export * from "./Linkedin.icon";
export * from "./RightArrow";

export type TechUsed =
  | "all"
  | "frontend"
  | "backend"
  | "lib"
  | "framework"
  | "language";

type IconsBase = {
  Icon: FC<MyIconProps>;
  techUsed: TechUsed[];
  title: string;
  desc?: string;
  uniquename: string;
};

export const MyIcons: IconsBase[] = [
  {
    Icon: ReactIcon,
    techUsed: ["frontend", "lib"],
    uniquename: "react",
    title: "The ReactJs Logo",
  },
  {
    Icon: HTML5Icon,
    techUsed: ["frontend", "language"],
    uniquename: "html",
    title: "The HTML5 Logo",
  },
  {
    Icon: GatsbyIcon,
    techUsed: ["frontend", "framework"],
    uniquename: "gatsby",
    title: "The GatsbyJs Logo",
  },
  {
    Icon: BootstrapIcon,
    techUsed: ["frontend", "lib"],
    uniquename: "bootstrap",
    title: "The Bootstrap Logo",
  },
  {
    Icon: ChakraIcon,
    techUsed: ["frontend", "lib"],
    uniquename: "chakra-ui",
    title: "The Chakra-Ui Logo",
  },
  {
    Icon: StyledComponentsIcon,
    techUsed: ["frontend", "lib"],
    uniquename: "styled-components",
    title: "The Styled Components Logo",
  },
  {
    Icon: MaterialUiIcon,
    techUsed: ["frontend", "lib"],
    uniquename: "material-ui",
    title: "The Material Ui Logo",
    desc: "Material Ui is a Component UI Framework created by Google",
  },
  {
    Icon: P5Icon,
    techUsed: ["lib"],
    uniquename: "p5",
    title: "The P5Js Logo",
    desc: "P5 is a library used to build my first ever game",
  },
  {
    Icon: GraphQLIcon,
    techUsed: ["lib", "language"],
    uniquename: "graphql",
    title: "The GraphQL Logo",
  },
  {
    Icon: NodeJsIcon,
    techUsed: ["backend", "framework"],
    uniquename: "nodeJs",
    title: "The NodeJS Logo",
  },
  {
    Icon: NestJsIcon,
    techUsed: ["backend", "framework"],
    uniquename: "nestJs",
    title: "The NestJs Logo",
  },
  {
    Icon: ShopifyIcon,
    techUsed: ["backend", "frontend", "lib"],
    uniquename: "shopify",
    title: "The Shopify Logo",
    desc: "The e-commerce platform I've used with my clients",
  },
  {
    Icon: NextJsIcon,
    techUsed: ["backend", "frontend", "lib"],
    uniquename: "nextJs",
    title: "The NextJs Logo",
  },
  {
    Icon: TsIcon,
    techUsed: ["backend", "frontend", "language"],
    uniquename: "ts",
    title: "The Typescript Logo",
  },
  {
    Icon: JsIcon,
    techUsed: ["backend", "frontend", "language"],
    uniquename: "js",
    title: "The Javascript Logo",
  },
];
