interface ColorOptions {
  seaColor: string;
  countryDefaultFill: string;
  countryHoverFill: string;
  countryPressedFill: string;
  countryOutline: string;
}

export type Colors = {
  light: ColorOptions;
  dark: ColorOptions;
}

const light: ColorOptions = {
  seaColor: '#FFFFFF',
  countryHoverFill: '#17a9ff',
  countryPressedFill: '#171AFF',
  countryDefaultFill: '#E4E5E6',
  countryOutline: '#232323',
};
const dark: ColorOptions = {
  ...light,
  countryDefaultFill: '#4d4d4d',
  countryHoverFill: '#8c8c8c',
  seaColor: '#1a1a1a',
  countryOutline: '#FFFFFF',
};

export const colors: Colors = {
  light,
  dark,
};
