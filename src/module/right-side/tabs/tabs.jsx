import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext, TabList } from "@mui/lab";
import { style } from "../style/style";

const TabsLayout = ({ component }) => {
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
          {component.map((element, index) => (
            <Tab
              disableRipple
              key={index}
              label={`${element.title}`}
              value={`${element.value}`}
              sx={{ ...style.tabsLayout(element.value) }}
            />
          ))}
        </TabList>
        <Box sx={{ ...style.tableContainer }}>
          {component.map((element, index) => (
            <TabPanel
              value={`${element.value}`}
              sx={{ ...style.tabsContainer }}
              key={index}
            >
              <Box sx={{ width: "100%" }}>{element.page}</Box>
            </TabPanel>
          ))}
        </Box>
      </TabContext>
    </Box>
  );
};

export default TabsLayout;
