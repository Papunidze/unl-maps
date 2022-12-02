import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import mapImg from "../../image/map.png";
import { theme } from "../../theme/theme";
import { style } from "./style/style";
const user = {
  name: "insr",
  password: "123",
};
const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.dismiss();
    if (!data.name || !data.password) {
      return toast.error("Please enter your username and password");
    }
    if (data.name !== user.name || data.password !== user.password) {
      return toast.error("Login failed");
    }
    return navigate("/dashboards");
  };
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Stack sx={{ ...style.centreLiginContainer }}>
          <Paper sx={{ ...style.loginContainer }} elevation={3}>
            <Stack sx={{ width: "100%" }}>
              <img src={mapImg} alt="" style={{ ...style.mapImg }} />
            </Stack>
            <Stack sx={{ ...style.loginRightSide }}>
              <Paper
                component="form"
                sx={{ ...style.loginRightSide }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <Typography variant="h5">Login</Typography>
                <TextField
                  label="Email Or Username"
                  type="text"
                  variant="standard"
                  fullWidth
                  sx={{ ...style.fieldProperty }}
                  {...register("name")}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="standard"
                  fullWidth
                  sx={{ ...style.fieldProperty }}
                  {...register("password")}
                />
                <FormControl>
                  <FormControlLabel
                    control={<Radio size="medium" />}
                    label="Remember Password"
                  />
                </FormControl>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ ...style.fieldProperty }}
                >
                  Log In
                </Button>
              </Paper>
            </Stack>
          </Paper>
        </Stack>
      </ThemeProvider>
    </Container>
  );
};

export default Login;
