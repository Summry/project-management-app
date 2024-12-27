import { useState } from "react";
import DefaultPage from "./components/DefaultPage/DefaultPage";
import NewProject from "./components/NewProject/NewProject";
import ProjectsSideBar from "./components/ProjectsSideBar/ProjectsSideBar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // undefined is default page
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, // null is currently adding a new project
      };
    });
  }

  function handleFinishingAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  console.log(projectsState);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onFinishingAddProject={handleFinishingAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <DefaultPage onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
