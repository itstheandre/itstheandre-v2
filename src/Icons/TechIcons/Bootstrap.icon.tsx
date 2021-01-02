import { Icon } from "@chakra-ui/icons";
import { FC } from "react";
import { MyIconProps } from "./interface";
import { clean } from "./util";

export const BootstrapIcon: FC<MyIconProps> = ({ ...props }) => {
  const { title, myDesc, ariaLabel } = clean(props);
  return (
    <Icon
      {...props}
      viewBox="0 0 65 64"
      fill="none"
      aria-labelledby={ariaLabel}
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
          d="M25.4834 21H47.5151C51.578 21 54.842 21.9259 57.2934 23.7928C59.7447 25.6593 60.9761 28.465 60.9761 32.237C60.9761 34.5227 60.4175 36.4789 59.3006 38.1043C58.1824 39.7292 56.5833 41.0001 54.4996 41.8883V42.014C57.2943 42.6117 59.4138 43.9315 60.8487 45.9765C62.2835 48.0339 63.0074 50.5985 63.0074 53.6978C63.0074 55.4754 62.6898 57.1394 62.0548 58.6755C61.4198 60.224 60.429 61.5589 59.0701 62.6749C57.7112 63.7926 55.9851 64.6826 53.8637 65.342C51.7437 66.0028 49.2284 66.3328 46.3086 66.3328H25.4834V21ZM33.42 39.9836H46.3725C48.2776 39.9836 49.8643 39.4503 51.1344 38.3583C52.4045 37.2663 53.0391 35.7169 53.0391 33.6843C53.0391 31.3991 52.4675 29.7875 51.3258 28.8607C50.1832 27.933 48.5321 27.4636 46.3734 27.4636H33.42V39.9836ZM33.42 59.8572H47.4516C49.8652 59.8572 51.7441 59.2337 53.0657 57.9769C54.3984 56.7326 55.0725 54.9545 55.0725 52.6688C55.0725 50.4213 54.4117 48.7072 53.0657 47.4877C51.7197 46.2692 49.8652 45.6847 47.4516 45.6847H33.42V59.8572Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};
