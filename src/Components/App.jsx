import "../Styles/App.css";
import Footer from "./Footer";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <h1>Hello Bitch</h1>
      <NavBar />
      <Jumbotron />
      <div className="container-products">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="container-service">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
