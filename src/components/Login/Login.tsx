import {
  Container,
  Image,
  LoginButton,
  LoginLink,
  Nav,
  Signin,
  Section,
  HeroImage,
  HeroSection,
  HeroSectionH1,
  LoginForm,
  LoginFormImage,
  LoginFormButton,
} from "./styles";
import loginLogo from "../../images/login-logo.svg";
import hero from "../../images/login-hero.svg";
import googleImg from "../../images/google.svg";
const Login = () => {
  return (
    <Container>
      <Nav>
        <LoginLink>
          <Image src={loginLogo} alt="logo" />
        </LoginLink>
        <div>
          <LoginButton>Join Now</LoginButton>
          <Signin>Sign in</Signin>
        </div>
      </Nav>
      <Section>
        <HeroSection>
          <HeroSectionH1>Welcome to your professional community</HeroSectionH1>
          <HeroImage src={hero} alt="hero" />
        </HeroSection>
        <LoginForm>
          <LoginFormButton>
            <LoginFormImage src={googleImg} alt="logo" />
            Sign in with Google
          </LoginFormButton>
        </LoginForm>
      </Section>
    </Container>
  );
};

export default Login;
