import { Link, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import NLink, { LinkProps as NextLinkProps } from "next/link";
import { FC, PropsWithChildren, useEffect, useState } from "react";

export type Mapped<T> = {
  readonly [P in keyof T]?: T[P];
};

type NextLinkProps2 = ChakraLinkProps & {
  href?: string;
};

// const props: LinkProps = {
//   text,
// };

export type NextChakraLinkProps = PropsWithChildren<
  NextLinkProps & ChakraLinkProps
>;

export const NextLink: FC<NextChakraLinkProps> = ({
  href = "/",
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  children,
  ...chakraProps
}) => {
  return (
    <NLink passHref href={href}>
      <Link {...chakraProps}>{children}</Link>
      {/* <Link  as="span">
        <a>{children}</a>
      </Link> */}
    </NLink>
  );
};
