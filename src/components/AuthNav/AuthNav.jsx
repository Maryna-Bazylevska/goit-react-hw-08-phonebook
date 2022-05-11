import { NavLink } from "react-router-dom";
import { Wrapper } from "./AuthNav.styled";

export default function AuthNav() {
  return (
    <>
      <Wrapper>
        <NavLink
          end
          to="register"
          style={({ isActive }) => ({
            color: isActive ? "#c5637c" : "black",
            textDecoration: "none",
            paddingRight: 30,
          })}
        >
          SignUp
        </NavLink>
        <NavLink
          end
          to="login"
          style={({ isActive }) => ({
            color: isActive ? "#c5637c" : "black",
            textDecoration: "none",
            paddingRight: 30,
          })}
        >
          SignIn
        </NavLink>
      </Wrapper>
    </>
  );
}
