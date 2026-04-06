import { useState } from "react";
import {
  Badge,
  Button,
  CardDescription,
  CardTitle,
  DataAttribute,
  Divider,
  ProgressBar,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  Switch,
  Tabs,
} from "boulder-ui";

const TabsRoot = Tabs.Root;
const TabsList = Tabs.List;
const TabsTrigger = Tabs.Trigger;
const TabsContent = Tabs.Content;

const defaultLayerOptions = [
  {
    id: "trails",
    label: "Trilhas homologadas",
    helper: "Base ICMBio",
    active: true,
  },
  { id: "hydrology", label: "Hidrografia", helper: "ANA · 2026", active: true },
  {
    id: "wildfire",
    label: "Queimadas (INPE)",
    helper: "Atualiza a cada 15 min",
    active: false,
  },
  {
    id: "fauna",
    label: "Ocorrências de fauna",
    helper: "Rede BioSul",
    active: false,
  },
] as const;

const defaultMissionTimeline = [
  {
    id: "mirador",
    name: "Expedição Mirador",
    status: "Em campo",
    progress: 64,
    eta: "Hoje · 16:00",
  },
  {
    id: "cartografia",
    name: "Cartografia Norte",
    status: "Planejamento",
    progress: 18,
    eta: "Qua · 08:00",
  },
  {
    id: "rios",
    name: "Sensoriamento dos rios",
    status: "Processando",
    progress: 82,
    eta: "Qui · 21:30",
  },
] as const;

export function OperationsSidebar() {
  const [activeLayers, setActiveLayers] = useState<Set<string>>(
    () =>
      new Set(
        defaultLayerOptions
          .filter((layer) => layer.active)
          .map((layer) => layer.id),
      ),
  );

  const handleToggleLayer = (id: string) => {
    setActiveLayers((previous) => {
      const next = new Set(previous);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <Sidebar
      className="sidebar-panel"
      width="320px"
      variant="floating"
      position="sticky"
    >
      <SidebarHeader
        style={{ display: "flex", justifyContent: "space-between", gap: 8 }}
      >
        <div>
          <p className="eyebrow">Operação Aurora</p>
          <CardTitle as="h2">Serra do Mar</CardTitle>
          <CardDescription>
            Monitoramento integrado · Abril 2026
          </CardDescription>
        </div>
        <Badge variant="warning">Ao vivo</Badge>
      </SidebarHeader>
      <SidebarContent
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--boulder-spacing-md)",
        }}
      >
        <div className="sidebar-section">
          <div className="sidebar-section-title">Condições</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--boulder-spacing-sm)",
            }}
          >
            <DataAttribute label="Coordenadas" value="29ºS · 50ºW" />
            <DataAttribute label="Temperatura" value="21ºC" />
            <DataAttribute label="Vento" value="12 km/h NE" />
          </div>
        </div>
        <Divider />
        <TabsRoot defaultValue="layers">
          <TabsList className="sidebar-tabs-list">
            <TabsTrigger value="layers">
              Camadas ({activeLayers.size}/{defaultLayerOptions.length})
            </TabsTrigger>
            <TabsTrigger value="missions">Missões</TabsTrigger>
          </TabsList>
          <TabsContent value="layers">
            <ul className="layer-list">
              {defaultLayerOptions.map((layer) => (
                <li key={layer.id} className="layer-item">
                  <div className="layer-item__details">
                    <strong>{layer.label}</strong>
                    <span>{layer.helper}</span>
                  </div>
                  <Switch
                    id={`layer-${layer.id}`}
                    checked={activeLayers.has(layer.id)}
                    onChange={() => handleToggleLayer(layer.id)}
                    aria-label={`Alternar ${layer.label}`}
                  />
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="missions">
            <ul className="mission-list">
              {defaultMissionTimeline.map((mission) => (
                <li key={mission.id} className="mission-item">
                  <div className="mission-item__header">
                    <div>
                      <strong>{mission.name}</strong>
                      <CardDescription>{mission.eta}</CardDescription>
                    </div>
                    <Badge
                      variant={mission.progress > 60 ? "success" : "default"}
                    >
                      {mission.status}
                    </Badge>
                  </div>
                  <ProgressBar
                    value={mission.progress}
                    label=""
                    showValue
                    variant={mission.progress > 70 ? "warning" : "primary"}
                  />
                </li>
              ))}
            </ul>
          </TabsContent>
        </TabsRoot>
      </SidebarContent>
      <SidebarFooter
        style={{
          display: "flex",
          gap: "var(--boulder-spacing-sm)",
          flexWrap: "wrap",
        }}
      >
        <Button size="sm" variant="secondary">
          Compartilhar
        </Button>
        <Button size="sm">Sincronizar sensores</Button>
      </SidebarFooter>
    </Sidebar>
  );
}
