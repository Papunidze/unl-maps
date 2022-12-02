import { Box, Stack } from "@mui/material";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { generateLazyRoutes } from "./lib/layz/layz-router";

import { authRoutesData, unauthRoutesData } from "./routes/routes";

const generateAuthorizationRoutes = generateLazyRoutes(authRoutesData);
const generateUnathrizationRoutes = generateLazyRoutes(unauthRoutesData);
function App() {
  return (
    <Box px={3}>
      <Stack direction="row" justifyContent="flex-start">
        <Routes>
          <Route path="*" exact element={<Navigate to="/" />} />
          {generateAuthorizationRoutes}
          {generateUnathrizationRoutes}
        </Routes>
      </Stack>
    </Box>
  );
}

export default App;
