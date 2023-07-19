import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/header/Header";
import Router from "./Router";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
