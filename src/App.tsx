import { Routes, Route } from "react-router-dom";
import Layout from "./components/@common/Layout";
import HomePage from "./components/HomePage";
import ApplyPage from "./components/ApplyPage";
import PrivacyConsent from "./components/ApplyPage/PrivacyConsent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="apply" element={<ApplyPage />}>
          <Route path="consent" element={<PrivacyConsent />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
