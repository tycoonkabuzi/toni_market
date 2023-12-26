import Nav from "../../components/Nav";
import Header from "../../components/Header";
import FavouritePanel from "../../components/FavouritePanel";
import Store from "../../components/Store";
import Promotion from "../../components/Promotion";
import PriceRank from "../../components/PriceRank";
import Footer from "../../components/Footer";

import "../../style/App.css";

function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <FavouritePanel />
      <PriceRank />
      <Promotion />
      <Footer />
    </div>
  );
}

export default Home;
