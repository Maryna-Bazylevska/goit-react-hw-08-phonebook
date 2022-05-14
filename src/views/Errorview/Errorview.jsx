import { useNavigate, useLocation } from 'react-router-dom';
import { Title, Text, Wrapper, Button } from './Errorview.styled';
export default function Errorview() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Wrapper>
      <Title>Oops!</Title>
      <Text>404 - PAGE NOT FOUND</Text>
      <Button
        type="button"
        onClick={() => navigate(location?.state?.from ?? '/')}
      >
        GO TO HOME PAGE
      </Button>
    </Wrapper>
  );
}
