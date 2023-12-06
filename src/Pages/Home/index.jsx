import "../../style/App.css";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import FavouritePanel from "../../components/FavouritePanel";
import Store from "../../components/Store";
import Promotion from "../../components/Promotion";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <FavouritePanel />
      <Store />
      <Promotion />

      <Footer />
    </div>
  );
}

export default Home;
