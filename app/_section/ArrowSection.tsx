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

export default function ArrowSection({ state, update }: Props) {
  return (
    <SectionCard title="Arrow" subtitle="Popover arrow geometry.">
      <Switch label="Show arrow" checked={state.showArrow} onChange={(value) => update("showArrow", value)} />
      <Slider label="Arrow size" value={state.arrowSize} min={6} max={28} step={1} onChange={(value) => update("arrowSize", value)} />
      <Select label="Arrow shape" value={state.arrowShape} options={[
  "triangle",
  "rounded",
  "notch"
]} onChange={(value) => update("arrowShape", value)} />
    </SectionCard>
  );
}
