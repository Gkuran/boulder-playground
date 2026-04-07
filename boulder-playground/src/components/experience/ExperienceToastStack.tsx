import { Toast } from "boulder-ui";
import type { DemoToast } from "./types";

type ExperienceToastStackProps = {
  toasts: DemoToast[];
  onDismiss: (id: number) => void;
};

export function ExperienceToastStack({
  toasts,
  onDismiss,
}: ExperienceToastStackProps) {
  if (toasts.length === 0) {
    return null;
  }

  return (
    <div className="experience-toast-stack" aria-live="polite">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          title={toast.title}
          description={toast.description}
          variant={toast.variant}
          persistent={toast.persistent}
          position="bottom-left"
          onClose={() => onDismiss(toast.id)}
        />
      ))}
    </div>
  );
}
