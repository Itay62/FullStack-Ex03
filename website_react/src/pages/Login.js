import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

function Login() {
  //   const [userName, setUserName] = useState("");
  //   const [password, setPassword] = useState("");

  return (
    <div>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h1"></Typography>
        <TextField
          label=""
          variant="outlined"
          placeholder="User name"
        ></TextField>
        <TextField
          label=""
          variant="outlined"
          defaultValue=""
          type="password"
          placeholder="Password"
        ></TextField>
        <Button variant="outlined">Login</Button>
        <NavLink to=".">Forgot Password / Username</NavLink>
      </Stack>
    </div>
  );
}

export default Login;
