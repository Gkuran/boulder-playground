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
    title: "Fortaleza Canyon",
    detail: "Relative humidity 21%",
    badge: "Attention",
  },
  {
    id: "tucanos",
    title: "Toucan Valley",
    detail: "Monitoring stabilized",
    badge: "Stable",
  },
  {
    id: "cristal",
    title: "Crystal Waters",
    detail: "Traffic blocked · alternate route",
    badge: "Notice",
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
          <CardTitle as="h2">Map commands</CardTitle>
          <CardDescription>
            Adjust layers, export data, and track events without leaving the
            main view.
          </CardDescription>
        </div>
        <div className="map-card__actions">
          <Button size="sm" variant="secondary">
            Export KML
          </Button>
          <Button size="sm">Refresh</Button>
        </div>
      </CardHeader>
      <CardContent>
        <TabsRoot defaultValue="map">
          <TabsList className="tabs-list">
            <TabsTrigger value="map">Overview</TabsTrigger>
            <TabsTrigger value="hotspots">Hotspots</TabsTrigger>
          </TabsList>
          <TabsContent value="map">
            <div className="map-panel">
              <div className="map-panel__summary">
                <strong>Operational coverage</strong>
                <CardDescription>
                  The map is full screen. Use this panel to control operations
                  without losing spatial context.
                </CardDescription>
              </div>
              <Divider />
              <ul className="map-kpi-list">
                <li className="map-kpi">
                  <span>Active layers</span>
                  <strong>08</strong>
                </li>
                <li className="map-kpi">
                  <span>Last update</span>
                  <strong>2 min</strong>
                </li>
                <li className="map-kpi">
                  <span>Covered area</span>
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
                      spot.badge === "Attention"
                        ? "warning"
                        : spot.badge === "Notice"
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

