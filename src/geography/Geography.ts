export interface Country {
  name: string;
  rsmKey: number;
}

export default abstract class Geography {
  abstract geography: string | Record<string, any> | string[] | undefined;
  constructor(
    public geographyImport: Promise<
      string | Record<string, any> | string[] | undefined
    >
  ) {}
  abstract getRandomizedCountries(): Country[];

  abstract resolveImport(): Promise<void>;
}
