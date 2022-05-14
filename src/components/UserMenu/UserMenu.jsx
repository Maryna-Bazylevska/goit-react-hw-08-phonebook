import { logOut } from '../../redux/auth/auth-operations';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../redux/auth/auth-selectors';
import { Wrapper, Span, Button, ButtonContacts } from './UserMenu.styled';

export default function UserMenu({ isLoggedIn }) {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Wrapper>
        <Span>Welcome, {name}</Span>
        <Button
          style={{
            textDecoration: 'none',
            marginRight: 20,
          }}
          type="button"
          onClick={() => dispatch(logOut())}
        >
          LogOut
        </Button>
        <ButtonContacts
          type="button"
          onClick={() => navigate(location?.state?.from ?? '/contacts')}
        >
          Contacts
        </ButtonContacts>
      </Wrapper>
    </>
  );
}
