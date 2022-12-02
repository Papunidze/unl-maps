import { Collapse, IconButton, Radio, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import radioChecked from "../../../image/radiochecked.png";
import disabledRadio from "../../../image/disabledradio.png";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { style } from "../style/style";
const Information = ({ data }) => {
  const [open, setOpen] = useState(true);
  return (
    <Box>
      <Stack sx={{ ...style.InformationMainContainer }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "x-large" }}>
          Location Information
        </Typography>
        <IconButton onClick={() => setOpen(!open)}>
          {open ? (
            <ArrowDropUpIcon sx={{ ...style.InformationArrowBtn }} />
          ) : (
            <ArrowDropDownIcon sx={{ ...style.InformationArrowBtn }} />
          )}
        </IconButton>
      </Stack>
      <Collapse in={open}>
        <Stack sx={{ ...style.radioContainer }}>
          <Box sx={{ ...style.radioProperty }}>
            <Radio
              checked={true}
              sx={{ p: 0 }}
              size={"small"}
              checkedIcon={
                <img
                  src={radioChecked}
                  alt=""
                  style={{
                    width: "22.5px",
                    margin: "-0.05rem",
                  }}
                />
              }
            />
            <Typography sx={{ ...style.propretyText }}>Country:</Typography>
            <Typography fontWeight={"bold"} sx={{ ...style.propretyText }}>
              {data?.features?.[0]?.properties.postal_address?.[0].country_code}
            </Typography>
          </Box>
          <Box sx={{ ...style.radioProperty }}>
            <Radio
              checked={true}
              sx={{ p: 0 }}
              size={"small"}
              checkedIcon={
                <img
                  src={radioChecked}
                  alt=""
                  style={{
                    width: "22.5px",
                    margin: "-0.05rem",
                  }}
                />
              }
            />
            <Typography sx={{ ...style.propretyText }}>GeoID/Area:</Typography>
            <Typography fontWeight={"bold"} sx={{ ...style.propretyText }}>
              {data?.features?.[0]?.properties.unl_location.id}
            </Typography>
          </Box>
          <Box sx={{ ...style.radioProperty }}>
            <Radio
              checked={true}
              sx={{ p: 0 }}
              size={"small"}
              checkedIcon={
                <img
                  src={radioChecked}
                  alt=""
                  style={{
                    width: "22.5px",
                    margin: "-0.05rem",
                  }}
                />
              }
            />
            <Typography sx={{ ...style.propretyText }}>Region:</Typography>
            <Typography fontWeight={"bold"} sx={{ ...style.propretyText }}>
              {
                data?.features?.[0]?.properties.postal_address?.[0]
                  .state_district
              }
            </Typography>
          </Box>
          <Box sx={{ ...style.radioProperty }}>
            <Radio
              checked={true}
              sx={{ p: 0 }}
              size={"small"}
              disabled
              checkedIcon={
                <img
                  src={disabledRadio}
                  alt=""
                  style={{
                    width: "18.5px",
                    margin: "-0.05rem",
                  }}
                />
              }
            />
            <Typography sx={{ ...style.propretyText, color: "#BEBDBD" }}>
              PostalCode:
            </Typography>
            <Typography fontWeight={"bold"} sx={{ ...style.propretyText }}>
              {data?.features?.[0]?.properties.postal_address?.[0].postal_code}
            </Typography>
          </Box>
        </Stack>
      </Collapse>
    </Box>
  );
};

export default Information;
