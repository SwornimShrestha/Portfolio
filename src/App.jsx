import Contact from "./components/Contact";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="relative h-full overflow-y-hidden antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className=" relative z-10 flex flex-col items-center p-10 space-y-8  container mx-auto gap-32">
        <div>
          <Navbar />
          <Hero />
          <Skills />
        </div>
        <Project />
        <Experiences />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
