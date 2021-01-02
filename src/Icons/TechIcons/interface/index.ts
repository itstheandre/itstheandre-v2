import { IconProps } from "@chakra-ui/icons";
export interface MyIconProps extends IconProps {
  title: string;
  desc?: string;
  uniquename: string;
}
