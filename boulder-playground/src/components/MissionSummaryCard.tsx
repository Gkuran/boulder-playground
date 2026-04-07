import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ProgressBar,
} from "boulder-ui";

const missionTimeline = [
  {
    id: "mirador",
    name: "Mirador Expedition",
    status: "In field",
    progress: 64,
    eta: "Today · 16:00",
  },
  {
    id: "cartografia",
    name: "North Cartography",
    status: "Planning",
    progress: 18,
    eta: "Wed · 08:00",
  },
  {
    id: "rios",
    name: "River sensing",
    status: "Processing",
    progress: 82,
    eta: "Thu · 21:30",
  },
] as const;

export function MissionSummaryCard() {
  return (
    <Card className="overlay-card">
      <CardHeader>
        <CardTitle as="h3">Missions this week</CardTitle>
        <CardDescription>Sync telemetry and checklists.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="mission-list">
          {missionTimeline.map((mission) => (
            <li key={mission.id} className="mission-item">
              <div className="mission-item__header">
                <span>{mission.name}</span>
                <Badge variant={mission.progress > 70 ? "warning" : "default"}>
                  {mission.status}
                </Badge>
              </div>
              <ProgressBar value={mission.progress} label="" showValue />
              <CardDescription>{mission.eta}</CardDescription>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="secondary">
          View full schedule
        </Button>
      </CardFooter>
    </Card>
  );
}

