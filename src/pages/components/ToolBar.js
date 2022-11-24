import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  ClearCanvasButton,
  ZoomInButton,
  ZoomOutButton,
  ActivateDrawongButton,
} from "./ClearButton";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function ToolBar(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [color, setColor] = React.useState("inherit");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("patient"));
    console.log(items);
    setName(items.name);
    setAge(items.age);
    setSex(items.sex);
  });

  const handleClick = () => {
    setColor(color === "inherit" ? "primary" : "inherit");
  };

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {name} ({age}Y / {sex})
            </Typography>
            <IconButton onClick={handleClick} color={color}>
              <ActivateDrawongButton />
            </IconButton>
            <IconButton>
              <ClearCanvasButton />
            </IconButton>
            <IconButton>
              <ZoomInButton />
            </IconButton>
            <IconButton>
              <ZoomOutButton />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
