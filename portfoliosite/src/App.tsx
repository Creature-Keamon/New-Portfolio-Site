import Project1 from "./Project1";
import "./App.css";
import { useState } from "react";
import ProjectsPage from "./ProjectsPage";

function App() {
  const [page, SetPage] = useState("Projects");
  const navigate = (to: string) => SetPage(to);

  return (
    <div>
      {page === "Projects" && <ProjectsPage Navigate={navigate} />}
      {page === "Project1" && <Project1 />}
    </div>
  );
}

export default App;
