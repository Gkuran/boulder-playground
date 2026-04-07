import { useEffect, useState } from "react";
import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { ComponentsShowcasePage } from "./components/ComponentsShowcasePage";
import { MapShowcase } from "./components/MapShowcase";
import { MissionSummaryCard } from "./components/MissionSummaryCard";
import { OperationsSidebar } from "./components/OperationsSidebar";
import { StatsSummary } from "./components/StatsSummary";
import { TeamRosterCard } from "./components/TeamRosterCard";
import { MapView } from "./MapView";

type Screen = "home" | "components";

const routeByHash: Record<string, Screen> = {
  "#/": "home",
  "#/components": "components",
};

function App() {
  const getScreenFromHash = (): Screen =>
    routeByHash[window.location.hash] ?? "home";

  const [screen, setScreen] = useState<Screen>(getScreenFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setScreen(getScreenFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (nextScreen: Screen) => {
    window.location.hash = nextScreen === "components" ? "#/components" : "#/";
    setScreen(nextScreen);
  };

  if (screen === "components") {
    return (
      <div className="components-shell">
        <div className="components-shell__header">
          <AppHeader currentScreen={screen} onNavigate={navigateTo} />
        </div>
        <ComponentsShowcasePage onBackHome={() => navigateTo("home")} />
      </div>
    );
  }

  return (
    <div className="app-shell">
      <div className="map-stage">
        <MapView className="map-stage__view" />
      </div>

      <div className="ui-overlay">
        <div className="ui-overlay__header">
          <AppHeader currentScreen={screen} onNavigate={navigateTo} />
        </div>

        <main className="overlay-layout">
          <aside className="overlay-layout__sidebar">
            <OperationsSidebar />
          </aside>

          <section className="overlay-layout__content">
            <StatsSummary />
            <MapShowcase />
            <div className="secondary-grid">
              <MissionSummaryCard />
              <TeamRosterCard />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
