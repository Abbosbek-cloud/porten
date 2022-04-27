import Collection from "./components/collection/Collection";
import Footer from "./components/footer/Footer";
import Header from "./components/navbar/Header";
import Navbar from "./components/navbar/Navbar";
import NewBrand from "./components/newBrands/NewBrand";
import NewItems from "./components/newItems/NewItems";
import SeasonCollection from "./components/seasonCollection/SeasonCollection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SeasonCollection />
      <Collection />
      <NewItems />
      <NewBrand />
      <Footer />
    </div>
  );
}

export default App;
