import HeaderComponents from "../../components/HeaderComponents";
import pictureCollection from "../../assets/collection.jpg";
import TitleField from "../../components/TitleField";
import Store from "../../components/Store";
import Nav from "../../components/Nav";
import FavouritePanel from "../../components/FavouritePanel";
import Footer from "../../components/Footer";
function Collection() {
  const backgroundColor = "#1f4b6a88";
  const title = "Collection";
  return (
    <div>
      <Nav />
      <HeaderComponents picture={pictureCollection} color={backgroundColor} />
      <TitleField title={title} />
      <Store />
      <FavouritePanel />
      <Footer />
    </div>
  );
}
export default Collection;
