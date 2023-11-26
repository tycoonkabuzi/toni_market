import "../style/App.css";
import Nav from "./Nav";
import Header from "./Header";
import TheStore from "./TheStore";
import FavouritePanel from "./FavouritePanel";
import Promotion from "./Promotion";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <FavouritePanel />
      <TheStore />
      <Promotion />
      <Footer />
    </div>
  );
}

export default App;
