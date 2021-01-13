import { useColorMode, useDisclosure } from "@chakra-ui/react";
import { createContext, FC, useContext } from "react";
import { MDXWrapper } from "../../theme/custom/MDX.comps";
import { StrokerBox } from "../../theme/custom/stroker.div";
import { Main } from "./Main";
import { Nav } from "./Nav";

interface LayoutProps {
  children: React.ReactNode;
}

const MenuOpenContext = createContext<{
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}>({
  isOpen: false,
  onOpen() {},
  onClose() {},
});

const MenuOpenWrapper: FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <MenuOpenContext.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
    </MenuOpenContext.Provider>
  );
};

export const useMenu = () => useContext(MenuOpenContext);

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { colorMode } = useColorMode();
  // const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <Main>
      <MenuOpenWrapper>
        <Nav />
      </MenuOpenWrapper>
      <StrokerBox colormode={colorMode} pos="relative">
        <MDXWrapper>{children}</MDXWrapper>
      </StrokerBox>
    </Main>
  );
};
