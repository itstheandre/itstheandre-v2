import { Icon } from "@chakra-ui/icons";
import { FC } from "react";
import { MyIconProps } from "./interface";
import { clean } from "./util";

export const GatsbyIcon: FC<MyIconProps> = ({ ...props }) => {
  const { myDesc, ariaLabel, title } = clean(props);
  return (
    <Icon
      {...props}
      viewBox="0 0 65 64"
      aria-labelledby={ariaLabel}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg
        viewBox="0 0 88 88"
        aria-labelledby={ariaLabel}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id={title}>{props.title}</title>
        {myDesc && <desc id={myDesc}>{props.desc}</desc>}
        <circle cx="44" cy="44" r="43.5" stroke="currentColor" />
        <path
          d="M44 10C25.2211 10 10 25.2211 10 44C10 62.7789 25.2211 78 44 78C62.7789 78 78 62.7789 78 44C78 25.2211 62.7789 10 44 10ZM17.3059 44.3536L43.6464 70.6941C29.1814 70.5064 17.4936 58.8186 17.3059 44.3536ZM49.9758 70.0277L17.9723 38.0242C20.6869 26.1568 31.3085 17.3005 44 17.3005C52.8699 17.3005 60.7307 21.628 65.5859 28.2866L61.8894 31.5478C57.9509 25.9011 51.4066 22.2046 44 22.2046C34.5698 22.2046 26.5376 28.1941 23.5021 36.5771L51.4229 64.4952C58.2038 62.039 63.4181 56.3162 65.1643 49.2278H53.5934V44H70.7022C70.6995 56.6915 61.8432 67.3131 49.9758 70.0277Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};
