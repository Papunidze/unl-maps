import { Drawer, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { DrawerHeader, style } from "./style/style";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const AppDrawer = ({ drawerProperty, setDrawerProperty, side, component }) => {
  const handleClose = () => {
    const property = { ...drawerProperty };
    property[`${side}`] = false;
    setDrawerProperty(property);
  };
  return (
    <Box>
      <Drawer
        sx={{ ...style.drawerContainer }}
        variant="persistent"
        anchor={side}
        open={drawerProperty[`${side}`]}
      >
        <Box sx={{ ...style.closeBtnContanir(side) }}>
          <IconButton sx={{ ...style.closeBtn(side) }} onClick={handleClose}>
            {side === "left" ? <ArrowLeftIcon /> : <ArrowRightIcon />}
          </IconButton>
        </Box>
        <DrawerHeader>{component}</DrawerHeader>
      </Drawer>
    </Box>
  );
};

export default AppDrawer;
