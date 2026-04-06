import { Avatar, Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "boulder-ui";

const teamRoster = [
  { id: "camila", name: "Camila Duarte", role: "Coordenação de campo" },
  { id: "ian", name: "Ian Monteiro", role: "Dados & Telemetria" },
  { id: "bia", name: "Beatriz Koga", role: "Sensoriamento remoto" },
] as const;

export function TeamRosterCard() {
  return (
    <Card className="overlay-card">
      <CardHeader>
        <CardTitle as="h3">Equipe no turno</CardTitle>
        <CardDescription>Integrantes que podem testar convites e permissões.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="team-list">
          {teamRoster.map((member) => (
            <li key={member.id} className="team-member">
              <div style={{ display: "flex", alignItems: "center", gap: "var(--boulder-spacing-sm)" }}>
                <Avatar alt={member.name} size="sm" />
                <div>
                  <strong>{member.name}</strong>
                  <CardDescription>{member.role}</CardDescription>
                </div>
              </div>
              <Button size="sm" variant="secondary" style={{ paddingInline: "var(--boulder-spacing-xs)" }}>
                Ping
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
