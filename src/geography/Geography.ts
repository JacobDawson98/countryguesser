export interface Country {
  name: string;
  rsmKey: number;
}

export default abstract class Geography {
  constructor(
    public geography: string | Record<string, any> | string[] | undefined
  ) {}
  abstract getRandomizedCountries(): Country[];
}
