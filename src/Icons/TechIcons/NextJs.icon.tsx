import { Icon } from "@chakra-ui/icons";
import { FC } from "react";
import { MyIconProps } from "./interface";
import { clean } from "./util";

export const NextJsIcon: FC<MyIconProps> = ({ ...props }) => {
  const { title, ariaLabel, myDesc } = clean(props);
  ("white");
  return (
    <Icon
      {...props}
      viewBox="0 0 65 64"
      fill="none"
      aria-labelledby={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg
        aria-labelledby={ariaLabel}
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id={title}>{props.title}</title>
        {myDesc && <desc id={myDesc}>{props.desc}</desc>}
        <circle cx="44" cy="44" r="43.5" stroke="currentColor" />
        <path
          d="M27.1011 34.1716H39.1722V35.1408H28.2079V42.4345H38.5183V43.4037H28.2079V51.4115H39.2979V52.3807H27.1011V34.1716ZM40.2534 34.1716H41.5362L47.2196 42.1794L53.0287 34.1716L60.9301 24L47.9489 43.0211L54.6382 52.3807H53.3052L47.2196 43.8627L41.1089 52.3807H39.801L46.5405 43.0211L40.2539 34.1716H40.2534ZM55.1162 35.1408V34.1716H68.8717V35.1408H62.5348V52.3803H61.428V35.1408H55.1166H55.1162ZM12 34.1716H13.3833L32.4556 63L24.5738 52.3807L13.1566 35.5487L13.1064 52.3807H12V34.1716ZM68.7608 51.1189C68.5342 51.1189 68.3647 50.942 68.3647 50.7135C68.3647 50.4847 68.5342 50.3078 68.7604 50.3078C68.9892 50.3078 69.156 50.4847 69.156 50.7135C69.156 50.942 68.9892 51.1189 68.7604 51.1189H68.7608ZM69.8477 50.0518H70.4401C70.4483 50.3759 70.6827 50.5934 71.0268 50.5934C71.4116 50.5934 71.6296 50.3598 71.6296 49.9212V47.1451H72.2324V49.9239C72.2324 50.7135 71.7804 51.1682 71.032 51.1682C70.33 51.1682 69.8481 50.7271 69.8481 50.0518H69.8477ZM73.0207 50.0169H73.6183C73.6694 50.3895 74.03 50.6262 74.5496 50.6262C75.0336 50.6262 75.389 50.3729 75.389 50.0247C75.389 49.7256 75.1632 49.5456 74.6488 49.4233L74.1483 49.301C73.4462 49.135 73.1256 48.7917 73.1256 48.2148C73.1256 47.515 73.6907 47.0494 74.5383 47.0494C75.327 47.0494 75.9034 47.515 75.938 48.1763H75.3513C75.2949 47.8147 74.9829 47.5884 74.5305 47.5884C74.0538 47.5884 73.7366 47.8199 73.7366 48.1737C73.7366 48.4541 73.9411 48.6148 74.4473 48.7345L74.875 48.8407C75.6715 49.0285 76 49.3552 76 49.9457C76 50.6969 75.4236 51.1682 74.5036 51.1682C73.6426 51.1682 73.0636 50.7188 73.0207 50.0165V50.0169Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};