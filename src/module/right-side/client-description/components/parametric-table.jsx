import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { style } from "../../style/style";
import sping from "../../../../image/spin.png";
import { Box } from "@mui/system";
import RoomIcon from "@mui/icons-material/Room";
const ParametricTable = () => {
  const arr = Array(9).fill("-");
  return (
    <Box>
      <Grid
        container
        columns={19}
        sx={{ p: 1, m: 0.3, placeItems: "center", textAlign: "center" }}
        rowGap={4}
      >
        {arr.map((element, index) => (
          <React.Fragment key={index}>
            <Grid item md={1}>
              <Stack sx={{ width: "100%" }}>
                <img
                  src={sping}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Typography sx={{ ...style.informationTableProperty }}>
                {"<<Email>>"}
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography sx={{ ...style.informationTableProperty }}>
                +44 000 00000
              </Typography>
            </Grid>
            <Grid item md={10}>
              <Stack sx={{ ...style.parametricInformationTypography }}>
                <RoomIcon sx={{ color: "#fa745c" }} />
                <Typography
                  sx={{
                    ...style.informationTableProperty,
                  }}
                >
                  {`<<Address>> Policy <<Number>> -00`}
                </Typography>
              </Stack>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default ParametricTable;
