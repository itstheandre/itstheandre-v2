import { Icon } from "@chakra-ui/icons";
import { FC } from "react";
import { MyIconProps } from "./interface";
import { clean } from "./util";

export const P5Icon: FC<MyIconProps> = ({ ...props }) => {
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
        aria-labelledby={ariaLabel}
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id={title}>{props.title}</title>
        {myDesc && <desc id={myDesc}>{props.desc}</desc>}
        <g filter="url(#filter0_d)">
          <circle cx="48" cy="44" r="43.5" stroke="currentColor" />
          <path
            d="M20.1611 36.7864V38.7509H20.253C20.4361 38.4775 20.6754 38.1987 20.9711 37.9153C21.2663 37.6318 21.6282 37.3779 22.0563 37.1527C22.4841 36.9287 22.9679 36.7425 23.5081 36.5956C24.0474 36.4492 24.6542 36.3755 25.3264 36.3755C26.3658 36.3755 27.3232 36.5664 28.1995 36.9473C29.0755 37.3293 29.8297 37.8522 30.4615 38.5166C31.0928 39.1814 31.5818 39.9635 31.9284 40.8624C32.2748 41.7618 32.4481 42.7296 32.4481 43.7656C32.4481 44.8016 32.2799 45.7742 31.9435 46.6832C31.6076 47.5922 31.1281 48.3838 30.5071 49.0583C29.8853 49.7328 29.1319 50.2711 28.2453 50.671C27.3588 51.0716 26.355 51.272 25.2348 51.272C24.1954 51.272 23.2428 51.0667 22.377 50.6565C21.5105 50.2458 20.8436 49.689 20.3751 48.9846H20.3142V57.8992H16.6465V36.7864H20.1611ZM28.7192 43.7653C28.7192 43.2178 28.6324 42.6753 28.4593 42.1376C28.2858 41.6002 28.0262 41.1164 27.6798 40.6861C27.3332 40.2567 26.8954 39.9094 26.3655 39.6451C25.8356 39.3814 25.2143 39.2495 24.5013 39.2495C23.8288 39.2495 23.2275 39.3863 22.6981 39.6601C22.1789 39.9258 21.7173 40.284 21.3379 40.7155C20.9592 41.1485 20.6689 41.646 20.4821 42.1821C20.2881 42.7296 20.1918 43.2773 20.1918 43.8243C20.1918 44.3717 20.2881 44.9143 20.4821 45.4515C20.6712 45.9822 20.9614 46.4745 21.3379 46.9035C21.7148 47.3336 22.1771 47.6873 22.6981 47.944C23.2275 48.2082 23.8288 48.3396 24.5013 48.3396C25.2143 48.3396 25.8356 48.2033 26.3655 47.9295C26.8952 47.6556 27.3332 47.3039 27.6798 46.8736C28.0262 46.4437 28.2858 45.955 28.4593 45.4075C28.6301 44.8754 28.7176 44.322 28.7192 43.7653ZM64.4693 36.114V51.7119C64.4693 52.5524 64.3979 53.3492 64.2553 54.1017C64.1122 54.8543 63.8429 55.5091 63.4453 56.0667C63.0483 56.6242 62.5079 57.0683 61.8254 57.4008C61.1424 57.7334 60.2515 57.8992 59.1509 57.8992C58.8443 57.899 58.5379 57.8795 58.2339 57.8407C57.9285 57.8014 57.6841 57.7621 57.5005 57.7231L57.8064 54.732C57.9695 54.7713 58.1423 54.8005 58.3259 54.8202C58.5094 54.8393 58.672 54.8494 58.8148 54.8494C59.2423 54.8494 59.5887 54.7713 59.8539 54.6148C60.1171 54.4594 60.3291 54.2357 60.4655 53.9696C60.6076 53.6957 60.6995 53.3782 60.7404 53.0164C60.7809 52.6546 60.8014 52.269 60.8014 51.8583V36.114H64.4693ZM76.9698 40.5397C76.6434 40.129 76.1954 39.7726 75.6248 39.4695C75.0542 39.1664 74.4329 39.0147 73.7603 39.0147C73.1692 39.0147 72.6298 39.1323 72.1409 39.3669C71.6514 39.6009 71.4074 39.9924 71.4074 40.5397C71.4074 41.0869 71.677 41.4737 72.2169 41.6977C72.7568 41.9227 73.5468 42.1526 74.5859 42.3872C75.1358 42.5048 75.6908 42.661 76.2515 42.8563C76.8121 43.0516 77.3216 43.3107 77.7801 43.6334C78.2364 43.9539 78.6165 44.3637 78.8954 44.8357C79.1804 45.3149 79.3235 45.8963 79.3235 46.5806C79.3235 47.4412 79.155 48.1694 78.8189 48.7653C78.483 49.3616 78.0345 49.8455 77.4739 50.2169C76.9132 50.5882 76.2615 50.8572 75.5178 51.0232C74.7611 51.1907 73.9868 51.2742 73.2102 51.2723C72.0687 51.2723 70.9587 51.0718 69.8786 50.6713C68.7986 50.2711 67.902 49.6989 67.1891 48.9564L69.6037 46.7861C70.0112 47.2945 70.5406 47.7148 71.1932 48.0469C71.8452 48.3794 72.5682 48.5452 73.3633 48.5452C73.6277 48.5452 73.8978 48.5165 74.1733 48.4575C74.4409 48.4018 74.6984 48.308 74.9372 48.1793C75.1672 48.0558 75.3615 47.8794 75.5027 47.6659C75.6448 47.4505 75.7162 47.1872 75.7162 46.8738C75.7162 46.287 75.4361 45.8673 74.8762 45.6131C74.3154 45.3589 73.4746 45.1047 72.3546 44.8507C71.8093 44.7348 71.273 44.5828 70.7495 44.3958C70.2301 44.2101 69.7665 43.966 69.3589 43.6629C68.9507 43.3597 68.6169 42.9741 68.381 42.5336C68.1365 42.0841 68.0139 41.527 68.0139 40.8622C68.0139 40.0801 68.1818 39.4062 68.5185 38.8393C68.8444 38.2831 69.2992 37.8062 69.8479 37.4457C70.3978 37.0844 71.0194 36.8154 71.7123 36.6398C72.4105 36.463 73.1297 36.3741 73.8517 36.3755C74.9108 36.3755 75.9453 36.5516 76.9537 36.9031C77.9621 37.2553 78.7616 37.7935 79.3532 38.5163L76.9698 40.5397ZM55.3112 47.8845L57.4956 47.2518L57.9247 48.5182L55.7492 49.23L57.0996 51.0672L55.9612 51.8595L54.5396 50.0548L53.1552 51.8119L52.0495 51.0041L53.3999 49.23L51.2078 48.471L51.6371 47.2037L53.8384 47.8843V45.6995H55.3114V47.8845H55.3112ZM47.7661 41.2578C47.389 40.4471 46.8647 39.7626 46.1922 39.2053C45.52 38.6482 44.7302 38.2228 43.8237 37.9298C42.9167 37.6368 41.9334 37.4899 40.8743 37.4899C40.487 37.4899 40.0541 37.51 39.5754 37.5483C39.0964 37.5881 38.684 37.6562 38.3376 37.7542L38.5514 33.2673H47.3844V30.1006H35.0672L34.7004 41.4482C35.0257 41.2922 35.398 41.1456 35.8158 41.0083C36.2385 40.8703 36.6667 40.7483 37.0993 40.6423C37.5422 40.5341 37.9913 40.4508 38.4444 40.3928C38.8749 40.3362 39.3088 40.3069 39.7433 40.3051C40.3339 40.3051 40.9148 40.3685 41.4854 40.4955C42.0558 40.6227 42.5703 40.8477 43.0288 41.1699C43.4873 41.4922 43.8588 41.9178 44.1445 42.4454C44.4294 42.973 44.5722 43.6378 44.5722 44.4395C44.5722 45.0651 44.4652 45.6273 44.2512 46.1257C44.0375 46.6235 43.7469 47.0396 43.3806 47.3714C43.0105 47.7061 42.5737 47.9654 42.0965 48.1338C41.6075 48.3104 41.0881 48.3981 40.5377 48.3981C39.56 48.3981 38.7139 48.1486 38.001 47.6502C37.2875 47.1518 36.7786 46.4921 36.4727 45.6708L36.432 45.6853L33.7777 48.0714C34.3146 48.9114 35.0065 49.6141 35.8616 50.1722C37.1042 50.9829 38.6323 51.3892 40.4463 51.3892C41.5261 51.3892 42.5447 51.2227 43.5024 50.8908C44.4599 50.5588 45.2954 50.0796 46.0087 49.4535C46.7216 48.8284 47.2871 48.0609 47.7052 47.1518C48.1225 46.2428 48.3313 45.212 48.3313 44.0581C48.3316 43.0024 48.1432 42.0696 47.7661 41.2578Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="96"
            height="96"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </Icon>
  );
};