import { Card, CardDescription, CardHeader, CardTitle } from "boulder-ui";

const statsCards = [
  { title: "Monitored areas", value: "128", detail: "+12% vs yesterday" },
  { title: "Sensors online", value: "312", detail: "98% active" },
  { title: "Critical alerts", value: "3", detail: "2 new today" },
];

export function StatsSummary() {
  return (
    <div className="stats-grid">
      {statsCards.map((card) => (
        <Card key={card.title} className="overlay-card" variant="elevated">
          <CardHeader>
            <CardDescription>{card.title}</CardDescription>
            <CardTitle className="stat-card__value" as="h2">
              {card.value}
            </CardTitle>
            <CardDescription>{card.detail}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

