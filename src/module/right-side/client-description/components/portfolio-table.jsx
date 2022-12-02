import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { clientPortfelio } from "../../../../util/contructors";
import { style } from "../../style/style";

const PortfolioTable = () => {
  return (
    <Box>
      <Grid
        columns={24}
        container
        sx={{
          p: "2px 8px",
          textAlign: "center",
          placeItems: "center",
          bgcolor: "#DDDDDD",
        }}
        columnSpacing={2.5}
      >
        <Grid item md={5}>
          <Typography sx={{ ...style.informationTableHeader }}>
            Police Type
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography sx={{ ...style.informationTableHeader }}>
            Location
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Typography sx={{ ...style.informationTableHeader }}>
            Police Count
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography sx={{ ...style.informationTableHeader }}>
            Insured Amount
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Typography sx={{ ...style.informationTableHeader }}>
            Duration
          </Typography>
        </Grid>
        <Grid item md={5}>
          <Stack sx={{ alignItems: "center", textAlign: "center" }}>
            <Typography sx={{ ...style.informationTableHeader }}>
              Avarge
            </Typography>
            <Typography sx={{ ...style.informationTableHeader }}>
              Risk Grade
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        columns={24}
        container
        sx={{ p: "2px 8px", placeItems: "center", textAlign: "center" }}
        columnSpacing={2.5}
        rowSpacing={2}
      >
        {clientPortfelio.map((element, index) => (
          <React.Fragment key={index}>
            <Grid item md={5}>
              <Typography sx={{ ...style.informationTableProperty }}>
                {element.policeType}
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography
                sx={{ ...style.informationTableProperty, fontWeight: "bold" }}
              >
                {element.location}
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography sx={{ ...style.informationTableProperty }}>
                {element.policyCount}
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography sx={{ ...style.informationTableProperty }}>
                {element.insuredAmount}
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography sx={{ ...style.informationTableProperty }}>
                {element.duration}
              </Typography>
            </Grid>
            <Grid item md={5}>
              <Typography
                sx={{ ...style.informationTableProperty, paddingLeft: 1 }}
              >
                {element.avargeRiskGrade}
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioTable;
