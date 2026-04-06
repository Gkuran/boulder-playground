import "./App.css";
import CustomHeader from "./components/Header";
import { MapShowcase } from "./components/MapShowcase";
import { MissionSummaryCard } from "./components/MissionSummaryCard";
import { OperationsSidebar } from "./components/OperationsSidebar";
import { StatsSummary } from "./components/StatsSummary";
import { TeamRosterCard } from "./components/TeamRosterCard";
import { MapView } from "./MapView";

function App() {
  return (
    <div className="app-shell">
      <div className="map-stage">
        <MapView className="map-stage__view" />
      </div>

      <div className="ui-overlay">
        <div className="ui-overlay__header">
          <CustomHeader />
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
