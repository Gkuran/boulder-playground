import "./App.css";
import CustomHeader from "./components/Header";
import { MapShowcase } from "./components/MapShowcase";
import { MissionSummaryCard } from "./components/MissionSummaryCard";
import { OperationsSidebar } from "./components/OperationsSidebar";
import { StatsSummary } from "./components/StatsSummary";
import { TeamRosterCard } from "./components/TeamRosterCard";

function App() {
  return (
    <div className="app-shell">
      <CustomHeader />
      <main className="page-body">
        <OperationsSidebar />
        <section className="content-area">
          <StatsSummary />
          <MapShowcase />
          <div className="secondary-grid">
            <MissionSummaryCard />
            <TeamRosterCard />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
