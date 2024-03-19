import "./style.css" //style css is imported
import { Route, Routes } from "react-router-dom" //route, routes are imported from the "react-router-dom" components
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

export default function App() { // app components as default export from the modules
  return (
    <div className="App">
      <Routes> //this is the container for all the route mappings defined for the entire application
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      


    </div>
  )
}