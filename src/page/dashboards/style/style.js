import { styled } from "@mui/material/styles";

export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export const style = {
  mainContainer: (property) => ({
    marginLeft: property.left && { md: "500px", xl: "650px" },
    marginRight: property.right && { md: "500px", xl: "650px" },
  }),
  closeBtn: (side) => ({
    position: "absolute",
    padding: "1.3rem 0",
    zIndex: 1,
    top: "50%",
    borderRadius: 0,
    background: "#F3F6F8",
    fontSize: "large",
    ...(side === "left" && {
      borderBottomRightRadius: "10px",
      borderTopRightRadius: "10px",
      left: 2,
    }),
    ...(side === "right" && {
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
      right: 2,
    }),
    "&:hover": {
      background: "#dcdedc",
    },
  }),
};
