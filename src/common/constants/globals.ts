interface Preferences {
  visualMode: 'dark' | 'light';
}

// TODO: Support dynamically setting preferences per user
export const preferences: Preferences = {
  visualMode: 'dark',
};
