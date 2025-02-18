import { Routes, Route } from "react-router-dom";
import Layout from "./components/@common/Layout";
import HomePage from "./components/HomePage";
import ApplyPage from "./components/ApplyPage";
import PrivacyConsent from "./components/ApplyPage/PrivacyConsent";
import ApplyInfo from "./components/ApplyPage/ApplyInfo";
import ApplyJob from "./components/ApplyPage/ApplyJob";
import CompletePage from "./components/CompletePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="apply" element={<ApplyPage />}>
          <Route path="consent" element={<PrivacyConsent />} />
          <Route path="info" element={<ApplyInfo />} />
          <Route path="job" element={<ApplyJob />} />
        </Route>
        <Route path="complete" element={<CompletePage />} />
      </Route>
    </Routes>
  );
}

export default App;
