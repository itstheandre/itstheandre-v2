import { Icon, IconProps } from "@chakra-ui/icons";
import { FC } from "react";

export const LinkedinIcon: FC<IconProps> = ({ ...props }) => (
  <Icon
    {...props}
    viewBox="0 0 65 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <svg
      // width="20"
      // height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M19.5 19.499H19.495V19.4999H16.3575V13.499C16.3575 12.7462 16.356 11.7612 16.041 10.966C15.8778 10.554 15.622 10.1677 15.2207 9.88774C14.8184 9.60707 14.3125 9.46319 13.7017 9.46319C13.0977 9.46319 12.5853 9.58133 12.1615 9.816C11.7349 10.0523 11.4279 10.3902 11.2124 10.7811C10.7945 11.5392 10.7158 12.5078 10.7158 13.3874V19.499H7.57416V7.14652H10.5517V8.46736V8.96736H11.0517H11.11H11.4118L11.5524 8.70033C12.0224 7.80789 13.2097 6.81152 15.0325 6.81152C17.0065 6.81152 18.0634 7.45105 18.6662 8.40855C19.3025 9.41905 19.5 10.8808 19.5 12.664V19.499Z"
          stroke="currentColor"
        />
        <path
          d="M0.830017 7.14746H3.97668V19.5H0.830017V7.14746Z"
          stroke="currentColor"
        />
        <path
          d="M0.5 2.40167C0.5 1.35198 1.35198 0.5 2.40167 0.5C3.45035 0.5 4.30267 1.35187 4.30333 2.40198C4.30316 3.45761 3.44521 4.32583 2.40167 4.32583C1.35802 4.32583 0.5 3.45744 0.5 2.40167Z"
          stroke="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="20" height="20" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  </Icon>
);
