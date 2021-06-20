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
      "900": "#4997de",
      "800": "#4997de",
      "200": "#4997de",
    },
    gray: {
      "400": "#969CB2",
      "500": "#626B90",
    },
    red: {
      "500": "#834849"
    }
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

