import { TTMonoBold, TTRegBold } from "../utils/fonts";

export default {
  baseStyle: {
    fontFamily: TTRegBold,
    fontWeight: 500,
  },
  variants: {
    main: {
      fontFamily: TTRegBold,
    },
    mono: {
      fontFamily: TTMonoBold,
    },
  },
  defaultProps: {
    variant: "main",
  },
};
