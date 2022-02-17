import { Container, Image, LoginLink, Nav } from "./styles";
import loginLogo from "../../images/login-logo.svg";
const Login = () => {
  return (
    <Container>
      <Nav>
        <LoginLink>
          <Image src={loginLogo} alt="logo" />
        </LoginLink>
      </Nav>
    </Container>
  );
};

export default Login;
