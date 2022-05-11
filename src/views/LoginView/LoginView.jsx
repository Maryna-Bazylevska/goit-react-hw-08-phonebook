import * as React from "react";
import { logIn } from "../../redux/auth/auth-operations";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Form, LoginTitle, Button } from "./LoginView.styled";
import toast from "react-hot-toast";
import validateEmail from "../ValidateEmail/ValidateEmail";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error("For example email@example.com");
    }

    if (password.length < 7) {
      toast.error("Password must be at least 7 chars long");
    }
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <LoginTitle>SigIn</LoginTitle>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Box
          sx={{
            width: 300,
            maxWidth: "100%",
            marginRight: "auto",
            marginLeft: "auto",
            padingBottom: 20,
          }}
        >
          <TextField
            sx={{
              marginBottom: 3,
              bgcolor: "white",
              borderRadius: 1,
            }}
            fullWidth
            label="Email"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            size="small"
            title="For example email@example.com"
            required
          />
        </Box>
        <Box
          sx={{
            width: 300,
            maxWidth: "100%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <TextField
            sx={{
              marginBottom: 3,
              bgcolor: "white",
              borderRadius: 1,
            }}
            fullWidth
            label="Password"
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            size="small"
            title="Must contain at least 7 or more characters"
            required
          />
        </Box>
        <Button type="submit" variant="contained" size="small">
          Sign In
        </Button>
      </Form>
    </div>
  );
}
