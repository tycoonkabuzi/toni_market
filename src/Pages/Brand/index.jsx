import HeaderComponent from "../../components/HeaderComponents";
import picture from "../../assets/brand.jpg";
import Nav from "../../components/Nav";
import TitleField from "../../components/TitleField";
import Footer from "../../components/Footer";
function Brand() {
  const title = "Brand";
  const background = " #0e570a85";
  return (
    <div>
      <Nav />
      <HeaderComponent picture={picture} color={background} />
      <TitleField title={title} />
      <Footer />
    </div>
  );
}
export default Brand;
