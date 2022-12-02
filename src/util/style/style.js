export const style = {
  searchMainPaper: {
    width: "100%",
    p: 2,
    display: "flex",
    borderColor: "#dbd7d7",
  },
  searchContaine: {
    width: "100%",
    justifyContent: "space-between",
    padding: 0.5,
    border: "2px solid #dbd7d7",
    flexDirection: "row",
    borderRadius: 2,
  },
  filternIcon: {
    color: "transparent",
    fontSize: "x-large",
  },
  categoryTextContainer: {
    p: 1,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  filtrTypohraphy: {
    fontWeight: "550",
    fontSize: 14,
  },
  selectFaildBox: {
    borderLeft: "2px dashed gray",
    p: "0 0.5rem",
    ml: 3,
  },
  filtSelectMainContainer: {
    width: "100",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    pt: 1,
  },
  filterSelect: {
    boxShadow: "none",
    background: "#e0e0e0",
    ".MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
    ".MuiSelect-icon": {
      color: "#4d81a1",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(228, 219, 233, 0.25)",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(228, 219, 233, 0.25)",
    },
  },
  selectOptionBtn: {
    width: "fit-content",
    fontSize: "large",
    borderRadius: "2px",
    color: "black",
  },
  filterTextfieldContainer: {
    ml: 9,
    textAlign: "center",
    alignItems: "center",
    mt: 2,
  },
  filterTextfield: {
    background: "#e0e0e0",
    border: 0,
    "& .MuiInput-underline:after": {
      borderBottomColor: "transparent",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
    },
  },
  filtrerOptions: {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    gap: 1,
  },
};
