import { ComponentWithAs, Link } from "@chakra-ui/react";
import NLink, { LinkProps } from "next/link";
import { FC, useEffect, useState } from "react";

export type Mapped<T> = {
  readonly [P in keyof T]?: T[P];
};
type Me = Mapped<ComponentWithAs<"a", LinkProps>> & {
  href: string;
};

type NextLinkProps = Mapped<ComponentWithAs<"a", LinkProps>> & {
  href?: string;
};

export const NextLink: FC<NextLinkProps> = ({
  href = "/",
  children,
  ...rest
}) => {
  return (
    <NLink href={href}>
      <Link {...rest}>{children}</Link>
    </NLink>
  );
};
