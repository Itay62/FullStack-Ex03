import React from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";

function Login() {
  //   const [userName, setUserName] = useState("");
  //   const [password, setPassword] = useState("");

  return (
    <div>
      <Navbar />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h1"></Typography>
        <TextField
          label="Outlined"
          variant="outlined"
          placeholder="User name"
        ></TextField>
        <TextField
          label="Outlined"
          variant="outlined"
          placeholder="Password"
        ></TextField>
        <Button variant="outlined">Login</Button>
      </Stack>
    </div>
  );
}

export default Login;
