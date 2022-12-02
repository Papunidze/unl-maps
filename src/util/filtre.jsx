import { Box, Stack } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Collapse,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { style } from "./style/style";
import toast from "react-hot-toast";
const Filtr = () => {
  const [filtr, setFilter] = useState([{ nominate: "", property: "" }]);
  const [filtre, setFiltre] = useState(false);
  const [field, setField] = useState(false);
  const handleAdd = () => {
    const arr = [...filtr];
    arr.push({ nominate: "", property: "" });
    setFilter(arr);
  };
  const handleDelete = (index) => {
    const arr = [...filtr];
    if (filtr.length > 1) {
      index > 0 ? arr.splice(index, index) : arr.shift();
    } else {
      toast.error("You cannot delete the last item");
    }
    setFilter(arr);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        elevation={0}
        variant={"outlined"}
        sx={{ ...style.searchMainPaper }}
      >
        <Stack sx={{ ...style.searchContaine }}>
          <InputBase
            placeholder="Search & Query Database"
            inputProps={{ "aria-label": "Search & Query Database" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Stack>
        <IconButton sx={{ p: "10px" }} onClick={() => setFiltre(!filtre)}>
          <FilterAltIcon sx={{ ...style.filternIcon }} stroke={"black"} />
        </IconButton>
      </Paper>

      <Stack>
        <Collapse in={filtre}>
          <Stack sx={{ ...style.categoryTextContainer }}>
            <Checkbox
              sx={{ p: 0.2 }}
              size="small"
              onChange={() => setField(!field)}
            />
            <Typography sx={{ ...style.filtrTypohraphy }}>
              Select All Criteria
            </Typography>
          </Stack>
        </Collapse>
        <Collapse in={field && filtre}>
          <Box sx={{ ...style.selectFaildBox }}>
            <Typography sx={{ ...style.filtrTypohraphy }}>
              Select All Field
            </Typography>
          </Box>
          {filtr.map((element, index) => (
            <Stack sx={{ ...style.filtSelectMainContainer }} key={index}>
              <Grid
                container
                sx={{ ml: 4, mt: 0, placeItems: "center", textAlign: "center" }}
                spacing={3}
              >
                <Grid item xs="auto">
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <Select
                      value={element.nominate}
                      sx={{ ...style.filterSelect }}
                      onChange={(event) =>
                        setFilter(() => {
                          const arr = [...filtr];
                          arr[index].nominate = event.target.value;
                          return arr;
                        })
                      }
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs="auto">
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <Select
                      value={element.property}
                      sx={{ ...style.filterSelect }}
                      onChange={(event) =>
                        setFilter(() => {
                          const arr = [...filtr];
                          arr[index].property = event.target.value;
                          return arr;
                        })
                      }
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Stack
                sx={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: "translateY(10px)",
                }}
              >
                <IconButton
                  sx={{ ...style.selectOptionBtn }}
                  onClick={handleAdd}
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  sx={{ ...style.selectOptionBtn }}
                  onClick={() => handleDelete(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </Stack>
          ))}

          <Stack sx={{ ...style.filterTextfieldContainer }}>
            <Grid
              columns={15}
              container
              columnSpacing={1}
              sx={{ placeItems: "center", textAlign: "center" }}
            >
              <Grid item md={3}>
                <Typography sx={{ ...style.filtrTypohraphy }}>
                  Select Data:
                </Typography>
              </Grid>
              <Grid item md={3}>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Start-Data"
                  sx={{ ...style.filterTextfield }}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="End-Data"
                  sx={{ ...style.filterTextfield }}
                />
              </Grid>
              <Grid item md={0} xl={2}></Grid>
              <Grid item md={4}>
                <Stack sx={{ ...style.filtrerOptions }}>
                  <Button
                    variant="contained"
                    color={"inherit"}
                    sx={{ color: "black" }}
                  >
                    Cancel
                  </Button>
                  <Button variant="contained">Apply</Button>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
          <Stack sx={{ ...style.filterTextfieldContainer }}>
            <Grid
              columns={15}
              container
              columnSpacing={1}
              sx={{ placeItems: "center", textAlign: "center" }}
            >
              <Grid item md={3}>
                <Typography sx={{ ...style.filtrTypohraphy }}>
                  Select Value:
                </Typography>
              </Grid>
              <Grid item md={3}>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="$"
                  sx={{ ...style.filterTextfield }}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="$"
                  sx={{ ...style.filterTextfield }}
                />
              </Grid>
              <Grid item md={0} xl={2}></Grid>
              <Grid item md={4}>
                <Button variant="contained">Save Filter</Button>
              </Grid>
            </Grid>
          </Stack>
        </Collapse>
      </Stack>
    </Box>
  );
};

export default Filtr;
