import { About } from "./components/About/About";
import { Blog } from "./components/Blog/Blog";
import { Cases } from "./components/Cases/Cases";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Team } from "./components/Team/Team";
import { Modal } from "./utils/Modal/Modal";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Cases />
      <Blog />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
