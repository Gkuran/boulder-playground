import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
} from "boulder-ui";
import { MapView } from "../MapView";

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
    <Card className="map-card" variant="elevated">
      <CardHeader
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "var(--boulder-spacing-md)",
          flexWrap: "wrap",
        }}
      >
        <div>
          <CardTitle as="h2">Mapa em tempo real</CardTitle>
          <CardDescription>
            Combine camadas, acione alertas e teste a responsividade.
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
            <TabsTrigger value="mapa">Mapa</TabsTrigger>
            <TabsTrigger value="hotspots">Hotspots</TabsTrigger>
          </TabsList>
          <TabsContent value="mapa">
            <div className="map-wrapper">
              <MapView height="420px" />
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
