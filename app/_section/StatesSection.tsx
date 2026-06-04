"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Select from "@/components/shared/input/Select";
import type { PopoverStudioState } from "../types";

type Props = {
  state: PopoverStudioState;
  update: <K extends keyof PopoverStudioState>(key: K, value: PopoverStudioState[K]) => void;
};

export default function StatesSection({ state, update }: Props) {
  return (
    <SectionCard title="State Preview" subtitle="Forced preview states for QA.">
      <Select label="Preview state" value={state.previewState} options={[
  "open",
  "closed",
  "hover",
  "focus",
  "collision",
  "disabled"
]} onChange={(value) => update("previewState", value)} />
    </SectionCard>
  );
}
