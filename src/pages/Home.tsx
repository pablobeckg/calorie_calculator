import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Kalorienrechner from "../components/KalorienRechner/Kalorienrechner";
import "./Home.css"

const Home = () => {
  return (
    <main>
      <Header />
      <img src="/img/Hero-section.png" alt="" />
      <img className="blogs" src="/img/Blogs-Section.png" alt="" />
      <Kalorienrechner />
      <Footer/>
    </main>
  );
};

export default Home;
