import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TabsLayout from "../../module/left-side/tabs/tabs";
import { theme } from "../../theme/theme";

const DrawerLeftSide = ({ data }) => {
  return (
    <Box sx={{ marginTop: { md: "50%", xl: "30%" }, width: "100%" }}>
      <ThemeProvider theme={theme}>
        <TabsLayout data={data} />
      </ThemeProvider>
    </Box>
  );
};

export default DrawerLeftSide;
