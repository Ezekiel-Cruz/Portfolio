import { MainContent } from "../components/layout";
import { useAnalytics } from "../hooks/useAnalytics";

function App() {
  useAnalytics();

  return (
    <div className="relative min-h-screen">
      <MainContent />
    </div>
  );
}

export default App;
