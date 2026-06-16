"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Slider from "@/components/shared/input/Slider";
import Switch from "@/components/shared/input/Switch";
import type { PopoverStudioState } from "../types";

type Props = {
  state: PopoverStudioState;
  update: <K extends keyof PopoverStudioState>(key: K, value: PopoverStudioState[K]) => void;
};

export default function OverlaySection({ state, update }: Props) {
  return (
    <SectionCard title="Overlay" subtitle="Overlay behavior where semantically valid.">
      <div className="space-y-4">
      <Switch label="Show overlay" checked={state.showOverlay} onChange={(value) => update("showOverlay", value)} />
      <Slider label="Overlay opacity" value={state.overlayOpacity} min={0} max={80} step={1} onChange={(value) => update("overlayOpacity", value)} />
    </div>
    </SectionCard>
  );
}
