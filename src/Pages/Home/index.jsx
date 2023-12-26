import Nav from "../../components/Nav";
import Header from "../../components/Header";
import FavouritePanel from "../../components/FavouritePanel";
import Store from "../../components/Store";
import Promotion from "../../components/Promotion";
import Footer from "../../components/Footer";

import "../../style/App.css";

function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Promotion />
      <Footer />
    </div>
  );
}

export default Home;
