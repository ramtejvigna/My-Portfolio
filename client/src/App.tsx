import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import './App.css';

function App() {
  // State to track the active section
  const [activeSection, setActiveSection] = useState("home");

  return (
    <Router>
      <div className="bg-black min-h-screen overflow-x-hidden">
        {/* Pass the activeSection and setActiveSection as props to Navbar and Main */}
        <Navbar activeSection={activeSection} />
        <Main setActiveSection={setActiveSection} />
      </div>
    </Router>
  );
}

export default App;
