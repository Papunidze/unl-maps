import { Box, ThemeProvider } from "@mui/material";
import React from "react";
import ClientDescription from "../../module/right-side/client-description/client-description";
import { theme } from "../../theme/theme";

const DrawerRightSide = () => {
  return (
    <Box sx={{ marginTop: { md: "40%", xl: "25%" }, width: "100%" }}>
      <ThemeProvider theme={theme}>
        <ClientDescription />
      </ThemeProvider>
    </Box>
  );
};

export default DrawerRightSide;
