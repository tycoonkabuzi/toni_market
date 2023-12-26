import Nav from "../../components/Nav";
import FavouritePanel from "../../components/FavouritePanel";
import Footer from "../../components/Footer";
import Store from "../../components/Store";
import TitleField from "../../components/TitleField";
import styled from "styled-components";
import headerImage from "../../assets/CollectionHeader.jpg";
import { useLocation } from "react-router-dom";
const Main = styled.div`
  background-image: url(${headerImage});
  background-size: cover;
  height: 375px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
const Overlay = styled.div`
  background-color: #1f4b6a88;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
function Collection() {
  return (
    <Main>
      <Overlay />
      <Nav />
      <TitleField />
      <Store />

      <FavouritePanel />
      <Footer />
    </Main>
  );
}
export default Collection;
