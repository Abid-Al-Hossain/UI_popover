"use client";

import { useMemo, useState } from "react";
import AppShell from "@/components/shared/layout/AppShell";
import { PlaygroundLayout } from "@/components/shared/layout/PlaygroundLayout";
import SectionSelector from "@/components/shared/layout/SectionSelector";
import { SharedPreviewDownloadPanel } from "@/components/shared/layout/SharedPreviewDownloadPanel";
import type { PreviewCanvasMode } from "@/components/shared/layout/PreviewPanel";
import { DEFAULT_POPOVER_STATE } from "./_data/PopoverPresets";
import { buildExportPayload } from "./_utils/exportUtils";
import LivePreview from "./_section/LivePreview";
import PresetsSection from "./_section/PresetsSection";
import BasicsSection from "./_section/BasicsSection";
import TriggerSection from "./_section/TriggerSection";
import ContentSection from "./_section/ContentSection";
import PlacementSection from "./_section/PlacementSection";
import ArrowSection from "./_section/ArrowSection";
import BehaviorSection from "./_section/BehaviorSection";
import OverlaySection from "./_section/OverlaySection";
import SizingSection from "./_section/SizingSection";
import ColorsSection from "./_section/ColorsSection";
import BorderSection from "./_section/BorderSection";
import RadiusSection from "./_section/RadiusSection";
import ShadowSection from "./_section/ShadowSection";
import TypographySection from "./_section/TypographySection";
import MotionSection from "./_section/MotionSection";
import FocusRingSection from "./_section/FocusRingSection";
import StatesSection from "./_section/StatesSection";
import AccessibilitySection from "./_section/AccessibilitySection";
import { SECTIONS, type SectionId, type PopoverStudioState, type StudioPreset } from "./types";

export default function Page() {
  const [state, setState] = useState<PopoverStudioState>(DEFAULT_POPOVER_STATE);
  const [activeSection, setActiveSection] = useState<SectionId>("presets");
  const [activePresetId, setActivePresetId] = useState<string | null>(null);
  const [downloadName] = useState("popover-component");
  const [previewBgMode, setPreviewBgMode] = useState<PreviewCanvasMode>("custom");
  const [previewBgInput, setPreviewBgInput] = useState("#0b1220");
  const [previewResetKey, setPreviewResetKey] = useState(0);

  const update = <K extends keyof PopoverStudioState>(key: K, value: PopoverStudioState[K]) => {
    setState((current) => ({ ...current, [key]: value }));
    setActivePresetId(null);
  };

  const applyPreset = (preset: StudioPreset) => {
    setState({ ...DEFAULT_POPOVER_STATE, ...(preset.state as Partial<PopoverStudioState>) });
    setActivePresetId(preset.id);
    setPreviewResetKey((value) => value + 1);
  };

  const exportPayload = useMemo(() => buildExportPayload(state, downloadName), [downloadName, state]);
  const preview = useMemo(() => <LivePreview key={previewResetKey} state={state} />, [previewResetKey, state]);

  const controls = (
    <>
      <SectionSelector sections={SECTIONS} active={activeSection} onChange={setActiveSection} />
      {activeSection === "presets" && <PresetsSection activePresetId={activePresetId} onApply={applyPreset} />}
      {activeSection === "basics" && <BasicsSection state={state} update={update} />}
      {activeSection === "trigger" && <TriggerSection state={state} update={update} />}
      {activeSection === "content" && <ContentSection state={state} update={update} />}
      {activeSection === "placement" && <PlacementSection state={state} update={update} />}
      {activeSection === "arrow" && <ArrowSection state={state} update={update} />}
      {activeSection === "behavior" && <BehaviorSection state={state} update={update} />}
      {activeSection === "overlay" && <OverlaySection state={state} update={update} />}
      {activeSection === "sizing" && <SizingSection state={state} update={update} />}
      {activeSection === "colors" && <ColorsSection state={state} update={update} />}
      {activeSection === "border" && <BorderSection state={state} update={update} />}
      {activeSection === "radius" && <RadiusSection state={state} update={update} />}
      {activeSection === "shadow" && <ShadowSection state={state} update={update} />}
      {activeSection === "typography" && <TypographySection state={state} update={update} />}
      {activeSection === "transitions" && <MotionSection state={state} update={update} />}{activeSection === "focus-ring" && <FocusRingSection state={state} update={update} />}
      {activeSection === "states" && <StatesSection state={state} update={update} />}
      {activeSection === "accessibility" && <AccessibilitySection state={state} update={update} />}
    </>
  );

  const output = (
    <SharedPreviewDownloadPanel
      preview={preview}
      code={exportPayload.content}
      downloadName={downloadName}
      previewBgMode={previewBgMode}
      previewBgInput={previewBgInput}
      onPreviewBgMode={setPreviewBgMode}
      onPreviewBgInput={setPreviewBgInput}
    />
  );

  return (
    <AppShell contentOverflow="hidden">
      <PlaygroundLayout title="Popover Studio" controls={controls} preview={output} />
    </AppShell>
  );
}
