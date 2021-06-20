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
      },
      ".instructionsContent p, ul": {
        margin: '1.5rem 0',
      },
      ".instructionsContent p.block-img img": {
        maxWidth: '90%',
        margin: '0 auto',
      },
      ".instructionsContent ul": {
        paddingLeft: '1.5rem',
      },
      ".instructionsContent ul li": {
        margin: '0.5rem 0',
      },
    }),
  },
};

export const theme = extendTheme({ ...config });

