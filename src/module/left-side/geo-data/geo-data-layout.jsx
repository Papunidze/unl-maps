import React, { useState } from "react";
import { Box } from "@mui/system";
import { Checkbox, Collapse, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import checkedIcon from "../../../image/checkboxchecked.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { style } from "../style/style";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const GeoDate = ({ title, array }) => {
  const [open, setOpen] = useState(false);
  const [item, setItems] = useState(array);
  const onDragEnd = (result) => {
    try {
      const newItems = Array.from(item);
      const [removed] = newItems.splice(result.source.index, 1);
      newItems.splice(result.destination.index, 0, removed);
      setItems(newItems);
    } catch (err) {}
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <Stack sx={{ ...style.InformationMainContainer }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "x-large" }}>
                {title}
              </Typography>
              <IconButton onClick={() => setOpen(!open)}>
                {open ? (
                  <ArrowDropUpIcon sx={{ ...style.InformationArrowBtn }} />
                ) : (
                  <ArrowDropDownIcon sx={{ ...style.InformationArrowBtn }} />
                )}
              </IconButton>
            </Stack>
            <Box>
              <Collapse in={open} sx={{ paddingBottom: 2.5 }}>
                {item.map((element, index) => (
                  <Draggable
                    key={index.toString()}
                    draggableId={index.toString()}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        className="style"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Box sx={{ ...style.geoDataPropertyContainer }}>
                          <Stack sx={{ ...style.geoDataFlexContainer }}>
                            <DragIndicatorIcon
                              sx={{ ...style.listIcon(false) }}
                            />
                            <Checkbox
                              sx={{ p: 0 }}
                              size="small"
                              checkedIcon={
                                <img
                                  src={checkedIcon}
                                  alt=""
                                  style={{
                                    width: "17.5px",
                                    margin: "0.08rem",
                                  }}
                                />
                              }
                            />
                            <Typography fontWeight={"bold"}>
                              {element}
                            </Typography>
                          </Stack>
                          <IconButton>
                            <ArrowRightIcon
                              sx={{ ...style.InformationArrowBtn }}
                            />
                          </IconButton>
                        </Box>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Collapse>
            </Box>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default GeoDate;
