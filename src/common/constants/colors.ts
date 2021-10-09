interface ColorOptions {
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
  countryHoverFill: '#17a9ff',
  countryPressedFill: '#171AFF',
  countryDefaultFill: '#E4E5E6',
  countryOutline: '#232323',
};
const dark: ColorOptions = {
  ...light,
};

export const colors: Colors = {
  light,
  dark,
};
