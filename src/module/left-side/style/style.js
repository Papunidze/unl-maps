import styled from "@emotion/styled";
import { Slider } from "@mui/material";

export const style = {
  //information
  InformationMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  InformationArrowBtn: {
    color: "#4d81a1",
    fontSize: "x-large",
  },
  lostItemsMainContainer: {
    width: "100%",
    bgcolor: "background.paper",
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerTitleText: {
    fontSize: { md: "18px", xl: "22px" },
    color: "black",
    float: "left",
    fontWeight: "600",
    fontFamily: "Segoe UI Symbol",
  },
  listTitleCont: {
    alignItems: "center",
    flexDirection: "row",
  },
  listTitle: {
    fontWeight: "500",
    fontSize: { md: "15px", xl: "18px" },
  },
  listIcon: (show) => ({
    color: "#BEBDBD",
    display: show && "none",
    fontSize: { md: "large", xl: "x-large" },
    fontWeight: "bold",
  }),
  propertyContainer: (disabled, border, empty) => ({
    placeItems: "center",
    padding: "0 0.5rem",
    height: "20px",
    transform: "translateY(-2px)",
    display: disabled && "none",
    borderLeft: border && !empty && "1.5px dashed #BEBDBD",
  }),
  listProperties: (disabled) => ({
    color: disabled ? "#BEBDBD" : "black",
    fontWeight: "400",
    transformTranslateY: "-10px",
    fontSize: { md: "small", xl: "medium" },
  }),
  iconBtn: (icon) => ({
    height: "20px",
    borderLeft: "1.5px solid #BEBDBD",
    borderRadius: 0,
    display: icon ? "block" : "none",
  }),
  mapIcon: {
    fontSize: {
      md: "large",
      xl: "x-large",
    },
    transform: "translateY(-10px)",
  },
  radioContainer: {
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  radioProperty: {
    display: "flex",
    gap: 1,
    padding: 1,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "flex-start",
    width: "50%",
    float: "left",
  },
  propretyText: {
    display: "flex",
    gap: 1,
    marginTop: 0.2,
    fontSize: { md: "small", xl: "large" },
  },
  tabListActive: {
    background: "#e3e3e3",
    "& button": {
      fontFamily: "Segoe UI Symbol",
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#F7961D",
    },
  },
  tabsContainer: {
    background: "#f7f5f5",
    boxShadow: "RGBA(0,0,0,0.35) 0px 5px 15px",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderLeft: { md: "5px solid #F7961D", xl: "10px solid #F7961D" },
    minHeight: "95vh",
    maxHeight: "95vh",
    width: "100%",
    padding: "0.5rem",
    overflowY: "auto",
    overflowX: "hidden",
    paddingBottom: "8rem",
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
      transform: "translateX(-23%)",
    }),
    ...(value === "3" && {
      zIndex: 1,
      transform: "translateX(-40%)",
      background: "#3F6A9A",
    }),
  }),
  geoDataPropertyContainer: {
    width: "100%",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 2,
    padding: "0.2rem 0.5rem",
    "&:hover": {
      background: "#e0e0e0",
    },
  },
  geoDataFlexContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 0.5,
  },
  riskScoreMainContainer: {
    flexDirection: "row",
    gap: 1,
    width: "100%",
  },
  riskScoreDescription: {
    alignItems: "center",
    textAlign: "center",
    width: "50%",
  },
  riskScoreDescriptionTitle: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
  },
  dragIcon: {
    fontSize: "x-large",
    color: "gray",
  },
  riskScoreRangeContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 0.5,
    alignItems: "center",
    textAlign: "center",
    position: "relative",
  },
  riskScoreRangeBox: {
    position: "absolute",
    width: "100%",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  riskScoreRangePropertyBox: {
    width: "20%",
    textAlign: "center",
    p: 0,
    background: "#039e2d",
  },
  riskScoreValueTextContainer: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  riskScoreVehCont: {
    width: "100%",
    p: 1,
    m: 2,
    gap: 0.5,
  },
  riskScoreVehileInormationContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
  },
  riskScoreVehileInforamtionText: {
    maxWidth: "180px",
    fontSize: "small",
    color: "#9ea0a3",
    fontWeight: "350",
    transform: "translateY(-15px)",
  },
  riskScoreMap: {
    width: "100%",
    p: "0.5rem 3rem",
    gap: 1,
  },
};
export const CostumeSlider = styled(Slider)({
  color: "transparent",
  "& .MuiSlider-thumb": {
    borderRadius: 0,
    border: "1.5px solid black",
    height: "30px",
    width: "30px",
    borderBottom: "2.5px dashed black",
  },
  "& 	.Mui-disabled": {
    color: "transparent",
  },
  "& .MuiSlider-rail": {
    background: "transparent",
  },
  "& .MuiSlider-track": {
    background: "transparent",
    border: "none",
  },
});
