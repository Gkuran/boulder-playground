import { Card, CardDescription, CardHeader, CardTitle } from "boulder-ui";

const statsCards = [
  { title: "Áreas monitoradas", value: "128", detail: "+12% vs ontem" },
  { title: "Sensores online", value: "312", detail: "98% ativos" },
  { title: "Alertas críticos", value: "3", detail: "2 novos hoje" },
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
