import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { clientInf } from "../../../../util/contructors";
import { style } from "../../style/style";

const InformationTable = () => {
  return (
    <Box>
      <Grid
        columns={16}
        container
        sx={{ p: "16px 8px", m: 0.3, background: "#DDDDDD" }}
        columnSpacing={4}
      >
        <Grid item md={4}>
          <Typography sx={{ ...style.informationTableHeader }}>
            Name [A-Z]
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Typography sx={{ ...style.informationTableHeader }}>
            Location
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Typography sx={{ ...style.informationTableHeader }}>
            Value
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Typography sx={{ ...style.informationTableHeader }}>
            Policy
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Typography sx={{ ...style.informationTableHeader }}>Age</Typography>
        </Grid>
      </Grid>
      <Grid
        columns={16}
        container
        sx={{ p: "0 8px", m: 0.3 }}
        columnSpacing={4}
        rowSpacing={2}
      >
        {clientInf.map((element, index) => (
          <React.Fragment key={index}>
            <Grid item md={4}>
              <Typography sx={{ ...style.informationTableProperty }}>
                {element.name}
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography
                sx={{ ...style.informationTableProperty, fontWeight: "bold" }}
              >
                {element.location}
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography sx={{ ...style.informationTableProperty }}>
                {element.value}
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography sx={{ ...style.informationTableProperty }}>
                {element.police}
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography sx={{ ...style.informationTableProperty }}>
                {element.age}
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default InformationTable;
