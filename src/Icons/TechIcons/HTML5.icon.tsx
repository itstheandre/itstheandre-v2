import { Icon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import { MyIconProps } from "./interface";
import { clean } from "./util";

export const HTML5Icon: FC<MyIconProps> = ({ ...props }) => {
  const { colorMode } = useColorMode();
  const color = colorMode === "dark" ? "#2D3748" : "#EDF2F7";
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
          d="M26.6713 71.1725L22.7588 27.2881H65.7513L61.8346 71.1656L44.2287 76.0465L26.6713 71.1725Z"
          fill="currentColor"
        />
        <path
          d="M44.2549 47.1526H37.1328L36.6409 41.6411H44.2549V36.2588H30.7588L30.8876 37.7028L32.2105 52.5348H44.2549V47.1526ZM44.2549 61.1309L44.2314 61.1372L38.2371 59.5186L37.8539 55.226H32.451L33.205 63.6769L44.2301 66.7376L44.2549 66.7307V61.1309Z"
          fill={color}
        />
        <path
          d="M26.7588 15.3623H29.494V18.0647H31.996V15.3623H34.7313V23.5457H31.9961V20.8054H29.4941V23.5457H26.759V15.3623H26.7588ZM38.3282 18.076H35.9203V15.3623H43.4727V18.076H41.0637V23.5457H38.3284L38.3282 18.076ZM44.6712 15.3623H47.5231L49.2775 18.2377L51.0302 15.3623H53.8834V23.5457H51.1594V19.4895L49.2776 22.3992H49.2307L47.3475 19.4895V23.5457H44.6713V15.3623H44.6712ZM55.2446 15.3623H57.9806V20.8407H61.8271V23.5457H55.2446V15.3623Z"
          fill="currentColor"
        />
        <path
          d="M44.2363 47.1526V52.5347H50.8638L50.2391 59.5151L44.2363 61.1353V66.7348L55.2701 63.6768L55.351 62.7675L56.6158 48.5978L56.7471 47.1526H55.2967H44.2363ZM44.2363 36.2588V41.6411H57.2368L57.3448 40.4313L57.59 37.7028L57.7188 36.2588H44.2363Z"
          fill={color}
        />
      </svg>
    </Icon>
  );
};
