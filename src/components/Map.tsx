import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { colors } from "../common/constants/colors";
import { VisualMode } from "../common/constants/globals";
import CGGeography from "../geography/Geography";

interface WorldMapProps {
  geography: CGGeography;
  selectedCountry: number;
  setSelectedCountryRsmKey: (rsmKey: number) => void;
  visualMode: VisualMode;
}

function getGeographyTestId(rsmKey: number): string {
  return `country-${rsmKey}`;
}

function geoRsmKeyToRsmKey(geoRsmKey: string): number {
  return parseInt(geoRsmKey.substring(geoRsmKey.indexOf("-") + 1), 10);
}

function Map(props: WorldMapProps) {
  const { visualMode, geography, selectedCountry, setSelectedCountryRsmKey } =
    props;
  const [resolvedGeography, setResolvedGeography] =
    useState<string | Record<string, any> | string[] | undefined>(undefined);

  useEffect(() => {
    async function loadGeography() {
      console.log('begin loadGeography', geography.geography)
      if (!geography.geography || Object.keys(geography.geography).length === 0) {
        await geography.resolveImport();
        setResolvedGeography(geography.geography);
        console.log('setResolvedGeography');
      }
    }
    loadGeography();
    console.log('useEffect called loadGeography')
  });

  function getGeographyFill(rsmKey: number): string {
    return selectedCountry === rsmKey
      ? colors[visualMode].countryPressedFill
      : colors[visualMode].countryDefaultFill;
  }

  function getGeographyHoverFill(rsmKey: number): string {
    return selectedCountry === rsmKey
      ? colors[visualMode].countryPressedFill
      : colors[visualMode].countryHoverFill;
  }

  return (
    <div
      data-testid="Map"
      style={{
        backgroundColor: colors[visualMode].seaColor,
      }}
    >
      <ComposableMap>
        <ZoomableGroup zoom={1}>
          <Geographies geography={resolvedGeography}>
            {({ geographies }) =>
              geographies.map((geography) => {
                const rsmKey = geoRsmKeyToRsmKey(geography.rsmKey);
                return (
                  <Geography
                    data-testid={getGeographyTestId(rsmKey)}
                    key={geography.rsmKey}
                    geography={geography}
                    fill={getGeographyFill(rsmKey)}
                    stroke={colors[props.visualMode].countryOutline}
                    strokeWidth="0.3"
                    onClick={() => setSelectedCountryRsmKey(rsmKey)}
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        fill: getGeographyHoverFill(rsmKey),
                        outline: "none",
                      },
                      pressed: {
                        fill: colors[visualMode].countryPressedFill,
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
