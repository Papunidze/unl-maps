import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Main, style } from "./style/style";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AppDrawer from "../../cmd-global/appDrawer";
import DrawerLeftSide from "../app-drawer-left-side";
import Header from "../../layout/app-header";
import DrawerRightSide from "../app-drawer-right-side";
import Map from "../../cmd-global/map";
import "./style/newstyle.css";
import Footer from "../../layout/app-footer";

const DashBoards = () => {
  const [drawerProperty, setDrawerProperty] = useState({
    left: false,
    right: false,
  });
  const [data, setData] = useState({
    lng: -5.10588496874945,
    lat: 53.05880741028142,
  });
  const handleClick = (side) => {
    const property = { ...drawerProperty };
    property[`${side}`] = true;
    setDrawerProperty(property);
  };

  // const [data, setData] = useState({
  //   lng: -5.10588496874945,
  //   lat: 53.05880741028142,
  // });

  const handleClicks = (point) => {
    fetch(
      `https://api.unl.global/v2/geocode/reverse?location={"Point":[${point.lng}, ${point.lat}]}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-unl-api-key": "zkXmSvu61bOVJHkybWqJfOqOMRl2lhEl",
          "x-unl-vpm-id": "e43daa6c-820d-4772-91e5-f99bebc35930",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };
  return (
    <Box>
      <Header />
      <IconButton
        sx={{ ...style.closeBtn("right") }}
        onClick={() => handleClick("right")}
      >
        <ArrowLeftIcon />
      </IconButton>
      <IconButton
        sx={{ ...style.closeBtn("left") }}
        onClick={() => handleClick("left")}
      >
        <ArrowRightIcon />
      </IconButton>
      <AppDrawer
        drawerProperty={drawerProperty}
        setDrawerProperty={setDrawerProperty}
        side={"left"}
        component={<DrawerLeftSide data={data} />}
      />
      <AppDrawer
        drawerProperty={drawerProperty}
        setDrawerProperty={setDrawerProperty}
        side={"right"}
        component={<DrawerRightSide />}
      />
      <Main sx={{ ...style.mainContainer(drawerProperty) }}>
        <Map onClick={handleClicks} left={drawerProperty.left} />
      </Main>
      <Footer data={data} />
    </Box>
  );
};

export default DashBoards;
