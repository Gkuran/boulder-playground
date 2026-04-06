import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Divider,
  Tabs,
} from "boulder-ui";

const TabsRoot = Tabs.Root;
const TabsList = Tabs.List;
const TabsTrigger = Tabs.Trigger;
const TabsContent = Tabs.Content;

const hotspotList = [
  {
    id: "fortaleza",
    title: "Cânion Fortaleza",
    detail: "Umidade relativa 21%",
    badge: "Atenção",
  },
  {
    id: "tucanos",
    title: "Vale dos Tucanos",
    detail: "Monitoramento estabilizado",
    badge: "Estável",
  },
  {
    id: "cristal",
    title: "Cristal d'Água",
    detail: "Trânsito bloqueado · rota alternativa",
    badge: "Aviso",
  },
] as const;

export function MapShowcase() {
  return (
    <Card className="map-card overlay-card" variant="elevated">
      <CardHeader
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "var(--boulder-spacing-md)",
          flexWrap: "wrap",
        }}
      >
        <div>
          <CardTitle as="h2">Comandos do mapa</CardTitle>
          <CardDescription>
            Ajuste camadas, exporte dados e acompanhe eventos sem sair da
            visualização principal.
          </CardDescription>
        </div>
        <div className="map-card__actions">
          <Button size="sm" variant="secondary">
            Exportar KML
          </Button>
          <Button size="sm">Atualizar</Button>
        </div>
      </CardHeader>
      <CardContent>
        <TabsRoot defaultValue="mapa">
          <TabsList className="tabs-list">
            <TabsTrigger value="mapa">Visão geral</TabsTrigger>
            <TabsTrigger value="hotspots">Hotspots</TabsTrigger>
          </TabsList>
          <TabsContent value="mapa">
            <div className="map-panel">
              <div className="map-panel__summary">
                <strong>Cobertura operacional</strong>
                <CardDescription>
                  O mapa está em tela cheia. Use este painel para controlar a
                  operação sem perder contexto espacial.
                </CardDescription>
              </div>
              <Divider />
              <ul className="map-kpi-list">
                <li className="map-kpi">
                  <span>Camadas ativas</span>
                  <strong>08</strong>
                </li>
                <li className="map-kpi">
                  <span>Última atualização</span>
                  <strong>2 min</strong>
                </li>
                <li className="map-kpi">
                  <span>Área coberta</span>
                  <strong>42 km²</strong>
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="hotspots">
            <ul className="hotspot-list">
              {hotspotList.map((spot) => (
                <li key={spot.id} className="hotspot-card">
                  <div>
                    <strong>{spot.title}</strong>
                    <CardDescription>{spot.detail}</CardDescription>
                  </div>
                  <Badge
                    variant={
                      spot.badge === "Atenção"
                        ? "warning"
                        : spot.badge === "Aviso"
                          ? "danger"
                          : "success"
                    }
                  >
                    {spot.badge}
                  </Badge>
                </li>
              ))}
            </ul>
          </TabsContent>
        </TabsRoot>
      </CardContent>
    </Card>
  );
}
