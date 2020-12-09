import { Icon, IconProps } from "@chakra-ui/icons";
import { FC } from "react";

export const GithubIcon: FC<IconProps> = ({ ...props }) => (
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
      <path
        d="M3.98133 13.9491C3.94854 13.8711 3.91483 13.7965 3.88026 13.7251C3.97093 13.8419 4.06732 13.9629 4.16844 14.077C4.39527 14.3331 4.68968 14.6067 5.08127 14.7305L5.08195 14.7307C5.52674 14.8705 6.0191 14.9065 6.46441 14.8671C6.90185 14.8285 7.34856 14.7121 7.67913 14.4984L7.88131 14.3677L7.90519 14.1281C7.94891 13.6895 8.286 13.2573 8.60575 13.0144L9.62453 12.2403L8.35082 12.1185C5.98307 11.8922 3.67416 10.6062 3.10848 7.67541C3.06871 7.32706 3.04548 6.96635 3.04548 6.58555C3.04548 5.7887 3.16901 5.2752 3.35558 4.86576C3.54368 4.45295 3.80563 4.11922 4.15828 3.66994C4.16686 3.65901 4.17549 3.64801 4.18418 3.63694L4.34073 3.43744L4.27226 3.19326C4.0242 2.30868 4.0703 1.57155 4.17423 1.0611C4.2175 0.848611 4.27084 0.675281 4.31733 0.547248C4.41801 0.556145 4.55033 0.575496 4.71388 0.615053C5.20004 0.73263 5.97092 1.03093 7.01135 1.77593L7.2405 1.94001L7.49953 1.82891C7.99132 1.61798 8.98408 1.4805 10.092 1.4613C11.1875 1.44231 12.2837 1.54052 12.9546 1.7369L13.1771 1.80204L13.3706 1.67423C13.8047 1.38753 14.4211 1.03967 15.0015 0.795051C15.2922 0.672541 15.5595 0.582067 15.7817 0.535148C15.8787 0.514683 15.9558 0.504987 16.0156 0.501534C16.1561 0.842055 16.3349 1.58695 16.0865 2.97405L16.0552 3.14926L16.1416 3.30488C16.1919 3.39559 16.2584 3.48216 16.3138 3.55172C16.3362 3.57988 16.3738 3.62593 16.4118 3.67246C16.4466 3.71501 16.4817 3.75797 16.5058 3.78803C16.6403 3.95578 16.7914 4.15722 16.9353 4.41367C17.219 4.91916 17.4934 5.67172 17.4963 6.82006C17.4849 7.37421 17.4405 7.86449 17.3703 8.30832C16.9676 10.8344 14.7439 11.8653 12.3627 12.1096L10.9206 12.2576L12.1473 13.0301C12.4934 13.2481 12.6821 13.466 12.8036 13.8017C12.938 14.1729 13.0005 14.7154 13.0005 15.61C13.0005 16.6921 12.9916 17.2225 12.9859 17.5644C12.9823 17.7808 12.98 17.9216 12.9819 18.0789L12.9819 18.0797C12.986 18.3719 13.0936 18.6128 13.2316 18.8054L3.52047 14.143M3.98133 13.9491L3.52047 14.143M3.98133 13.9491C3.98132 13.949 3.98132 13.949 3.98131 13.949L3.52047 14.143M3.98133 13.9491C4.10766 14.2492 4.2794 14.6038 4.58928 14.8876C4.88543 15.1589 5.34329 15.3973 6.10598 15.3973C6.43661 15.3973 6.71749 15.3777 6.91442 15.3584C7.01272 15.3487 7.08966 15.3391 7.14092 15.3321C7.16654 15.3286 7.1857 15.3258 7.19786 15.3239L7.21079 15.3219L7.21278 15.3216L7.29596 15.8146M3.52047 14.143C3.78557 14.7728 4.34314 15.8973 6.10598 15.8973C6.37137 15.8973 6.60661 15.8854 6.7964 15.8706L6.79613 15.8369L6.79602 15.8233L6.79599 15.8199L6.79598 15.819L6.79598 15.8188L6.79598 15.8188L7.29596 15.8146M7.29596 15.8146L7.79594 15.8105L7.79594 15.8105L7.79595 15.8107L7.79595 15.8116L7.79598 15.8151L7.79609 15.8287L7.79652 15.8807L7.79803 16.0712C7.79928 16.2316 7.80095 16.4519 7.80261 16.6918C7.80594 17.171 7.80929 17.7304 7.80929 18.0454C7.80929 18.3381 7.71303 18.5734 7.58473 18.7604C7.60227 18.7507 7.61968 18.7406 7.63692 18.7302C7.90804 18.5657 7.99175 18.4043 7.99175 18.2897C7.99175 17.991 7.99413 17.3413 7.9965 16.7238L7.99743 16.4817C7.99945 15.9576 8.00124 15.4963 8.00124 15.3454C8.00124 14.8678 8.13088 14.5201 8.28793 14.2803C8.36489 14.1628 8.44496 14.0764 8.51162 14.0161C8.54491 13.986 8.57486 13.9623 8.59947 13.9444C8.61179 13.9354 8.6228 13.9279 8.63226 13.9217L8.64527 13.9134L8.65087 13.9099L8.65342 13.9084L8.65464 13.9076L8.65524 13.9073C8.65553 13.9071 8.65582 13.9069 8.91121 14.3368M7.29596 15.8146L7.79594 15.8104L7.79107 15.224L7.21333 15.3215L7.21318 15.3215L7.21314 15.3215L7.21298 15.3215L7.21289 15.3215C7.21283 15.3216 7.21278 15.3216 7.29596 15.8146ZM7.29596 15.8146C7.37914 16.3076 7.37908 16.3076 7.37902 16.3076L7.37889 16.3077L7.3786 16.3077L7.37788 16.3078L7.37589 16.3082L7.36978 16.3092L7.3492 16.3124C7.33654 16.3143 7.32004 16.3168 7.29991 16.3196C7.30384 16.8449 7.30929 17.6452 7.30929 18.0454C7.30929 18.471 6.96998 18.7157 6.69228 18.916C6.67545 18.9282 6.65883 18.9401 6.64254 18.952C6.63972 18.954 6.63691 18.9561 6.63411 18.9581C6.63869 18.9605 6.64366 18.9633 6.64895 18.9665C6.674 18.9815 6.72114 19.0147 6.76328 19.0759C6.80942 19.1429 6.83715 19.226 6.83715 19.3136C6.83715 19.3871 6.81333 19.4378 6.79753 19.4628C6.79863 19.4628 6.7997 19.4628 6.8008 19.4629C6.80498 19.4589 6.81005 19.4544 6.8161 19.4491L12.134 15.6921C12.6328 15.6571 12.6328 15.657 12.6327 15.6569L12.6327 15.6567L12.6327 15.6562L12.6326 15.6548L12.6323 15.6506L12.6312 15.6369C12.6303 15.6254 12.6289 15.6093 12.627 15.5893C12.6232 15.5493 12.6174 15.4932 12.6089 15.4263C12.5921 15.294 12.5642 15.1123 12.5195 14.9262C12.4766 14.7474 12.4103 14.5299 12.3036 14.3458C12.2081 14.181 11.9896 13.8937 11.6019 13.8937H11.1019V14.3937V18.3437C11.1019 18.4925 11.1182 18.6286 11.1462 18.7531C11.1 18.6198 11.0656 18.4482 11.046 18.232C11.0171 17.9126 11.0249 17.5736 11.0329 17.2227C11.0353 17.1199 11.0377 17.0161 11.0392 16.9114L11.0392 16.9114C11.0451 16.4886 11.0471 15.8175 11.0476 15.2545C11.0478 14.9725 11.0477 14.7167 11.0475 14.5315L11.0472 14.3119L11.0471 14.2521L11.0471 14.2366L11.0471 14.2326L11.0471 14.2316L11.0471 14.2313V14.2312L10.7052 14.2319V14.2319L11.0471 14.2312L11.046 13.7213L10.5362 13.7324L10.1942 13.7398L9.68685 13.7509L9.70545 14.258L9.70546 14.2581L9.70547 14.2586L9.70555 14.2606L9.70584 14.2688L9.70697 14.3017L9.71102 14.4284C9.71436 14.5382 9.71878 14.6961 9.72307 14.888C9.73165 15.2722 9.73968 15.791 9.73757 16.3315C9.73544 16.8735 9.72313 17.4305 9.69182 17.8934C9.67614 18.1251 9.65614 18.3263 9.63168 18.4867C9.60546 18.6586 9.57957 18.7447 9.56782 18.7709L10.024 18.9755M10.024 18.9755C9.60004 19.9115 8.3218 20.2346 8.3218 19.807C8.3218 19.6827 8.38132 19.6295 8.46296 19.5566C8.56951 19.4614 8.71373 19.3326 8.81255 18.968M10.024 18.9755L9.56856 18.7692C9.50066 18.9191 9.39739 19.0506 9.2779 19.1593M10.024 18.9755C10.0537 18.9093 10.0795 18.8162 10.1019 18.7017M8.81255 18.968L9.29504 19.0992C9.29507 19.0991 9.2951 19.099 9.29513 19.0989C9.32763 18.9791 9.34542 18.8113 9.35799 18.651C9.37167 18.4767 9.38222 18.2643 9.39045 18.0311C9.40694 17.5639 9.41465 16.9964 9.41769 16.4499C9.42074 15.9026 9.41911 15.373 9.41672 14.9804C9.41553 14.784 9.41414 14.6218 9.41305 14.5085L9.41171 14.3773L9.41132 14.3427L9.41121 14.3338L9.41118 14.3315L9.41118 14.3309L9.41118 14.3307L8.91121 14.3368M8.81255 18.968C8.81553 18.9571 8.81843 18.9447 8.82125 18.931L8.81255 18.968ZM8.91121 14.3368L9.41117 14.3306L9.40053 13.4645L8.65582 13.9069L8.91121 14.3368ZM10.1019 18.7017C10.0774 18.5725 10.0612 18.4446 10.0501 18.3221C10.0155 17.9401 10.0253 17.5237 10.0337 17.1653C10.0359 17.0714 10.0381 16.9815 10.0393 16.8973L10.2313 16.9C10.218 17.6099 10.1818 18.2926 10.1019 18.7017ZM14.1027 18.9487C13.8267 18.7442 13.4874 18.4686 13.4819 18.0727L14.1027 18.9487Z"
        stroke="currentColor"
      />
    </svg>
  </Icon>
);