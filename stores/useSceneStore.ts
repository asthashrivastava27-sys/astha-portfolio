"use client";

import { useSyncExternalStore } from "react";

export type SectionId =
  | "hero"
  | "results"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "certifications"
  | "achievements"
  | "contact";

export type StageId = "SEARCH" | "SIGNAL" | "SYSTEM" | "GROWTH";

export type SignalType =
  | "SEARCH VISIBILITY"
  | "ORGANIC ENGAGEMENT"
  | "LEAD GENERATION"
  | "CONTENT PERFORMANCE"
  | "ORGANIC GROWTH";

export interface SignalHudInfo {
  type: SignalType;
  stream: "DISCOVER" | "ENGAGE" | "CONVERT" | "GROW";
  metricLabel: string;
  metricValue: string;
  description?: string;
}

export interface SeoPillarNode {
  id: string;
  label: string;
  category: string;
  focus: string;
}

interface SceneState {
  activeSection: SectionId;
  activeStage: StageId;
  scrollProgress: number;
  stageTransitionProgress: number;
  hoveredNode: SeoPillarNode | null;
  signalHud: SignalHudInfo | null;
}

let state: SceneState = {
  activeSection: "hero",
  activeStage: "SEARCH",
  scrollProgress: 0,
  stageTransitionProgress: 0,
  hoveredNode: null,
  signalHud: null,
};

const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export const sceneStore = {
  getState: () => state,

  setActiveSection: (section: SectionId) => {
    state = { ...state, activeSection: section };
    emitChange();
  },

  setActiveStage: (stage: StageId) => {
    state = { ...state, activeStage: stage };
    emitChange();
  },

  setScrollProgress: (progress: number) => {
    state = { ...state, scrollProgress: progress };
    emitChange();
  },

  setStageTransitionProgress: (progress: number) => {
    state = { ...state, stageTransitionProgress: progress };
    emitChange();
  },

  setHoveredNode: (node: SeoPillarNode | null) => {
    state = { ...state, hoveredNode: node };
    emitChange();
  },

  setSignalHud: (hud: SignalHudInfo | null) => {
    state = { ...state, signalHud: hud };
    emitChange();
  },

  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};

export function useSceneStore<T>(selector: (state: SceneState) => T): T {
  return useSyncExternalStore(
    sceneStore.subscribe,
    () => selector(sceneStore.getState()),
    () => selector(sceneStore.getState())
  );
}
