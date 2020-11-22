import { FC } from "react";
import { Main } from "./Main";
import { Nav } from "./Nav";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Main>
      <Nav />
      {children}
    </Main>
  );
};
