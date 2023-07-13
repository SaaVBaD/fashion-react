import Header from "./components/Header/header";
import Promo from "./components/promo/promo";
import Brands from "./components/brands/brands";
import Arrivals from "./components/arrivals/arrivals";
import Payday from "./components/payday/payday";
import Favourite from "./components/favourite/favourite";
import Download from "./components/download/download";
import Form from "./components/form/form";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Payday />
      <Favourite />
      <Download />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
