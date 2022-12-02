import { styled } from "@mui/material/styles";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export const style = {
  drawerContainer: {
    width: { md: 510, xl: 650 },
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      zIndex: 1,
      p: 0.5,
      background: "whitesmoke",
      boxShadow: "none",
      border: "none",
      overflow: "hidden",
      width: { md: 510, xl: 650 },
      boxSizing: "border-box",
    },
  },
  closeBtnContanir: (side) => ({
    width: "fit-content",
    position: "fixed",
    top: "50%",
    left: side === "left" && { md: 510, xl: 650 },
    right: side === "right" && { md: 510, xl: 650 },
  }),
  closeBtn: (side) => ({
    padding: "1.3rem 0",
    zIndex: 1,
    borderRadius: 0,
    background: "#F3F6F8",
    fontSize: "large",
    ...(side === "left" && {
      borderBottomRightRadius: "10px",
      borderTopRightRadius: "10px",
    }),
    ...(side === "right" && {
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
    }),
    "&:hover": {
      background: "#dcdedc",
    },
  }),
};
