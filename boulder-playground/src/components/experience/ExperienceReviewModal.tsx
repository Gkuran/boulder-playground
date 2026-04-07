import {
  Alert,
  Button,
  CardDescription,
  DataAttribute,
  Divider,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "boulder-ui";
import type { ExperienceFormState } from "./types";

type ExperienceReviewModalProps = {
  isOpen: boolean;
  form: ExperienceFormState;
  onClose: () => void;
  onPublish: () => void;
};

export function ExperienceReviewModal({
  isOpen,
  form,
  onClose,
  onPublish,
}: ExperienceReviewModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalHeader>
        <ModalTitle>Dispatch review</ModalTitle>
        <CardDescription>
          Modal built with boulder-ui components and form data.
        </CardDescription>
      </ModalHeader>
      <ModalContent>
        <div className="experience-pane">
          <Alert heading="Package summary" variant="info">
            Review the signals before publishing to the field team.
          </Alert>
          <div className="experience-data-grid">
            <DataAttribute label="Unit" value={form.crewName} />
            <DataAttribute label="Priority" value={form.priority} />
            <DataAttribute label="Mode" value={form.dispatchModel} />
            <DataAttribute label="Coverage" value={`${form.coverageRadius} km`} />
          </div>
          <Divider />
          <DataAttribute
            orientation="vertical"
            label="Notes"
            value={form.fieldNotes}
          />
          <DataAttribute
            label="Checklist"
            value={form.attachChecklist ? "attached" : "pending"}
          />
        </div>
      </ModalContent>
      <ModalFooter className="experience-card__footer">
        <Button size="sm" variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button size="sm" onClick={onPublish}>
          Publish
        </Button>
      </ModalFooter>
    </Modal>
  );
}
