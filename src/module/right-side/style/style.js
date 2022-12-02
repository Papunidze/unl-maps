export const style = {
  tabListActive: {
    flexDirection: "row-reverse",
    "& button": {
      fontFamily: "Segoe UI Symbol",
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#F7961D",
      flexDirection: "row-reverse",
    },
    "& 	.MuiTabs-flexContainer": {
      flexDirection: "row-reverse",
    },
  },

  tabsContainer: {
    background: "#f7f5f5",
    boxShadow: "rgba(0,0,0,0.35) 0px 5px 2px",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width: "100%",
    maxHeight: "calc(40vh / 3)",
    height: "100%",
    padding: "0.5rem",
    overflowY: "auto",
    overflowX: "hidden",
    paddingBottom: "1rem",
  },

  tabsLayout: (value) => ({
    color: "white",
    borderTopLeftRadius: "20px 25px",
    borderTopRightRadius: "20px 25px",
    fontSize: "small",
    fontWeight: "bold",
    background: "#233975",
    zIndex: 3,
    ...(value === "2" && {
      background: "#2B5380",
      zIndex: 2,
      transform: "translateX(+23%)",
    }),
    ...(value === "3" && {
      zIndex: 1,
      transform: "translateX(+40%)",
      background: "#3F6A9A",
    }),
  }),

  mainClientContainer: {
    width: "100%",
    alignItems: "center",
    overflowY: "auto",
    minHeight: "95vh",
    maxHeight: "95vh",
    overflowX: "hidden",
    gap: 2.5,
    paddingBottom: "6rem",
  },
  maincContainerChildren: {
    width: "100%",
    maxHeight: "calc(95vh / 3)",
  },
  tableContainer: {
    borderRight: { md: "5px solid #F7961D", xl: "10px solid #F7961D" },
    p: 1.5,
  },
  informationTableHeader: {
    color: "#a3bcc7",
    fontWeight: "700",
    transformTranslateY: "-10px",
    fontSize: { md: "small", xl: "medium" },
  },
  informationTableProperty: {
    color: "#878484",
    fontWeight: "300",
    transformTranslateY: "-10px",
    fontSize: { md: "small", xl: "medium" },
  },
  parametricInformationTypography: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: 0.5,
    borderLeft: "0.1px dashed gray",
  },
};
