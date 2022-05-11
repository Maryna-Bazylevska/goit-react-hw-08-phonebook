import { register } from "../../redux/auth/auth-operations";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//import Button from "@mui/material/Button";
import { Form, LoginTitle, Button } from "./RegisterView.styled";
import toast from "react-hot-toast";
import validateEmail from "../ValidateEmail/ValidateEmail";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <LoginTitle>SignUp</LoginTitle>

      <Form onSubmit={handleSubmit} autoComplete="off">
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
            label="Name"
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            size="small"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Box>
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
          Registration
        </Button>
      </Form>
    </div>
  );
}
