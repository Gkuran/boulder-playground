export type DemoToast = {
  id: number;
  title: string;
  description: string;
  variant: "default" | "success" | "danger" | "warning" | "info";
  persistent?: boolean;
};

export type ExperienceFormState = {
  crewName: string;
  priority: string;
  dispatchModel: string;
  coverageRadius: number;
  coverageLabel: string;
  shareLiveFeed: boolean;
  attachChecklist: boolean;
  fieldNotes: string;
};
