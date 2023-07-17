import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import CreatePage from "./pages/CreatePage";

import "./App.scss";

const App: FunctionComponent = () => {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="create" element={<CreatePage />} />
      </Routes>
    </>
  );
};

export default App;
