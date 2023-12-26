import HeaderComponent from "../../components/HeaderComponents";
import Nav from "../../components/Nav";
import pictureBlog from "../../assets/blog.jpg";

import TitleField from "../../components/TitleField";
import Footer from "../../components/Footer";
function Blog() {
  const title = "Blog";
  const background = " #550c0c86";
  return (
    <div>
      <Nav />
      <HeaderComponent picture={pictureBlog} color={background} />
      <TitleField title={title} />
      <Footer />
    </div>
  );
}
export default Blog;
