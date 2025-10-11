import { BackgroundPattern } from "./components/layout/BackgroundPattern";
import { MainContent } from "./components/layout/MainContent";
import { useAnalytics } from "./hooks/useAnalytics";

function App() {
  useAnalytics();

  return (
    <div className="relative min-h-screen">
      <BackgroundPattern />
      <MainContent />
    </div>
  );
}

export default App;
