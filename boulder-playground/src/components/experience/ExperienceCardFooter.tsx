import { Button, Link } from "boulder-ui";

type ExperienceCardFooterProps = {
  onSaveDraft: () => void;
  onOpenModal: () => void;
};

export function ExperienceCardFooter({
  onSaveDraft,
  onOpenModal,
}: ExperienceCardFooterProps) {
  return (
    <>
      <Link
        href="https://main--69c67eb2c82c38c85d7a3a11.chromatic.com/?path=/docs/overview--docs"
        isExternal
      >
        Library reference
      </Link>
      <div className="experience-card__footer-actions">
        <Button size="sm" variant="secondary" onClick={onSaveDraft}>
          Save draft
        </Button>
        <Button size="sm" onClick={onOpenModal}>
          Review dispatch
        </Button>
      </div>
    </>
  );
}
