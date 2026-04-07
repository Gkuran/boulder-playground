import {
  Badge,
  Button,
  Header,
  HeaderActions,
  HeaderBrand,
  HeaderNav,
  Input,
} from "boulder-ui";

type AppHeaderProps = {
  currentScreen: "home" | "components";
  onNavigate: (screen: "home" | "components") => void;
};

const navLinks = [
  { label: "Explore", screen: "home" as const },
  { label: "Components", screen: "components" as const },
  { label: "Routes", href: "#routes" },
  { label: "Alerts", href: "#alerts" },
];

export function AppHeader({ currentScreen, onNavigate }: AppHeaderProps) {
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
      <HeaderNav aria-label="Main navigation">
        {navLinks.map(({ label, screen, href }) =>
          screen ? (
            <button
              key={label}
              type="button"
              onClick={() => onNavigate(screen)}
              style={{
                borderRadius: "var(--boulder-radius-full)",
                border: "none",
                color:
                  currentScreen === screen
                    ? "var(--boulder-color-text)"
                    : "var(--boulder-color-text-secondary)",
                cursor: "pointer",
                fontSize: "var(--boulder-font-size-sm)",
                fontWeight:
                  currentScreen === screen
                    ? "var(--boulder-font-weight-semibold)"
                    : "var(--boulder-font-weight-medium)",
                padding: "var(--boulder-spacing-xs) var(--boulder-spacing-md)",
                textDecoration: "none",
                backgroundColor:
                  currentScreen === screen
                    ? "var(--boulder-color-surface-raised)"
                    : "transparent",
              }}
            >
              {label}
            </button>
          ) : (
            <a
              key={label}
              href={href}
              style={{
                borderRadius: "var(--boulder-radius-full)",
                color: "var(--boulder-color-text-secondary)",
                fontSize: "var(--boulder-font-size-sm)",
                fontWeight: "var(--boulder-font-weight-medium)",
                padding: "var(--boulder-spacing-xs) var(--boulder-spacing-md)",
                textDecoration: "none",
                backgroundColor: "transparent",
              }}
            >
              {label}
            </a>
          ),
        )}
      </HeaderNav>
      <HeaderActions
        style={{ gap: "var(--boulder-spacing-sm)", flexWrap: "wrap" }}
      >
        <Input
          size="sm"
          variant="filled"
          placeholder="Search area or coordinates"
          style={{ minWidth: 180 }}
        />
        <Button size="sm" variant="secondary">
          Invite team
        </Button>
        <Button size="sm">New expedition</Button>
      </HeaderActions>
    </Header>
  );
}
