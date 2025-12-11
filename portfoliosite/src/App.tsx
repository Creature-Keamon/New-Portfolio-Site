import decommissionData from "./data/decommissionData";
import "./App.css";
import { useState } from "react";
import ProjectsPage from "./pages/ProjectsPage";
import RotatingDisk from "./pages/Nav";
import ammitData from "./data/ammitData";
import SingleProject from "./pages/SingleProject";
import reminisceData from "./data/reminisceData";
import PortfolioData from "./data/portfolioData";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  const [page, SetPage] = useState("Home");
  const navigate = (to: string) => SetPage(to);

  return (
    <div>
      {page === "Projects" && <ProjectsPage Navigate={navigate} />}
      {page === "Home" && <RotatingDisk Navigate={navigate} />}
      {page === "Contact" && <Contact Navigate={navigate} />}
      {page === "About" && <About Navigate={navigate} />}
      {page === "Ammit" && (
        <SingleProject Navigate={navigate} data={ammitData} />
      )}
      {page === "Reminisce" && (
        <SingleProject Navigate={navigate} data={reminisceData} />
      )}
      {page === "Decommission" && (
        <SingleProject Navigate={navigate} data={decommissionData} />
      )}
      {page === "Portfolio" && (
        <SingleProject Navigate={navigate} data={PortfolioData} />
      )}
    </div>
  );
}

export default App;
