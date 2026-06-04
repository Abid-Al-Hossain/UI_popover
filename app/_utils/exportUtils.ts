import type { PopoverStudioState } from "../types";

export type ExportPayload = {
  fileName: string;
  mimeType: "text/plain;charset=utf-8";
  content: string;
};

export function buildExportPayload(state: PopoverStudioState, fileName = "popover") : ExportPayload {
  return {
    fileName: `${fileName || "popover"}.jsx`,
    mimeType: "text/plain;charset=utf-8",
    content: buildReactCode(state),
  };
}

export function buildReactCode(state: PopoverStudioState) {
  return [
    "import * as React from \"react\";",
    "",
    "const state = " + JSON.stringify(state, null, 2) + ";",
    "",
    "export default function PopoverComponent() {",
    "  return (",
        "    <div>",
    "      <button id={state.triggerId} type=\"button\" aria-haspopup=\"dialog\" aria-expanded={state.defaultOpen} aria-controls={state.contentId}>{state.triggerLabel}</button>",
    "      <section id={state.contentId} role=\"dialog\" aria-labelledby={state.labelledBy} aria-describedby={state.describedBy} style={{ width: state.width, padding: state.padding, borderRadius: state.radius, border: `${state.borderWidth}px solid ${state.border}`, boxShadow: `0 ${Math.round(state.shadow / 3)}px ${state.shadow}px rgba(0,0,0,.34)`, background: state.background, color: state.foreground, fontFamily: state.fontFamily }}>",
    "        <h3 id={state.labelledBy}>{state.title}</h3>",
    "        <p id={state.describedBy}>{state.description}</p>",
    "        <p>{state.body}</p>",
    "        <button type=\"button\">{state.primaryAction}</button>",
    "      </section>",
    "    </div>",
    "  );",
    "}",
    "",
  ].join("\n");
}
