// @ts-nocheck
import {
  Badge,
  Button,
  Header,
  HeaderActions,
  HeaderBrand,
  HeaderNav,
  Input,
} from "boulder-ui";

type CustomHeaderProps = {
  currentScreen: "home" | "components";
  onNavigate: (screen: "home" | "components") => void;
};

const navLinks = [
  { label: "Explorar", screen: "home" as const },
  { label: "Coleções", href: "#collections" },
];

export default function CustomHeader() {
  return (
    <Header
      variant="floating"
      position="sticky"
      style={{
        zIndex: 20,
      }}
    >
      <HeaderBrand style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span
          style={{
            fontWeight: "var(--boulder-font-weight-semibold)",
            fontSize: "var(--boulder-font-size-xl)",
          }}
        >
          Terra
        </span>
        <Badge variant="success">beta</Badge>
      </HeaderBrand>
      <HeaderNav aria-label="Navegação principal">
        {navLinks.map(({ label, href, isActive }) => (
          <a
            key={label}
            href={href}
            style={{
              borderRadius: "var(--boulder-radius-full)",
              color: isActive
                ? "var(--boulder-color-text)"
                : "var(--boulder-color-text-secondary)",
              fontSize: "var(--boulder-font-size-sm)",
              fontWeight: isActive
                ? "var(--boulder-font-weight-semibold)"
                : "var(--boulder-font-weight-medium)",
              padding: "var(--boulder-spacing-xs) var(--boulder-spacing-md)",
              textDecoration: "none",
              backgroundColor: isActive
                ? "var(--boulder-color-surface-raised)"
                : "transparent",
            }}
          >
            {label}
          </a>
        ))}
      </HeaderNav>
      <HeaderActions
        style={{ gap: "var(--boulder-spacing-sm)", flexWrap: "wrap" }}
      >
        <Input
          size="sm"
          variant="filled"
          placeholder="Buscar área ou coordenada"
          style={{ minWidth: 180 }}
        />
        <Button size="sm" variant="secondary">
          Convidar equipe
        </Button>
        <Button size="sm">Nova expedição</Button>
      </HeaderActions>
    </Header>
  );
}
