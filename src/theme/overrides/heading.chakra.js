import { TTMonoBold, TTRegBold } from "../utils/fonts";

export default {
  baseStyle: {
    fontFamily: TTRegBold,
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
