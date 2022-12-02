import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext, TabList } from "@mui/lab";
import { style } from "../style/style";
import Information from "../information/information";
import RiskFactory from "../risk-factory/risk-factory";
import { geoData, Risk } from "../../../util/contructors";
import GeoDate from "../geo-data/geo-data-layout";
import RiskScore from "../risk-score/risk-score";

const TabsLayout = ({ data }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "transparent" }}>
      <TabContext value={value} sx={{ p: 0 }}>
        <TabList
          variant="fullWidth"
          textColor="secondary"
          onChange={handleChange}
          sx={{ ...style.tabListActive }}
          TabIndicatorProps={{
            style: {
              background: "transparent",
            },
          }}
        >
          <Tab
            disableRipple
            label="Risk Factor"
            value="1"
            sx={{ ...style.tabsLayout("1") }}
          />
          <Tab
            disableRipple
            label="Geo Date"
            value="2"
            sx={{ ...style.tabsLayout("2") }}
          />
          <Tab
            disableRipple
            label="Risk Score"
            value="3"
            sx={{ ...style.tabsLayout("3") }}
          />
        </TabList>
        <TabPanel value="1" sx={{ ...style.tabsContainer }}>
          <Box sx={{ width: "100%" }}>
            <Information data={data} />
            <RiskFactory array={Risk[0]} />
            <RiskFactory array={Risk[1]} />
            <RiskFactory array={Risk[2]} />
          </Box>
        </TabPanel>
        <TabPanel value="2" sx={{ ...style.tabsContainer }}>
          <Information data={data} />
          <Box sx={{ width: "100%" }}>
            {geoData.map((element, index) => (
              <React.Fragment key={index}>
                <GeoDate title={element.title} array={element.property} />
              </React.Fragment>
            ))}
          </Box>
        </TabPanel>
        <TabPanel value="3" sx={{ ...style.tabsContainer }}>
          <Box sx={{ width: "100%" }}>
            <Information data={data} />
            <RiskScore value={4} />
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
};
export default TabsLayout;
