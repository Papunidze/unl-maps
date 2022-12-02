import React, { useState } from "react";
import { CostumeSlider, style } from "../../style/style";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { Box, Collapse, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const items = [
  {
    id: "1",
    value: 2.4,
  },
  {
    id: "2",
    value: 4.4,
  },
  {
    id: "3",
    value: 1,
  },
];
const RiskScoreRage = () => {
  const [item, setItem] = useState(items);
  const [open, setOpen] = useState(true);
  const onDragEnd = (result) => {
    try {
      const newItems = Array.from(item);
      const [removed] = newItems.splice(result.source.index, 1);
      newItems.splice(result.destination.index, 0, removed);
      setItem(newItems);
    } catch (err) {}
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <Stack sx={{ width: "100%", alignItems: "flex-end" }}>
              <IconButton onClick={() => setOpen(!open)}>
                {open ? (
                  <ArrowDropUpIcon sx={{ ...style.InformationArrowBtn }} />
                ) : (
                  <ArrowDropDownIcon sx={{ ...style.InformationArrowBtn }} />
                )}
              </IconButton>
            </Stack>
            <Stack sx={{ width: "100%", alignItems: "center" }}>
              <Typography
                fontWeight={"500"}
                fontSize={"large"}
                sx={{
                  transform: "translate(45px,15px)",
                  display: !open && "none",
                }}
              >
                2-3 Low Risk
              </Typography>
            </Stack>
            <Collapse in={open} sx={{ paddingBottom: 2 }}>
              {item.map((element, index) => (
                <Draggable
                  key={element.id}
                  draggableId={element.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      className="style"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Stack sx={{ ...style.riskScoreMainContainer }}>
                        <Stack sx={{ ...style.riskScoreDescription }}>
                          <Stack sx={{ ...style.riskScoreDescriptionTitle }}>
                            <DragIndicatorIcon sx={{ ...style.dragIcon }} />
                            <Typography variant="h6">Speed</Typography>
                          </Stack>
                          <Box sx={{ width: "100%" }}>
                            <Typography
                              sx={{ size: "small", color: "#b0aeae" }}
                            >
                              90.5km | 08.2022
                            </Typography>
                          </Box>
                        </Stack>
                        <Stack sx={{ ...style.riskScoreRangeContainer }}>
                          <Box sx={{ ...style.riskScoreRangeBox }}>
                            <CostumeSlider
                              size="large"
                              disabled
                              defaultValue={
                                element.value * 10 + (element.value - 1) * 10
                              }
                              aria-label="Small"
                            />
                          </Box>
                          <Stack
                            sx={{
                              ...style.riskScoreRangePropertyBox,
                              borderTopLeftRadius: "20px",
                              borderBottomLeftRadius: "20px",
                            }}
                          >
                            <Typography
                              sx={{ fontWeight: "700", fontSize: "small" }}
                            >
                              1
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{
                              ...style.riskScoreRangePropertyBox,
                              backgroundColor: "#5fbd44",
                            }}
                          >
                            <Typography
                              sx={{ fontWeight: "700", fontSize: "small" }}
                            >
                              2
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{
                              ...style.riskScoreRangePropertyBox,
                              background: "#db8814",
                            }}
                          >
                            <Typography
                              sx={{ fontWeight: "700", fontSize: "small" }}
                            >
                              3
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{
                              ...style.riskScoreRangePropertyBox,
                              background: "#db4f4f",
                            }}
                          >
                            <Typography
                              sx={{ fontWeight: "700", fontSize: "small" }}
                            >
                              4
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{
                              ...style.riskScoreRangePropertyBox,
                              background: "#cf0e0e",
                              borderTopRightRadius: "20px",
                              borderBottomRightRadius: "20px",
                            }}
                          >
                            <Typography
                              sx={{ fontWeight: "700", fontSize: "small" }}
                            >
                              5
                            </Typography>
                          </Stack>
                        </Stack>
                        <Stack sx={{ ...style.riskScoreValueTextContainer }}>
                          <Typography sx={{ fontWeight: "bold" }} variant="h4">
                            {element.value.toFixed(2)}
                          </Typography>
                        </Stack>
                      </Stack>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Collapse>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default RiskScoreRage;
