import {
  Avatar,
  Box,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import logo from "../image/Logo-InsrTech-black.png";
import { style } from "./style/style";
import LoopIcon from "@mui/icons-material/Loop";
import TuneIcon from "@mui/icons-material/Tune";
import { theme } from "../theme/theme";
import egon from "../image/egon.jpeg";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [togleMenu, setTogleMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <Stack sx={{ ...style.header(togleMenu) }}>
      <ThemeProvider theme={theme}>
        <img
          src={logo}
          alt="logo"
          style={{ width: "100px", padding: "1rem", marginTop: "15px" }}
        />
        <Box sx={{ ...style.headerPropertyMainContainer }}>
          <Box sx={{ ...style.headerPropertyContainer }}>
            <IconButton
              sx={{ width: "fit-content" }}
              onClick={() => location.reload()}
            >
              <LoopIcon sx={{ ...style.headerCostumeBtn }} />
            </IconButton>
            <IconButton
              sx={{ borderRadius: 1 }}
              onClick={() => setTogleMenu((prev) => !prev)}
            >
              <TuneIcon sx={{ fontSize: "xx-large", color: "white" }} />
            </IconButton>
            {togleMenu && (
              <Box
                sx={{
                  display: { md: "none", xl: "grid" },
                  gridTemplateColumns: "repeat(3, 1fr)",
                  transition: "all 1s ease",
                }}
              >
                <Stack sx={{ ...style.personInformationContainer }}>
                  <Box sx={{ ...style.circle("gray", "#43c91a") }} />
                  <Typography sx={{ ...style.headerPropsText }}>
                    Risk Engine
                  </Typography>
                </Stack>
                <Stack sx={{ ...style.personInformationContainer }}>
                  <Box sx={{ ...style.circle("gray", "#43c91a") }} />
                  <Typography sx={{ ...style.headerPropsText }}>
                    Web Service
                  </Typography>
                </Stack>
                <Stack sx={{ ...style.personInformationContainer }}>
                  <Box sx={{ ...style.circle("gray", "#fcba03") }} />
                  <Typography sx={{ ...style.headerPropsText }}>
                    Maps:
                  </Typography>
                  <Typography
                    fontWeight={"bold"}
                    sx={{ ...style.headerPropsText }}
                  >
                    NLD Map Q3-2022
                  </Typography>
                </Stack>
                <Stack sx={{ ...style.personInformationContainer }}>
                  <Box sx={{ ...style.circle("red", "gray") }} />
                  <Typography sx={{ ...style.headerPropsText }}>
                    inrernal service
                  </Typography>
                </Stack>
                <Stack sx={{ ...style.personInformationContainer }}>
                  <Box sx={{ ...style.circle("gray", "#43c91a") }} />
                  <Typography sx={{ ...style.headerPropsText }}>
                    Database Synch
                  </Typography>
                </Stack>
                <Stack sx={{ ...style.personInformationContainer }}>
                  <Box sx={{ ...style.circle("gray", "#fcba03") }} />
                  <Typography sx={{ ...style.headerPropsText }}>
                    Product:{" "}
                  </Typography>
                  <Typography
                    fontWeight={"bold"}
                    sx={{ ...style.headerPropsText }}
                  >
                    Home INsurance
                  </Typography>
                </Stack>
              </Box>
            )}
            <Stack sx={{ ...style.exitContainer }}>
              <IconButton onClick={() => navigate("/")}>
                <LogoutIcon sx={{ ...style.headerCostumeBtn }} />
              </IconButton>
              <Stack sx={{ textAlign: "start" }}>
                <Typography sx={{ ...style.headerPropsText }}>
                  Ms.C@Aegon.com
                </Typography>
                <Typography sx={{ ...style.headerPropsText }}>
                  [User_3] Portfolio Report [Flood]
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box sx={{ ...style.headerProfileContainer }}>
            <Stack sx={{ alignItems: "start", textAlign: "start" }}>
              <img
                src={egon}
                alt=""
                style={{
                  width: "70px",
                  borderRadius: "15px",
                  transform: "translateX(-5px)",
                }}
              />
              <Typography fontWeight={"bold"} sx={{ ...style.headerPropsText }}>
                Ms.C
              </Typography>
              <Typography sx={{ ...style.headerPropsText }}>
                Staff @ AEGON
              </Typography>
            </Stack>
            <Stack sx={{ alignItems: "center", textAlign: "center" }}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 46, height: 46 }}
              />
            </Stack>
          </Box>
        </Box>
        {togleMenu && (
          <Stack sx={{ ...style.responsiveComponent }}>
            <Box
              sx={{
                display: { xl: "none", md: "flex" },
                alignItems: "center",
                gap: 1,
                transition: "all 1s ease",
              }}
            >
              <Stack sx={{ ...style.personInformationContainer }}>
                <Box sx={{ ...style.circle("gray", "#43c91a") }} />
                <Typography sx={{ ...style.headerPropsText }}>
                  Risk Engine
                </Typography>
              </Stack>
              <Stack sx={{ ...style.personInformationContainer }}>
                <Box sx={{ ...style.circle("gray", "#43c91a") }} />
                <Typography sx={{ ...style.headerPropsText }}>
                  Web Service
                </Typography>
              </Stack>
              <Stack sx={{ ...style.personInformationContainer }}>
                <Box sx={{ ...style.circle("gray", "#fcba03") }} />
                <Typography sx={{ ...style.headerPropsText }}>Maps:</Typography>
                <Typography
                  fontWeight={"bold"}
                  sx={{ ...style.headerPropsText }}
                >
                  NLD Map Q3-2022
                </Typography>
              </Stack>
              <Stack sx={{ ...style.personInformationContainer }}>
                <Box sx={{ ...style.circle("red", "gray") }} />
                <Typography sx={{ ...style.headerPropsText }}>
                  inrernal service
                </Typography>
              </Stack>
              <Stack sx={{ ...style.personInformationContainer }}>
                <Box sx={{ ...style.circle("gray", "#43c91a") }} />
                <Typography sx={{ ...style.headerPropsText }}>
                  Database Synch
                </Typography>
              </Stack>
              <Stack sx={{ ...style.personInformationContainer }}>
                <Box sx={{ ...style.circle("gray", "#fcba03") }} />
                <Typography sx={{ ...style.headerPropsText }}>
                  Product:{" "}
                </Typography>
                <Typography
                  fontWeight={"bold"}
                  sx={{ ...style.headerPropsText }}
                >
                  Home INsurance
                </Typography>
              </Stack>
            </Box>
          </Stack>
        )}
      </ThemeProvider>
    </Stack>
  );
};

export default Header;
