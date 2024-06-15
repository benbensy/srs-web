import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
