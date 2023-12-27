import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import styled from "styled-components";

const Main = styled.div`
  color: rgb(100, 100, 100);
  background-color: rgb(228, 228, 228);
`;
const MainSection = styled.div`
  display: grid;
  width: auto;
  grid-template-columns: 30% 20% 20% 30%;
  text-align: left;
  padding-left: 4%;
  height: 300px;
  align-items: center;
  @media only screen and (max-width: 600px) {
    padding-top: 50px;
    grid-template-columns: auto;
    height: 100%;
    width: 400px;
    margin: auto;
  }
`;
const Info = styled.div`
  width: 400px;
  @media only screen and (max-width: 600px) {
    width: 300px;
    padding-left: 20px;
    margin: auto;
  }
`;
const BottomFooter = styled.div`
  text-align: center;
  height: 50px;
  border-top: solid 1px rgb(175, 175, 175);
  color: rgb(106, 106, 106);
  padding-top: 20px;
`;
const Picture = styled.img`
  width: 150px;
  @media only screen and (max-width: 600px) {
    width: 200px;
    margin: auto;
  }
`;
const ContainerLink = styled.div`
  @media only screen and (max-width: 600px) {
    width: 300px;

    margin: auto;
  }
`;
const SocialPicture = styled.img`
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const TheLinks = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  align-items: center;
  margin-bottom: 10px;
`;
const MainTheLinks = styled.ul`
  width: 80px;
  margin: auto;
  margin-left: -30px;
`;
const TextToni = styled.p``;

function Footer() {
  function getDate() {
    const date = new Date();
    return date.getFullYear();
  }
  return (
    <Main>
      <MainSection>
        <Info>
          <Picture alt="logo" src={logo} />
          <TextToni>
            We would like to give to our users a better experience and we
            believe that through toni we can get to that.
          </TextToni>
        </Info>
        <ContainerLink>
          <h3> About us</h3>
          <MainTheLinks>
            <TheLinks>Beauty</TheLinks>
            <TheLinks>Chain</TheLinks>
            <TheLinks>Creativity</TheLinks>
          </MainTheLinks>
        </ContainerLink>

        <ContainerLink>
          <h3> Resources</h3>
          <MainTheLinks>
            <TheLinks>Beauty</TheLinks>
            <TheLinks>Chain</TheLinks>
            <TheLinks>Creativity</TheLinks>
          </MainTheLinks>
        </ContainerLink>

        <ContainerLink>
          <h3>Get in Touch</h3>
          <TheLinks>
            <SocialPicture alt="Facebook" src={facebook} />
            Facebook
          </TheLinks>
          <TheLinks>
            <SocialPicture alt="Instagram" src={instagram} />
            Instagram
          </TheLinks>

          <TheLinks>
            <SocialPicture alt="Twitter" src={twitter} />X
          </TheLinks>
        </ContainerLink>
      </MainSection>
      <BottomFooter>Toni Creation {getDate()}</BottomFooter>
    </Main>
  );
}
export default Footer;
