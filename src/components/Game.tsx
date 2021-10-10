import { useState } from "react";
import WorldGeography from "../assets/world-110m.json";
import Map from "./Map";

enum Maps {
  WorldMap = "WorldMap",
}

export const mapsToGeography: Record<
  Maps,
  string | Record<string, any> | string[] | undefined
> = {
  WorldMap: WorldGeography,
};

function Game() {
  const [mapSelection] = useState<Maps>(Maps.WorldMap);
  // const [countryToFind, setCountryToFind] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  return (
    <div>
      <Map geography={mapsToGeography[mapSelection]} selectedCountry={selectedCountry} setSelectedCountry={(rsmKey: string) => setSelectedCountry(rsmKey)} />
    </div>
  );
}

export default Game;
