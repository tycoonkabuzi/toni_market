import "../style/App.css";
import Nav from "./Nav";
import Header from "./Header";
import TheStore from "./TheStore";
import FavouritePanel from "./FavouritePanel";
import Promotion from "./Promotion";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <FavouritePanel />
      <TheStore />
      <Promotion />
    </div>
  );
}

export default App;
