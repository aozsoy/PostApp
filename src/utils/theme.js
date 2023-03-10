import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "375px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
};

export const theme = extendTheme({
  breakpoints,
  colors: {
    whiteColor: "#FFFFFF",
    blackColor: "#000000",
    grayColor: "	#EEEEEE",
    redColor: "#F44336",
  },
});
