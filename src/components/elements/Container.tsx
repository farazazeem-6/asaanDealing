import { styled } from "@/theme";
import { Box } from "./Box";

export const Container = styled(Box, {
  flexShrink: 0,
  marginLeft: "auto",
  marginRight: "auto",

  variants: {
    size: {
      xs: {
        maxWidth: "$breakpoints$xs",
      },
      sm: {
        maxWidth: "$breakpoints$sm",
      },
      md: {
        maxWidth: "$breakpoints$md",
      },
      lg: {
        maxWidth: "$breakpoints$lg",
      },
    },
  },
  defaultVariants: {
    size: "fluid",
  },
});
