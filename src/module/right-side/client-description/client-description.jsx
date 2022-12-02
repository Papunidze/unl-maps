import React from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

import TabsLayout from "../tabs/tabs";
import { style } from "../style/style";
import InformationTable from "./components/information-table";
import PortfolioTable from "./components/portfolio-table";
import ParametricTable from "./components/parametric-table";
import Filtr from "../../../util/filtre";

const clientArray = [
  {
    value: "1",
    title: "Product",
    page: "test",
  },
  {
    value: "2",
    title: "Client",
    page: <InformationTable />,
  },
];
const portfolioArray = [
  {
    value: "1",
    title: "Quotation",
    page: "test",
  },
  {
    value: "2",
    title: "Portfolio",
    page: <PortfolioTable />,
  },
  {
    value: "3",
    title: "Policies",
    page: "test3",
  },
];
const claimsArray = [
  {
    value: "1",
    title: "Claims",
    page: "s",
  },
  {
    value: "2",
    title: "Alert",
    page: "test2",
  },
  {
    value: "3",
    title: "Parametric",
    page: <ParametricTable />,
  },
];
const ClientDescription = () => {
  return (
    <Stack sx={{ ...style.mainClientContainer }}>
      <Filtr />
      <Box sx={{ ...style.maincContainerChildren }}>
        <TabsLayout component={clientArray} />
      </Box>
      <Box sx={{ ...style.maincContainerChildren }}>
        <TabsLayout component={portfolioArray} />
      </Box>
      <Box sx={{ ...style.maincContainerChildren }}>
        <TabsLayout component={claimsArray} />
      </Box>
    </Stack>
  );
};

export default ClientDescription;
