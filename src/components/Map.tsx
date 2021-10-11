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
  selectedCountry: number;
  setSelectedCountryRsmKey: (rsmKey: number) => void;
}

function getGeographyTestId(rsmKey: number): string {
  return `country-${rsmKey}`;
}

function geoRsmKeyToRsmKey(geoRsmKey: string): number {
  return parseInt(geoRsmKey.substring(geoRsmKey.indexOf("-") + 1));
}

function Map(props: WorldMapProps) {
  function getGeographyFill(rsmKey: number): string {
    return props.selectedCountry === rsmKey
      ? colors[preferences.visualMode].countryPressedFill
      : colors[preferences.visualMode].countryDefaultFill;
  }

  function getGeographyHoverFill(rsmKey: number): string {
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
              geographies.map((geography) => {
                const rsmKey = geoRsmKeyToRsmKey(geography.rsmKey);
                return (
                  <Geography
                    data-testid={getGeographyTestId(rsmKey)}
                    key={geography.rsmKey}
                    geography={geography}
                    fill={getGeographyFill(rsmKey)}
                    stroke={colors[preferences.visualMode].countryOutline}
                    strokeWidth="0.3"
                    onClick={() =>
                      props.setSelectedCountryRsmKey(rsmKey)
                    }
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        fill: getGeographyHoverFill(rsmKey),
                        outline: "none",
                      },
                      pressed: {
                        fill: colors[preferences.visualMode].countryPressedFill,
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}

export default Map;
