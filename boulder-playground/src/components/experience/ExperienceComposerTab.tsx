import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  CardDescription,
  Checkbox,
  DataAttribute,
  FormField,
  Input,
  RadioGroup,
  Select,
  Slider,
  Tag,
  Textarea,
} from "boulder-ui";
import type { ExperienceFormState } from "./types";

const RadioGroupRoot = RadioGroup.Root;
const RadioGroupItem = RadioGroup.Item;

type ExperienceComposerTabProps = {
  form: ExperienceFormState;
  onCrewNameChange: (value: string) => void;
  onPriorityChange: (value: string) => void;
  onDispatchModelChange: (value: string) => void;
  onCoverageRadiusChange: (value: number) => void;
  onShareLiveFeedChange: (value: boolean) => void;
  onAttachChecklistChange: (value: boolean) => void;
  onFieldNotesChange: (value: string) => void;
};

export function ExperienceComposerTab({
  form,
  onCrewNameChange,
  onPriorityChange,
  onDispatchModelChange,
  onCoverageRadiusChange,
  onShareLiveFeedChange,
  onAttachChecklistChange,
  onFieldNotesChange,
}: ExperienceComposerTabProps) {
  return (
    <div className="experience-pane">
      <Alert heading="Dispatch form" variant="info">
        Build a response block using `FormField`, `Select`, `RadioGroup`,
        `Slider`, `Checkbox`, `Textarea`, and `Accordion`.
      </Alert>

      <div className="experience-form-grid">
        <FormField
          label="Unit name"
          description="Short identifier for the field package."
        >
          <Input
            value={form.crewName}
            onChange={(event) => onCrewNameChange(event.target.value)}
            placeholder="Ex.: Aurora North"
          />
        </FormField>

        <FormField
          label="Priority"
          description="Adjusts dispatch tone and expected SLA."
        >
          <Select
            value={form.priority}
            onChange={(event) => onPriorityChange(event.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </Select>
        </FormField>
      </div>

      <FormField
        label="Response model"
        description="Choose the primary vector before sending the team."
      >
        <RadioGroupRoot
          name="dispatch-model"
          value={form.dispatchModel}
          onValueChange={onDispatchModelChange}
          orientation="horizontal"
        >
          <RadioGroupItem value="drone" label="Drone" />
          <RadioGroupItem value="vehicle" label="Vehicle" />
          <RadioGroupItem value="foot" label="On foot team" />
        </RadioGroupRoot>
      </FormField>

      <div className="experience-slider-row">
        <div>
          <strong>Coverage radius</strong>
          <CardDescription>
            {form.coverageRadius} km, {form.coverageLabel} profile.
          </CardDescription>
        </div>
        <Slider
          min={5}
          max={60}
          step={1}
          value={form.coverageRadius}
          onChange={onCoverageRadiusChange}
          aria-label="Coverage radius"
        />
      </div>

      <div className="experience-checkboxes">
        <Checkbox
          checked={form.shareLiveFeed}
          onChange={(event) => onShareLiveFeedChange(event.target.checked)}
          label="Share live video"
        />
        <Checkbox
          checked={form.attachChecklist}
          onChange={(event) => onAttachChecklistChange(event.target.checked)}
          label="Attach tactical checklist"
        />
      </div>

      <FormField
        label="Field notes"
        description="Quick summary to appear in the modal and toasts."
      >
        <Textarea
          rows={4}
          value={form.fieldNotes}
          onChange={(event) => onFieldNotesChange(event.target.value)}
        />
      </FormField>

      <Accordion variant="flush">
        <AccordionItem defaultOpen>
          <AccordionTrigger>Generated package</AccordionTrigger>
          <AccordionContent>
            <div className="experience-data-grid">
              <DataAttribute label="Unit" value={form.crewName} />
              <DataAttribute label="Priority" value={form.priority} />
              <DataAttribute
                label="Live channel"
                value={form.shareLiveFeed ? "active" : "off"}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Quick checklist</AccordionTrigger>
          <AccordionContent>
            <div className="experience-tags">
              <Tag variant="default">offline map</Tag>
              <Tag variant="success">route brief</Tag>
              <Tag variant="warning">wind</Tag>
              <Tag variant="danger">route B</Tag>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
