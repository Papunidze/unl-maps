import * as React from "react";
import {
  Checkbox,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import { Stack } from "@mui/system";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

import List from "@mui/material/List";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import checkedIcon from "../../../image/checkboxchecked.png";
import { style } from "../style/style";

const RiskFactory = ({ array }) => {
  const [item, setItems] = React.useState(array.property);

  const [open, setOpen] = React.useState(true);

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
            <List sx={{ ...style.lostItemsMainContainer }} component="nav">
              <Stack sx={{ ...style.InformationMainContainer }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "x-large" }}>
                  {array.title}
                </Typography>
                <IconButton onClick={() => setOpen(!open)}>
                  {open ? (
                    <ArrowDropUpIcon sx={{ ...style.InformationArrowBtn }} />
                  ) : (
                    <ArrowDropDownIcon sx={{ ...style.InformationArrowBtn }} />
                  )}
                </IconButton>
              </Stack>

              <Collapse in={open} sx={{ paddingBottom: 2 }}>
                {item.map((items, index) => (
                  <Draggable
                    key={items.id}
                    draggableId={items.id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        className="style"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Grid
                          container
                          columns={15}
                          sx={{ placeItems: "center", p: 1 }}
                          rowSpacing={0}
                        >
                          <Grid
                            item
                            md={3}
                            sx={{ transform: "translateY(10px)" }}
                          >
                            <Stack sx={{ ...style.listTitleCont }}>
                              <DragIndicatorIcon
                                sx={{
                                  ...style.listIcon(!items.propertyTitle.text),
                                }}
                              />
                              <Typography sx={{ ...style.listTitle }}>
                                {items.propertyTitle.text}
                              </Typography>
                            </Stack>
                          </Grid>
                          {items.props.map((element, index) => (
                            <React.Fragment key={index}>
                              <Grid item md={element.md} key={index}>
                                <Grid
                                  container
                                  columns={element.checkbox ? 2.3 : 1}
                                  sx={{
                                    ...style.propertyContainer(
                                      false,
                                      !element.checkbox,
                                      !element.title
                                    ),
                                  }}
                                >
                                  <Grid item md={element.checkbox ? 0.5 : 0}>
                                    {element.checkbox && (
                                      <Checkbox
                                        size="small"
                                        defaultChecked
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
                                        sx={{
                                          padding: 0,
                                          transform: "translate(-5px,-1.5px)",
                                        }}
                                      />
                                    )}
                                  </Grid>
                                  <Grid item md={element.checkbox ? 1.5 : 2}>
                                    <Typography
                                      sx={{
                                        ...style.listProperties(
                                          element.disabled
                                        ),
                                      }}
                                    >
                                      {element.title}
                                    </Typography>
                                  </Grid>
                                  <Grid item md={element.icon ? 2 : 0}>
                                    <IconButton
                                      sx={{ ...style.iconBtn(element.icon) }}
                                    >
                                      <MapIcon sx={{ ...style.mapIcon }} />
                                    </IconButton>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </React.Fragment>
                          ))}
                        </Grid>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Collapse>
            </List>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default RiskFactory;
