import { Icon, IconProps } from "@chakra-ui/icons";
import { FC } from "react";

export const RightArrowIcon: FC<IconProps> = ({ ...props }) => {
  const { width = "24", height = "24" } = props;

  return (
    <Icon
      {...props}
      width={width}
      height={height}
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.5625 5.25L19.3125 12L12.5625 18.75"
          stroke="#F85333"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3752 12.0005H4.68774"
          stroke="#F85333"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};
