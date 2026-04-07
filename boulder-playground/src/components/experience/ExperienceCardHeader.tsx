import {
  Breadcrumbs,
  CardDescription,
  CardTitle,
} from "boulder-ui";

const BreadcrumbsRoot = Breadcrumbs.Root;
const BreadcrumbsItem = Breadcrumbs.Item;
const BreadcrumbsSeparator = Breadcrumbs.Separator;

export function ExperienceCardHeader() {
  return (
    <div className="experience-card__header">
      <div>
        <CardTitle as="h3">Boulder UI lab</CardTitle>
        <CardDescription>
          A space to stress-test popup, alert, modal, toast, and form controls
          without polluting the main page.
        </CardDescription>
      </div>
      <BreadcrumbsRoot aria-label="Tactical flow">
        <BreadcrumbsItem href="#ops">Ops</BreadcrumbsItem>
        <BreadcrumbsSeparator />
        <BreadcrumbsItem href="#labs">Labs</BreadcrumbsItem>
        <BreadcrumbsSeparator />
        <BreadcrumbsItem isCurrent>UI</BreadcrumbsItem>
      </BreadcrumbsRoot>
    </div>
  );
}
