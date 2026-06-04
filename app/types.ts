export type SectionId = "presets" | "basics" | "trigger" | "content" | "placement" | "arrow" | "behavior" | "overlay" | "sizing" | "colors" | "border" | "radius" | "shadow" | "typography" | "motion" | "states" | "accessibility";

export type PopoverStudioState = {
  triggerLabel: string;
  title: string;
  description: string;
  body: string;
  primaryAction: string;
  secondaryAction: string;
  id: string;
  triggerId: string;
  contentId: string;
  labelledBy: string;
  describedBy: string;
  openMode: "uncontrolled" | "controlled" | "manual";
  defaultOpen: boolean;
  modal: boolean;
  closeOnEscape: boolean;
  closeOnInteractOutside: boolean;
  closeOnScroll: boolean;
  side: "top" | "right" | "bottom" | "left";
  align: "start" | "center" | "end";
  offset: number;
  collisionPadding: number;
  sameWidth: boolean;
  sticky: "partial" | "always" | "none";
  showArrow: boolean;
  arrowSize: number;
  arrowShape: "triangle" | "rounded" | "notch";
  showOverlay: boolean;
  overlayOpacity: number;
  width: number;
  maxHeight: number;
  padding: number;
  gap: number;
  radius: number;
  borderWidth: number;
  shadow: number;
  background: string;
  foreground: string;
  muted: string;
  accent: string;
  border: string;
  fontFamily: string;
  titleSize: number;
  bodySize: number;
  fontWeight: number;
  animation: "none" | "fade" | "scale-fade" | "slide" | "flip";
  duration: number;
  reducedMotion: boolean;
  previewState: "open" | "closed" | "hover" | "focus" | "collision" | "disabled";
};

export type StudioPreset = {
  id: string;
  family: string;
  archetype: string;
  variant: string;
  size: string;
  tags: string[];
  state: PopoverStudioState;
};

export const SECTIONS: Array<{ id: SectionId; label: string }> = [
  {
    "id": "presets",
    "label": "Presets"
  },
  {
    "id": "basics",
    "label": "Basics"
  },
  {
    "id": "trigger",
    "label": "Trigger"
  },
  {
    "id": "content",
    "label": "Content"
  },
  {
    "id": "placement",
    "label": "Placement"
  },
  {
    "id": "arrow",
    "label": "Arrow"
  },
  {
    "id": "behavior",
    "label": "Behavior"
  },
  {
    "id": "overlay",
    "label": "Overlay"
  },
  {
    "id": "sizing",
    "label": "Sizing"
  },
  {
    "id": "colors",
    "label": "Colors"
  },
  {
    "id": "border",
    "label": "Border"
  },
  {
    "id": "radius",
    "label": "Radius"
  },
  {
    "id": "shadow",
    "label": "Shadow"
  },
  {
    "id": "typography",
    "label": "Typography"
  },
  {
    "id": "motion",
    "label": "Motion"
  },
  {
    "id": "states",
    "label": "State Preview"
  },
  {
    "id": "accessibility",
    "label": "Accessibility"
  }
];
