import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#E7EBF8",
      100: "#D4DAF2",
      200: "#A5B2E4",
      300: "#798ED7",
      400: "#4E69CB",
      500: "#334EAC",
      600: "#293E8A",
      700: "#1E2E66",
      800: "#141E43",
      900: "#0A1023",
      950: "#050710",
    },
    background: "#fff9f0",
  },
  fontConfig: {
    Heading: {
      100: {
        normal: "Heading-Thin",
      },
      200: {
        normal: "Heading-Thin",
      },
      300: {
        normal: "Heading-Regular",
      },
      400: {
        normal: "Heading-Regular",
      },
      500: {
        normal: "Heading-Medium",
      },
      600: {
        normal: "Heading-Medium",
      },
      700: {
        normal: "Heading-Bold",
      },
      800: {
        normal: "Heading-Bold",
      },
      900: {
        normal: "Heading-Bold",
      },
    },
    Body: {
      100: {
        normal: "Body-Thin",
      },
      200: {
        normal: "Body-ExtraLight",
      },
      300: {
        normal: "Body-Light",
      },
      400: {
        normal: "Body-Regular",
      },
      500: {
        normal: "Body-Medium",
      },
      600: {
        normal: "Body-SemiBold",
      },
      700: {
        normal: "Body-Bold",
      },
      800: {
        normal: "Body-ExtraBold",
      },
      900: {
        normal: "Body-Black",
      },
    },
  },
  fonts: {
    heading: "Heading",
    body: "Body",
    mono: "Body",
  },
  components: {
    Text: {
      defaultProps: {
        fontFamily: "body",
        fontWeight: 400,
        color: "primary.800",
        fontSize: "md",
      },
    },
    Heading: {
      defaultProps: {
        color: "primary.500",
        size: "xl",
        fontFamily: "heading",
        fontWeight: 500,
      },
    },
    FormControl: {
      defaultProps: {
        important: {
          color: "primary.100",
        },
      },
    },
    FormControlLabel: {
      defaultProps: {
        _text: {
          fontSize: "xs",
          fontWeight: 400,
          lineSpacing: 16,
        },
        _astrick: {
          color: "gray.500",
          top: -2,
          fontWeight: 400,
        },
      },
    },
    Input: {
      baseStyle: {
        height: 45,
        borderRadius: 8,
      },
      defaultProps: {
        fontSize: "md",
        _focus: {
          bgColor: "gray.100",
          borderColor: "secondary.700",
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 8,
      },
      defaultProps: {
        _text: {
          fontSize: "md",
        },
        _disabled: {
          bgColor: "gray.400",
          color: "secondary.700",
        },
      },
      variants: {
        solid: {
          bgColor: "secondary.700",
        },
        outline: {
          bgColor: "transparent",
        },
        ghost: {
          bgColor: "transparent",
        },
      },
    },
    Link: {
      defaultProps: {
        _text: {
          textDecoration: "none",
          fontWeight: 700,
          color: "primary.700",
        },
      },
    },
    Checkbox: {
      defaultProps: {
        _light: {
          borderColor: "gray.300",
          borderWidth: 1.5,
          bgColor: "white",
        },
        _pressed: {
          borderColor: "gray.400",
        },
        _checked: {
          borderColor: "primary.700",
          borderWidth: 1.5,
          bgColor: "primary.700",
        },
        _text: {
          ml: 0,
        },
      },
    },
    Icon: {
      defaultProps: {
        size: "lg",
      },
    },
    Divider: {
      defaultProps: {
        bg: "gray.200",
      },
    },
    ModalContent: {
      baseStyle: {
        minHeight: 300,
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
        borderBottomRadius: 0,
        borderTopRadius: 30,
        width: "100%",
        maxWidth: "100%",
      },
      defaultProps: {
        pt: 2,
        safeAreaBottom: true,
        bgColor: "white",
      },
    },
    ModalHeader: {
      baseStyle: {
        borderBottomWidth: 0,
        backgroundColor: "transparent",
      },
      defaultProps: {
        _text: {
          pb: 2,
          color: "primary.700",
          fontWeight: 500,
          lineHeight: 28,
          fontSize: "xl",
          textAlign: "center",
        },
      },
    },
    ModalCloseButton: {
      baseStyle: {
        top: 6,
        right: 6,
        left: "auto",
      },
      defaultProps: {
        _icon: {
          color: "gray.500",
        },
      },
    },
    ModalBody: {
      baseStyle: {},
      defaultProps: {
        pt: 0,
        px: 6,
      },
    },
    Card: {
      baseStyle: {
        backgroundColor: "white",
        borderWidth: 0.5,
        borderColor: "gray.300",
        borderRadius: 8,
        shadow: 0,
        elevation: 0,
      },
    },
  },
});
