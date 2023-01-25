import { About } from "./components/About/About";
import { Blog } from "./components/Blog/Blog";
import { Cases } from "./components/Cases/Cases";
import { Contact } from "./components/Contact/Contact";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Team } from "./components/Team/Team";

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
    </div>
  );
}

export default App;
