import { Box, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PinDropIcon from "@mui/icons-material/PinDrop";
import { Stack, ThemeProvider } from "@mui/system";
import { theme } from "../theme/theme";
import { style } from "./style/style";
const Footer = ({ data }) => {
  return (
    <Box sx={{ ...style.footerContainer }}>
      <ThemeProvider theme={theme}>
        {data?.features?.[0]?.properties.postal_address?.[0].state_district && (
          <Paper sx={{ padding: "0.7rem 1rem", borderRadius: 5 }} elevation={3}>
            <Stack sx={{ flexDirection: "row", gap: 2 }}>
              <Stack sx={{ ...style.footerComponentContainer }}>
                <PinDropIcon sx={{ fontSize: "xx-large" }} />
                <Typography sx={{ fontWeight: "400", fontSize: "large" }}>
                  &nbsp;&nbsp;&nbsp;
                  {
                    data?.features?.[0]?.properties.postal_address?.[0]
                      .state_district
                  }
                </Typography>
              </Stack>
              <Stack sx={{ ...style.footerComponentContainer }}>
                <LocationOnIcon sx={{ fontSize: "xx-large" }} />
                <Typography sx={{ fontWeight: "400", fontSize: "large" }}>
                  &nbsp;&nbsp;&nbsp;
                  {data?.features?.[0]?.geometry.coordinates[0]},
                  &nbsp;&nbsp;&nbsp;
                  {data?.features?.[0]?.geometry.coordinates[1]}
                </Typography>
              </Stack>
              {console.log(data?.features?.[0]?.geometry.coordinates[0])}
              <Stack
                sx={{
                  mt: 2,
                  alignItems: "center",
                  textAlign: "center",
                  gap: 0.2,
                }}
              >
                <Stack
                  flexDirection={"row"}
                  sx={{ alignItems: "center", textAlign: "center", gap: 1.5 }}
                >
                  <TextField
                    size="small"
                    sx={{ ...style.textFieldsStyle }}
                    placeholder="48 x 48"
                  />
                  <TextField
                    size="small"
                    defaultValue={"5000m"}
                    sx={{ ...style.textFieldsStyle }}
                  />
                </Stack>
                <Typography fontSize={"small"}>
                  © Here Maps 2022 © Google Maps
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        )}
      </ThemeProvider>
    </Box>
  );
};

export default Footer;
