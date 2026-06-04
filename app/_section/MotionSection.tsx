"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Select from "@/components/shared/input/Select";
import Slider from "@/components/shared/input/Slider";
import Switch from "@/components/shared/input/Switch";
import type { PopoverStudioState } from "../types";

type Props = {
  state: PopoverStudioState;
  update: <K extends keyof PopoverStudioState>(key: K, value: PopoverStudioState[K]) => void;
};

export default function MotionSection({ state, update }: Props) {
  return (
    <SectionCard title="Motion" subtitle="Reduced-motion-safe animation controls.">
      <Select label="Animation" value={state.animation} options={[
  "none",
  "fade",
  "scale-fade",
  "slide",
  "flip"
]} onChange={(value) => update("animation", value)} />
      <Slider label="Duration" value={state.duration} min={0} max={600} step={1} onChange={(value) => update("duration", value)} />
      <Switch label="Reduced motion fallback" checked={state.reducedMotion} onChange={(value) => update("reducedMotion", value)} />
    </SectionCard>
  );
}
