import { Icon, IconProps } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import { MyIconProps } from "./interface";
import { clean } from "./util";

export const TsIcon: FC<MyIconProps> = ({ ...props }) => {
  const { myDesc, title, ariaLabel } = clean(props);

  return (
    <Icon
      aria-labelledby={ariaLabel}
      {...props}
      viewBox="0 0 65 64"
      fill="none"
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
          d="M26.9614 44.2942V46.7673H34.8511V69.2225H40.4497V46.7673H48.3394V44.3397C48.3394 42.9742 48.3394 41.8666 48.2787 41.8362C48.2787 41.7907 43.469 41.7755 37.6276 41.7755L27.0069 41.8211V44.3093L26.9614 44.2942ZM62.4194 41.7604C63.9669 42.1245 65.1504 42.8224 66.2125 43.93C66.7738 44.5369 67.6083 45.599 67.669 45.8721C67.669 45.9631 65.0442 47.7383 63.4511 48.7245C63.3904 48.77 63.1476 48.5121 62.9049 48.1176C62.1159 46.9949 61.3118 46.5093 60.0525 46.4183C58.2318 46.2969 57.018 47.2528 57.018 48.8459C57.018 49.3314 57.109 49.6045 57.2911 49.999C57.7007 50.8335 58.4594 51.3342 60.8111 52.3659C65.1504 54.2321 67.0318 55.4611 68.1697 57.2211C69.4594 59.1935 69.7476 62.2887 68.8828 64.61C67.9118 67.1438 65.5449 68.8583 62.1614 69.4197C61.0994 69.6018 58.6718 69.5714 57.5338 69.3742C55.1063 68.919 52.7849 67.7052 51.3587 66.1425C50.7973 65.5356 49.7201 63.9121 49.7807 63.8059L50.3573 63.4418L52.6332 62.1218L54.3476 61.1204L54.7421 61.6514C55.2428 62.4404 56.3656 63.5025 57.018 63.8666C58.9904 64.8831 61.6304 64.7466 62.9352 63.5631C63.4966 63.0473 63.7394 62.5011 63.7394 61.7425C63.7394 61.0445 63.6332 60.7259 63.2842 60.1949C62.7987 59.5273 61.8276 58.9811 59.0966 57.7673C55.9559 56.4321 54.6207 55.5824 53.3766 54.2776C52.6635 53.4886 52.0111 52.2597 51.7076 51.2431C51.4801 50.3631 51.4042 48.2086 51.6166 47.3438C52.269 44.3093 54.5601 42.1852 57.8373 41.5783C58.8994 41.3659 61.4028 41.4569 62.4497 41.73L62.4194 41.7604Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};