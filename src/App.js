import "./App.css";
import {  useRoutes } from "react-router-dom";
import Router from "./router";

function App() {
  const routing = useRoutes(Router);
  return <>{routing}</>;
}

export default App;
