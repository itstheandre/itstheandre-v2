export default {
  baseStyle: {
    cursor: "pointer",
    px: 2,
    pb: 1,
    pt: "5px",
    borderRadius: "6px",
    letterSpacing: "0.1em",
    boxShadow: "none",
  },
  variants: {
    selected: {
      color: "white",
      bg: "brand.main",
      boxShadow: "none",
      px: 2,
      pb: 1,
      pt: "5px",
    },
    unselected: {
      bg: "none",
      color: "brand.main",
      border: "1px solid",
      outline: "none",
      boxShadow: "none",
      px: 2,
      pb: 1,
      pt: "5px",
    },
  },
  defaultProps: {
    variant: "unselected",
  },
};
