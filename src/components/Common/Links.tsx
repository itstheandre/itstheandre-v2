import { Link, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import NLink, { LinkProps as NextLinkProps } from "next/link";
import { FC, PropsWithChildren } from "react";

export type Mapped<T> = {
  readonly [P in keyof T]?: T[P];
};

type NextLinkProps2 = ChakraLinkProps & {
  href?: string;
};

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
  isExternal,
  ...chakraProps
}) => {
  const extraProps = isExternal
    ? ({
        isExternal: true,
        referrerPolicy: "no-referrer",
        target: "_blank",
      } as const)
    : {};
  return (
    <NLink passHref href={href}>
      <Link {...chakraProps} {...extraProps}>
        {children}
      </Link>
    </NLink>
  );
};
