"use client";

import type { CSSProperties } from "react";
import type { PopoverStudioState } from "../types";

function panelStyle(state: PopoverStudioState): CSSProperties {
  return {
    width: state.sameWidth ? 260 : state.width,
    maxHeight: state.maxHeight,
    padding: state.padding,
    gap: state.gap,
    borderRadius: state.radius,
    border: `${state.borderWidth}px solid ${state.border}`,
    boxShadow: `0 ${Math.round(state.shadow / 3)}px ${state.shadow}px rgba(0,0,0,.34)`,
    background: state.background,
    color: state.foreground,
    fontFamily: state.fontFamily,
    transform: state.previewState === "closed" ? "scale(.96)" : "scale(1)",
    opacity: state.previewState === "closed" ? 0.35 : 1,
    transition: state.reducedMotion ? "none" : `all ${state.duration}ms ease`,
  };
}

export default function LivePreview({ state }: { state: PopoverStudioState }) {
  const arrowOffset = state.side === "top" || state.side === "bottom" ? { left: "50%", transform: "translateX(-50%)" } : { top: "50%", transform: "translateY(-50%)" };
  return (
    <div className="relative grid min-h-[420px] place-items-center">
      {state.showOverlay && <div className="absolute inset-0 rounded-3xl" style={{ background: `rgba(2,6,23,${state.overlayOpacity / 100})` }} />}
      <button id={state.triggerId} type="button" aria-haspopup="dialog" aria-expanded={state.previewState !== "closed"} aria-controls={state.contentId} className="rounded-xl px-4 py-3 font-bold" style={{ background: state.accent, color: "#020617" }}>{state.triggerLabel}</button>
      <section id={state.contentId} role="dialog" aria-labelledby={state.labelledBy} aria-describedby={state.describedBy} style={panelStyle(state)} className="absolute grid" data-side={state.side} data-align={state.align}>
        {state.showArrow && <span aria-hidden="true" className="absolute h-0 w-0" style={{ ...arrowOffset, borderLeft: `${state.arrowSize}px solid transparent`, borderRight: `${state.arrowSize}px solid transparent`, borderBottom: state.side === "top" ? `${state.arrowSize}px solid ${state.background}` : undefined, borderTop: state.side === "bottom" ? `${state.arrowSize}px solid ${state.background}` : undefined }} />}
        <div className="grid gap-2">
          <h3 id={state.labelledBy} style={{ fontSize: state.titleSize, fontWeight: state.fontWeight }}>{state.title}</h3>
          <p id={state.describedBy} style={{ color: state.muted }}>{state.description}</p>
          <p style={{ fontSize: state.bodySize }}>{state.body}</p>
        </div>
        <div className="flex gap-2"><button type="button" className="rounded-xl px-4 py-2 text-sm font-bold" style={{ background: state.accent, color: "#020617" }}>{state.primaryAction}</button><button type="button" className="rounded-xl border px-4 py-2 text-sm font-bold" style={{ borderColor: state.border, color: state.foreground }}>{state.secondaryAction}</button></div>
        <p className="text-xs" style={{ color: state.muted }}>side={state.side}, align={state.align}, escape={String(state.closeOnEscape)}, outside={String(state.closeOnInteractOutside)}</p>
      </section>
    </div>
  );
}
