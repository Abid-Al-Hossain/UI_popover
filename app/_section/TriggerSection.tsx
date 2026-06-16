"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Input from "@/components/shared/input/Input";
import Select from "@/components/shared/input/Select";
import Switch from "@/components/shared/input/Switch";
import type { PopoverStudioState } from "../types";

type Props = {
  state: PopoverStudioState;
  update: <K extends keyof PopoverStudioState>(key: K, value: PopoverStudioState[K]) => void;
};

export default function TriggerSection({ state, update }: Props) {
  return (
    <SectionCard title="Trigger" subtitle="Trigger label and open-state model.">
      <div className="space-y-4">
      <Input label="Trigger label" value={state.triggerLabel} onChange={(value) => update("triggerLabel", value)} />
      <Select label="Open mode" value={state.openMode} options={[
  "uncontrolled",
  "controlled",
  "manual"
]} onChange={(value) => update("openMode", value)} />
      <Switch label="Default open" checked={state.defaultOpen} onChange={(value) => update("defaultOpen", value)} />
    </div>
    </SectionCard>
  );
}
