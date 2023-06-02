import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  useSystemColorMode: false,
  initialColorMode: "dark",
  styles: {
    global: {
      body: {
        bg: "#000000",
        color: "#ffffff",
      },
    },
  },
});
export default theme;
