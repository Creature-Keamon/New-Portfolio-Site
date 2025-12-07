import Decommisson from "./pages/Decommission";
import "./App.css";
import { useState } from "react";
import ProjectsPage from "./pages/ProjectsPage";
import RotatingDisk from "./pages/Nav";
import Ammit from "./pages/Ammit";

function App() {
  const [page, SetPage] = useState("Home");
  const navigate = (to: string) => SetPage(to);

  return (
    <div>
      {page === "Projects" && <ProjectsPage Navigate={navigate} />}
      {page === "Decommission" && <Decommisson Navigate={navigate} />}
      {page === "Home" && <RotatingDisk Navigate={navigate} />}
      {page === "Ammit" && <Ammit Navigate={navigate} />}
    </div>
  );
}

export default App;
