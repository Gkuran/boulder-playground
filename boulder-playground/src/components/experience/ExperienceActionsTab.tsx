import type { Dispatch, SetStateAction } from "react";
import {
  Alert,
  Button,
  CardDescription,
  DataAttribute,
  Divider,
  DropdownMenu,
  Popover,
  Tag,
  Tooltip,
} from "boulder-ui";
import type { DemoToast } from "./types";

const PopoverRoot = Popover.Root;
const PopoverTrigger = Popover.Trigger;
const PopoverContent = Popover.Content;
const DropdownMenuRoot = DropdownMenu.Root;
const DropdownMenuTrigger = DropdownMenu.Trigger;
const DropdownMenuContent = DropdownMenu.Content;
const DropdownMenuItem = DropdownMenu.Item;
const DropdownMenuSeparator = DropdownMenu.Separator;

type ExperienceActionsTabProps = {
  isAlertVisible: boolean;
  setIsAlertVisible: Dispatch<SetStateAction<boolean>>;
  onOpenModal: () => void;
  onLaunchRandomToast: () => void;
  onEscalate: () => void;
  onEnqueueToast: (
    title: string,
    description: string,
    variant?: DemoToast["variant"],
    persistent?: boolean,
  ) => void;
};

export function ExperienceActionsTab({
  isAlertVisible,
  setIsAlertVisible,
  onOpenModal,
  onLaunchRandomToast,
  onEscalate,
  onEnqueueToast,
}: ExperienceActionsTabProps) {
  return (
    <div className="experience-pane">
      {isAlertVisible ? (
        <Alert
          heading="Instability band detected"
          variant="warning"
          onClose={() => setIsAlertVisible(false)}
        >
          Gusts above 32 km/h in the eastern sector. Replan light drones before
          the next flight.
        </Alert>
      ) : (
        <Alert heading="Alerts under control" variant="success">
          No visible warnings right now. Reopen an alert to test the expanded
          interface state.
        </Alert>
      )}

      <div className="experience-actions">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setIsAlertVisible((current) => !current)}
        >
          {isAlertVisible ? "Hide alert" : "Show alert"}
        </Button>

        <PopoverRoot>
          <PopoverTrigger>
            <Button size="sm">Open popup</Button>
          </PopoverTrigger>
          <PopoverContent
            position="bottom"
            className="experience-floating-panel"
          >
            <strong>Field popup</strong>
            <CardDescription>
              Quick summary for map-top operations.
            </CardDescription>
            <div className="experience-data-grid">
              <DataAttribute label="Sector" value="Crystal" />
              <DataAttribute label="Risk" value="Moderate" />
              <DataAttribute label="ETA" value="14 min" />
            </div>
          </PopoverContent>
        </PopoverRoot>

        <Button size="sm" onClick={onOpenModal}>
          Open modal
        </Button>

        <Tooltip content="Triggers a toast with a random variant." position="top">
          <Button size="sm" variant="secondary" onClick={onLaunchRandomToast}>
            Test toaster
          </Button>
        </Tooltip>

        <DropdownMenuRoot>
          <DropdownMenuTrigger>
            <Button size="sm" variant="secondary">
              Quick menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="experience-menu">
            <DropdownMenuItem onClick={onEscalate}>Escalate incident</DropdownMenuItem>
            <DropdownMenuItem onClick={onLaunchRandomToast}>Publish toast</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              destructive
              onClick={() => {
                setIsAlertVisible(true);
                onEnqueueToast(
                  "Failure simulation",
                  "A critical incident was injected for visual testing.",
                  "danger",
                );
              }}
            >
              Inject critical failure
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuRoot>
      </div>

      <div className="experience-kpis">
        <DataAttribute label="Operators ready" value="12" />
        <DataAttribute label="Active links" value="04 uplinks" />
        <DataAttribute label="Safe window" value="23 min" />
      </div>

      <Divider />

      <div className="experience-tags">
        <Tag variant="primary">popover</Tag>
        <Tag variant="success">toast</Tag>
        <Tag variant="warning">alert</Tag>
        <Tag variant="danger">modal</Tag>
      </div>
    </div>
  );
}
