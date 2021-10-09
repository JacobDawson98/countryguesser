import { useState } from "react";
import WorldGeography from "../assets/world-110m.json";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { colors } from "../common/constants/colors";
import { preferences } from "../common/constants/globals";

function getGeographyTestId(rsmKey: string): string {
  return `country-${rsmKey}`;
}

function WorldMap() {
  const [selectedCountry, setSelectedCountry] = useState("");

  function getGeographyFill(rsmKey: string): string {
    return selectedCountry === rsmKey
      ? colors[preferences.visualMode].countryPressedFill
      : colors[preferences.visualMode].countryDefaultFill;
  }

  function getGeographyHoverFill(rsmKey: string): string {
    return selectedCountry === rsmKey
      ? colors[preferences.visualMode].countryPressedFill
      : colors[preferences.visualMode].countryHoverFill;
  }

  return (
    <div data-testid="worldMap">
      <ComposableMap>
        <ZoomableGroup zoom={1}>
          <Geographies geography={WorldGeography}>
            {({ geographies }) =>
              geographies.map((geography) => (
                <Geography
                  data-testid={getGeographyTestId(geography.rsmKey)}
                  key={geography.rsmKey}
                  geography={geography}
                  fill={getGeographyFill(geography.rsmKey)}
                  stroke={colors[preferences.visualMode].countryOutline}
                  strokeWidth="0.3"
                  onClick={() => setSelectedCountry(geography.rsmKey)}
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

export default WorldMap;
