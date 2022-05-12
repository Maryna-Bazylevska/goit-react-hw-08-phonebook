import { logOut } from '../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../redux/auth/auth-selectors';
import { Wrapper, Span, Button } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
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
          SignOut
        </Button>
      </Wrapper>
    </>
  );
}