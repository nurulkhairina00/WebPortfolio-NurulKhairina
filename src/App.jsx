import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./pages";
import NotFound from "./components/layout/NotFound";
import "./styles/index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
