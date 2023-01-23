import { About } from "./components/About/About";
import { Blog } from "./components/Blog/Blog";
import { Cases } from "./components/Cases/Cases";
import { Hero } from "./components/Hero/Hero";
import { Team } from "./components/Team/Team";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Cases />
      <Blog />
      <Team />
    </div>
  );
}

export default App;
