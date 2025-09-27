import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    greenLight: string;
    greenSecondary: string;
    skyLight: string;
    borderGray: string;
  }
  interface PaletteOptions {
    greenLight: string;
    greenSecondary: string;
    skyLight: string;
    borderGray: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#00422E",
      light: "#337458",
      dark: "#001b12",
    },
    success: {
      main: "#1AAF06",
      light: "#4CAF50",
      dark: "#2E7D32",
    },
    error: {
      main: "#FF4D4F",
      light: "#FF7875",
      dark: "#D32F2F",
    },
    background: {
      default: "#F6F6F6",
      paper: "#F6F6F6",
    },
    text: {
      primary: "#1E1E1E",
      secondary: "#454545",
      disabled: "#E4A200",
      
    },
    greenLight: "#337458",
    greenSecondary: "#001b12",
    skyLight: "#DBEFF9",
    borderGray: "#CACACA",
  },
  typography: {
    fontFamily: '"Heebo", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
        },
        contained: {
          backgroundColor: "#00422E",
          "&:hover": {
            backgroundColor: "#001b12",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "rgba(217, 217, 217, 0.10)",
            "& fieldset": {
              borderColor: "#CACACA",
            },
            "&:hover fieldset": {
              borderColor: "#00422E",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#00422E",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
      },
    },
  },
});

export default theme;
