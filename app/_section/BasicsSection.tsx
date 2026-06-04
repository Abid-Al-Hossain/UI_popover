"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Input from "@/components/shared/input/Input";
import type { PopoverStudioState } from "../types";

type Props = {
  state: PopoverStudioState;
  update: <K extends keyof PopoverStudioState>(key: K, value: PopoverStudioState[K]) => void;
};

export default function BasicsSection({ state, update }: Props) {
  return (
    <SectionCard title="Basics" subtitle="Core identity and buyer-facing copy.">
      <Input label="Title" value={state.title} onChange={(value) => update("title", value)} />
      <Input label="Description" value={state.description} onChange={(value) => update("description", value)} />
      <Input label="Body" value={state.body} onChange={(value) => update("body", value)} />
    </SectionCard>
  );
}
