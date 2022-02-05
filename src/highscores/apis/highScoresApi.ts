export type HighScore = {
  name: string;
  numCountriesGuessedCorrectly: number;
  timeInMs: number;
};

export async function getHighScores(): Promise<Array<HighScore>> {
  return [];
}

export async function submitHighScore(): Promise<void> {
  
}
