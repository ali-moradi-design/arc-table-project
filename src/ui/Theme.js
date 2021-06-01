import { createMuiTheme } from "@material-ui/core/styles";

const arecRed = "#8f1946";
const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arecRed,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      color: "white",
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    fuckingbad: {
      fontFamily: "Raleway",
      fontSize: "2.5rem",
      textTransform: "none",
      color: "#0c3d0c",
      backgroundColor: "#fff",
    },
    h1: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: "#000",
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: arecRed,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: arcBlue,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem",
    },
    body1: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcGrey,
    },
    learnButton: {
      borderColor: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      color: arcBlue,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiTableCell: {
      head: {
        fontSize: "1rem",
        fontWeight: 700,
        color: arecRed,
        borderColor: arecRed,
        borderWidth: 3,
        textAlign: "center",
      },
      body: {
        color: arcGrey,
        borderColor: arcOrange,
        borderWidth: 2,
        textAlign: "center",
      },
    },
    MuiTableSortLabel: {
      root: {
        "&:hover": {
          color: arcOrange,
        },
        "&.MuiTableSortLabel-active": {
          color: arcOrange,
        },
      },
      icon: {
        fill: arcOrange,
      },
    },
    MuiSvgIcon: {
      root: {
        "&.MuiSelect-icon": {
          fill: arcOrange,
        },
      },
    },
    MuiFormControlLabel: {
      label: {
        color: arecRed,
        fontWeight: 700,
      },
      labelPlacementStart: {
        marginLeft: 0,
      },
    },
    MuiInputLabel: {
      root: {
        color: arecRed,
        fontSize: "1rem",
      },
    },

    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arecRed}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcOrange}`,
        },
      },
    },
  },
});
