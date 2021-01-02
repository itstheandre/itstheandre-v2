import { Icon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import { MyIconProps } from "./interface";
import { clean } from "./util";

export const MaterialUiIcon: FC<MyIconProps> = ({ ...props }) => {
  const { title, ariaLabel, myDesc } = clean(props);
  const { colorMode } = useColorMode();
  const color = colorMode === "dark" ? "#2D3748" : "#EDF2F7";
  return (
    <Icon
      {...props}
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={ariaLabel}
    >
      <svg
        viewBox="0 0 88 88"
        fill="none"
        aria-labelledby={ariaLabel}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id={title}>{props.title}</title>
        {myDesc && <desc id={myDesc}>{props.desc}</desc>}
        <circle cx="44" cy="44" r="43.5" stroke="currentColor" />
        <path
          d="M15 48.8571V24L37 36.4286V44.7143L22.3333 36.4286V53L15 48.8571Z"
          fill={color}
        />
        <path
          d="M37 36.375L58 24V48.75L44 57L37 52.875L51 44.625V36.375L37 44.625V36.375Z"
          fill="currentColor"
        />
        <path d="M37 53V61.5L51 70V61.5L37 53Z" fill={color} />
        <path
          d="M51 70L73 57.4545V40.7273L65.6667 44.9091V53.2727L51 61.6364V70ZM65.6667 36.5455V28.1818L73 24V32.3636L65.6667 36.5455Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};
