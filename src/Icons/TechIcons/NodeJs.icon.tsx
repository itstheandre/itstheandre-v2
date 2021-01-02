import { Icon } from "@chakra-ui/icons";
import { FC } from "react";
import { MyIconProps } from "./interface";
import { clean } from "./util";

export const NodeJsIcon: FC<MyIconProps> = ({ ...props }) => {
  const { title, ariaLabel, myDesc } = clean(props);
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
          d="M41.6858 13.671C43.2454 12.7783 45.2768 12.7743 46.835 13.671C54.6744 18.1007 62.5163 22.5235 70.3544 26.9558C71.8287 27.7863 72.8148 29.427 72.7998 31.1257V57.7763C72.8108 59.5454 71.7272 61.2253 70.1719 62.0369C62.3582 66.4422 54.5485 70.8528 46.7362 75.2581C45.1444 76.1683 43.0722 76.0981 41.5301 75.1134C39.1876 73.7554 36.841 72.4041 34.4982 71.0475C34.0195 70.7621 33.4799 70.5349 33.1418 70.0708C33.4407 69.668 33.9749 69.6178 34.4091 69.442C35.3869 69.131 36.285 68.6319 37.1833 68.1476C37.4104 67.9921 37.6878 68.0517 37.9055 68.1908C39.9087 69.3394 41.8941 70.5213 43.904 71.6588C44.3328 71.9064 44.7669 71.5777 45.1334 71.3734C52.801 67.0398 60.478 62.7226 68.1443 58.3877C68.4283 58.251 68.5854 57.9495 68.5623 57.6384C68.5677 48.8469 68.5636 40.0538 68.565 31.2623C68.5975 30.9093 68.3932 30.5847 68.0739 30.4402C60.2874 26.0551 52.5049 21.6632 44.7196 17.277C44.5847 17.1843 44.425 17.1345 44.2613 17.1343C44.0976 17.1341 43.9377 17.1833 43.8025 17.2757C36.0173 21.6632 28.2361 26.0591 20.4509 30.444C20.1328 30.5887 19.9193 30.9079 19.9572 31.2623C19.9585 40.0538 19.9572 48.8469 19.9572 57.6397C19.9437 57.7915 19.977 57.9438 20.0527 58.0761C20.1284 58.2084 20.2428 58.3143 20.3805 58.3796C22.4581 59.5577 24.5383 60.7275 26.6171 61.9016C27.7883 62.532 29.2263 62.9065 30.5166 62.4236C31.6553 62.0152 32.4534 60.8532 32.4317 59.6442C32.4424 50.904 32.4263 42.1625 32.4398 33.4236C32.4113 33.0356 32.7794 32.7151 33.1566 32.7516C34.1548 32.7448 35.1544 32.7381 36.1526 32.7543C36.5693 32.7448 36.856 33.1626 36.8045 33.5535C36.8004 42.3491 36.8152 51.1448 36.7978 59.9403C36.8005 62.2844 35.8374 64.8351 33.6692 65.982C30.998 67.3658 27.6965 67.0723 25.0575 65.7455C22.773 64.6052 20.5929 63.2596 18.3489 62.038C16.7896 61.2309 15.7114 59.5443 15.7224 57.7766V31.1257C15.706 29.3918 16.7313 27.7213 18.2515 26.903C26.0638 22.4941 33.8748 18.0819 41.6858 13.671Z"
          fill="currentColor"
        />
        <path
          d="M48.5016 32.1328C51.9089 31.9135 55.5566 32.0028 58.6227 33.6814C60.9966 34.9677 62.3126 37.6673 62.3545 40.3047C62.2882 40.6604 61.9164 40.8566 61.5767 40.8322C60.5882 40.8309 59.5994 40.8457 58.6108 40.8255C58.1914 40.8416 57.9477 40.455 57.8951 40.0842C57.611 38.8223 56.9228 37.5726 55.7351 36.9639C53.9118 36.051 51.7978 36.097 49.8097 36.116C48.3583 36.1931 46.7975 36.3187 45.5679 37.1722C44.6239 37.8187 44.3372 39.1239 44.6741 40.175C44.9918 40.9297 45.863 41.1732 46.5758 41.3976C50.682 42.4716 55.0333 42.3647 59.0611 43.778C60.7286 44.3542 62.3599 45.4743 62.9307 47.2203C63.6773 49.5603 63.3501 52.3574 61.6852 54.236C60.335 55.7819 58.3686 56.6233 56.4074 57.0803C53.7983 57.6621 51.0906 57.6769 48.4409 57.4186C45.9494 57.1346 43.3567 56.48 41.4333 54.7824C39.7885 53.3543 38.9852 51.1291 39.065 48.9815C39.084 48.6188 39.4451 48.3659 39.7926 48.3957C40.7881 48.3876 41.7836 48.3849 42.7792 48.397C43.1768 48.3686 43.4716 48.7122 43.492 49.087C43.6757 50.2893 44.1275 51.5512 45.1759 52.264C47.1992 53.5693 49.738 53.4799 52.0547 53.5165C53.9741 53.4313 56.1287 53.4056 57.695 52.137C58.5214 51.4134 58.7663 50.2028 58.5429 49.1614C58.301 48.2821 57.3812 47.8724 56.5913 47.6044C52.5377 46.3222 48.1378 46.7875 44.1235 45.3374C42.4938 44.7615 40.9178 43.6725 40.2917 41.9982C39.418 39.6286 39.8183 36.6975 41.6577 34.8823C43.4512 33.0768 46.0401 32.3814 48.5016 32.1325V32.1328Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};
