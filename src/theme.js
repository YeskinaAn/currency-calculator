import { createTheme } from "@mui/material";

const baseTextColor = "#101828";
const primaryColor = "#142241";
const secondaryColor = "#E9B109";
const baseBorderColor = "#646F793D";
const baseFontSize = 14;

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 2,
          fontSize: baseFontSize,
          "&:hover": {
            color: secondaryColor,
          },
        },
      },
      variants: [
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: "#00336629",
          },
        },
      ],
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: secondaryColor,
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
          "& .MuiMenuItem-root:hover": {
            backgroundColor: "#273554",
            color: secondaryColor,
            borderRight: "2px solid #E9B109",
          },
          "& .MuiMenuItem-root.Mui-selected": {
            backgroundColor: "#273554",
          },
          "& .MuiMenuItem.Mui-selected": {
            backgroundColor: "#273554",
          },
          "& .MuiMenuItem-root.Mui-selected:hover": {
            backgroundColor: "#273554",
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          PaperProps: {
            style: {
              backgroundColor: "#142241",
              color: "white",
            },
          },
        },
      },
      styleOverrides: {
        root: {
          backgroundColor: primaryColor,
          "& .MuiSelect-select": {
            backgroundColor: primaryColor,
            color: "#ffffff",
            display: "flex",
          },
          "& .MuiSelect-icon": {
            color: "#ffffff",
          },
        },
        iconFilled: {
          color: "#ffffff",
        },
      },
    },
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          border: `1px solid ${baseBorderColor}`,
          backgroundColor: "#ffffff",
          borderRadius: 4,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& legend": { display: "none" },
          "& fieldset": { top: 0 },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            padding: "8px 14px",
            backgroundColor: "#ffffff",
          },
          "label + &": {
            marginTop: 24,
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: baseFontSize,
          color: baseTextColor,
          transform: "unset !important",
        },
      },
    },
  },
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  typography: {
    fontFamily: ["Catamaran", "sans-serif"].join(","),
    fontSize: baseFontSize,
  },
});

export default theme;
