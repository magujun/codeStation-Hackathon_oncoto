import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  colors: {
    black: {
      "450": "#312E38"
    },
    white: {
      "200": "#F3F3F3",
    },
    blue: {
      "900": "#3A50A9",
      "800": "#3A50A9",
      "200": "#3A50A9",
    },
    gray: {
      "400": "#969CB2",
      "500": "#626B90",
    },
  },
  styles: {
    fonts: {
      heading: "Raleway",
      body: "Raleway",
    },
    global: (props) => ({
      "html, body": {
        color: props.colorMode === "dark" ? "white.200" : "black.450",
        backgroundColor: props.colorMode === "dark" ? "black.450" : "white.200",
      },
      a: {
        color: props.colorMode === "dark" ? "white.200" : "black.450",
      },
      ".mask": {
        webkitMaskImage: 'url("/avatarMask.svg")',
        maskImage: 'url("/avatarMask.svg")',
      }
    }),
  },
};

export const theme = extendTheme({ ...config });

