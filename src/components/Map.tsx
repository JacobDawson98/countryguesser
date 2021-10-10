import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { colors } from "../common/constants/colors";
import { preferences } from "../common/constants/globals";

interface WorldMapProps {
  geography: string | Record<string, any> | string[] | undefined;
  selectedCountry: string;
  setSelectedCountry: (rsmKey: string) => void;
}

function getGeographyTestId(rsmKey: string): string {
  return `country-${rsmKey}`;
}

function Map(props: WorldMapProps) {
  function getGeographyFill(rsmKey: string): string {
    return props.selectedCountry === rsmKey
      ? colors[preferences.visualMode].countryPressedFill
      : colors[preferences.visualMode].countryDefaultFill;
  }

  function getGeographyHoverFill(rsmKey: string): string {
    return props.selectedCountry === rsmKey
      ? colors[preferences.visualMode].countryPressedFill
      : colors[preferences.visualMode].countryHoverFill;
  }

  return (
    <div
      data-testid="Map"
      style={{
        backgroundColor: colors[preferences.visualMode].seaColor,
      }}
    >
      <ComposableMap>
        <ZoomableGroup zoom={1}>
          <Geographies geography={props.geography}>
            {({ geographies }) =>
              geographies.map((geography) => (
                <Geography
                  data-testid={getGeographyTestId(geography.rsmKey)}
                  key={geography.rsmKey}
                  geography={geography}
                  fill={getGeographyFill(geography.rsmKey)}
                  stroke={colors[preferences.visualMode].countryOutline}
                  strokeWidth="0.3"
                  onClick={() => props.setSelectedCountry(geography.rsmKey)}
                  style={{
                    default: {
                      outline: "none",
                    },
                    hover: {
                      fill: getGeographyHoverFill(geography.rsmKey),
                      outline: "none",
                    },
                    pressed: {
                      fill: colors[preferences.visualMode].countryPressedFill,
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}

export default Map;
