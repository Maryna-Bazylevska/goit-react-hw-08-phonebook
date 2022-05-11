import { Header } from "./AppBar.styled";
import { NavLink } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Header>
      <NavLink
        end
        to="home"
        style={({ isActive }) => ({
          color: isActive ? "#dc0088" : "white",
          textDecoration: "none",
          paddingLeft: 70,
          padding: 6,
        })}
      ></NavLink>
      {!isLoggedIn ? (
        <>
          <AuthNav />
        </>
      ) : (
        <UserMenu />
      )}
    </Header>
  );
}
