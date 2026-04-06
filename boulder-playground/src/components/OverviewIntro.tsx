import { Badge, CardDescription, CardTitle, Tag } from "boulder-ui";

const quickTags = [
  { label: "Solo úmido", variant: "success" as const },
  { label: "Ceú limpo", variant: "default" as const },
  { label: "Sem queimadas", variant: "primary" as const },
  { label: "Leituras LIDAR", variant: "warning" as const },
];

export function OverviewIntro() {
  return (
    <>
      <header className="content-heading">
        <div>
          <p className="eyebrow">Painel tático · atualizado há 3 min</p>
          <CardTitle as="h1">Área de teste Boulder UI</CardTitle>
          <CardDescription>
            Montei este layout para conferir rapidamente as componentes e o comportamento responsivo do pacote.
          </CardDescription>
        </div>
        <Badge variant="success">Operação estável</Badge>
      </header>

      <div className="tags-list">
        {quickTags.map((tag) => (
          <Tag key={tag.label} variant={tag.variant}>
            {tag.label}
          </Tag>
        ))}
      </div>
    </>
  );
}
