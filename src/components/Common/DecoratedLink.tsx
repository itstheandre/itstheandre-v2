import { FC } from "react";
import { NextChakraLinkProps, NextLink } from "./Links";

export const DecoratedLink: FC<NextChakraLinkProps> = ({
  children,
  href,
  ...rest
}) => (
  <NextLink href={href} textDecor="underline" {...rest}>
    {children}
  </NextLink>
);
