import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Navigation from './Components/Navbar/Navbar';
import Work from './Components/Work/Work';

function App() {
  return (
    <div>
      <Navigation/>
      <About/>
      <Contact/>
      <div className=''>
        <Work/>
      </div>
    </div>
  );
}
    
export default App;


/* 
const setInitLanguaje = () => {
    if (localStorage.getItem("languaje")) {
      if (localStorage.getItem("languaje") === "es-CO") {
        document.querySelector("HTML")?.setAttribute("lang", "es-CO");
        return 'es-CO';
      } else {
        document.querySelector("HTML")?.setAttribute("lang", "en-US");
        return 'en-US';
      }
    } else {
      localStorage.getItem("languaje", "en-US");
      document.querySelector("HTML")?.setAttribute("lang", "en-US");
      return 'en-US';
    }
  }

  export interface LanguageState
  value: string;
*/