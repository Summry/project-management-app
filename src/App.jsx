import DefaultPage from "./components/DefaultPage/DefaultPage";
import NewProject from "./components/NewProject/NewProject";
import ProjectsSideBar from "./components/ProjectsSideBar/ProjectsSideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar />
      <DefaultPage />
      {/* <NewProject /> */}
    </main>
  );
}

export default App;
