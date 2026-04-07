import { useMemo, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, Tabs } from "boulder-ui";
import { ExperienceActionsTab } from "./experience/ExperienceActionsTab";
import { ExperienceCardFooter } from "./experience/ExperienceCardFooter";
import { ExperienceCardHeader } from "./experience/ExperienceCardHeader";
import { ExperienceComposerTab } from "./experience/ExperienceComposerTab";
import { ExperienceReviewModal } from "./experience/ExperienceReviewModal";
import { ExperienceToastStack } from "./experience/ExperienceToastStack";
import type { DemoToast, ExperienceFormState } from "./experience/types";

const TabsRoot = Tabs.Root;
const TabsList = Tabs.List;
const TabsTrigger = Tabs.Trigger;
const TabsContent = Tabs.Content;

const toastVariants: DemoToast["variant"][] = [
  "default",
  "success",
  "warning",
  "danger",
  "info",
];

export function BoulderExperienceCard() {
  const [isAlertVisible, setIsAlertVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [crewName, setCrewName] = useState("Aurora Norte");
  const [priority, setPriority] = useState("high");
  const [dispatchModel, setDispatchModel] = useState("drone");
  const [coverageRadius, setCoverageRadius] = useState(34);
  const [shareLiveFeed, setShareLiveFeed] = useState(true);
  const [attachChecklist, setAttachChecklist] = useState(false);
  const [fieldNotes, setFieldNotes] = useState(
    "Validar acesso pelo vale leste antes de deslocar a equipe base.",
  );
  const [toasts, setToasts] = useState<DemoToast[]>([]);

  const coverageLabel = useMemo(() => {
    if (coverageRadius < 20) return "compacto";
    if (coverageRadius < 40) return "equilibrado";
    return "ampliado";
  }, [coverageRadius]);

  const enqueueToast = (
    title: string,
    description: string,
    variant: DemoToast["variant"] = "default",
    persistent = false,
  ) => {
    setToasts((current) => [
      ...current,
      {
        id: Date.now() + current.length,
        title,
        description,
        variant,
        persistent,
      },
    ]);
  };

  const dismissToast = (id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  };

  const launchRandomToast = () => {
    const variant =
      toastVariants[Math.floor(Math.random() * toastVariants.length)];

    enqueueToast(
      "Event published",
      `Toaster test using the ${variant} variant.`,
      variant,
    );
  };

  const handleSaveDraft = () => {
    enqueueToast(
      "Draft saved",
      `${crewName} prepared with ${priority} priority.`,
      "success",
    );
  };

  const handleEscalate = () => {
    setIsAlertVisible(true);
    enqueueToast(
      "Priority channel opened",
      "The rapid response team received the tactical package.",
      "warning",
      true,
    );
  };

  const formState: ExperienceFormState = {
    crewName,
    priority,
    dispatchModel,
    coverageRadius,
    coverageLabel,
    shareLiveFeed,
    attachChecklist,
    fieldNotes,
  };

  return (
    <Card className="overlay-card experience-card" variant="elevated">
      <CardHeader>
        <ExperienceCardHeader />
      </CardHeader>

      <CardContent className="experience-card__content">
        <div className="experience-playground">
          <TabsRoot defaultValue="actions">
            <TabsList className="tabs-list">
              <TabsTrigger value="actions">Actions</TabsTrigger>
              <TabsTrigger value="composer">Compositor</TabsTrigger>
            </TabsList>

            <TabsContent value="actions">
              <ExperienceActionsTab
                isAlertVisible={isAlertVisible}
                setIsAlertVisible={setIsAlertVisible}
                onOpenModal={() => setIsModalOpen(true)}
                onLaunchRandomToast={launchRandomToast}
                onEscalate={handleEscalate}
                onEnqueueToast={enqueueToast}
              />
            </TabsContent>

            <TabsContent value="composer">
              <ExperienceComposerTab
                form={formState}
                onCrewNameChange={setCrewName}
                onPriorityChange={setPriority}
                onDispatchModelChange={setDispatchModel}
                onCoverageRadiusChange={setCoverageRadius}
                onShareLiveFeedChange={setShareLiveFeed}
                onAttachChecklistChange={setAttachChecklist}
                onFieldNotesChange={setFieldNotes}
              />
            </TabsContent>
          </TabsRoot>

          <ExperienceToastStack toasts={toasts} onDismiss={dismissToast} />
        </div>
      </CardContent>

      <CardFooter className="experience-card__footer">
        <ExperienceCardFooter
          onSaveDraft={handleSaveDraft}
          onOpenModal={() => setIsModalOpen(true)}
        />
      </CardFooter>

      <ExperienceReviewModal
        isOpen={isModalOpen}
        form={formState}
        onClose={() => setIsModalOpen(false)}
        onPublish={() => {
          enqueueToast(
            "Dispatch published",
            `${crewName} sent with ${shareLiveFeed ? "live" : "standard"} channel.`,
            "success",
          );
          setIsModalOpen(false);
        }}
      />
    </Card>
  );
}
