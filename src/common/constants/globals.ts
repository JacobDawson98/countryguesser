export enum VisualMode {
  light = "light",
  dark = "dark",
}

export interface Preferences {
  visualMode: VisualMode;
}

// TODO: Support dynamically setting preferences per user
export const preferences: Preferences = {
  visualMode: VisualMode.dark,
};
