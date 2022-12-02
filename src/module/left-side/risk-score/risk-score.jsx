import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import RiskScoreRage from "./components/risk-score-rage";
import carImg from "../../../image/vechail.png";
import { style } from "../style/style";
const RiskScore = ({ value }) => {
  //formula = value * 10 + ((value - 1) * 10)
  return (
    <Box sx={{ mt: 2 }}>
      <RiskScoreRage />
      <Stack sx={{ ...style.riskScoreVehCont }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Type Of Vehicle: Moto Car
        </Typography>
        <Stack sx={{ ...style.riskScoreVehileInormationContainer }}>
          <Typography sx={{ ...style.riskScoreVehileInforamtionText }}>
            {"(Weight Not > 3000 kg & not > 7 passengers)"}
          </Typography>
          <img
            src={carImg}
            alt="vechail"
            style={{ width: "70px", transform: "translateY(-35px)" }}
          />
        </Stack>
      </Stack>
      {Array(4)
        .fill("-")
        .map((element, index) => (
          <Stack sx={{ ...style.riskScoreMap }} key={index}>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </Typography>
            <Stack sx={{ width: "100%", alignItems: "flex-end" }}>
              <Button variant="contained">Map View</Button>
            </Stack>
          </Stack>
        ))}
    </Box>
  );
};

export default RiskScore;
