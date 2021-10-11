import Geography, { Country } from "./Geography";
import WorldGeography from "../assets/world-110m.json";
import { arrayUtils } from "../common/utils/arrayUtils";

type GeometryProperties = {
  NAME: string,
}

type Geometry = {
  properties: GeometryProperties,
}

class WorldMapGeography extends Geography {
  private countryIds: Country[];

  constructor(geography: Record<string, any>) {
    super(geography);
    this.countryIds = Array.from<Country>(
      new Set(
        geography["objects"]["ne_110m_admin_0_countries"]["geometries"].map(
          (geometry: Geometry, index: number) => ({ name: geometry.properties.NAME, rsmKey: index }),
        )
      )
    );
  }

  public getRandomizedCountries(): Country[] {
    return arrayUtils.shuffle(this.countryIds);
  }
}

const worldMapGeography = new WorldMapGeography(WorldGeography);
export default worldMapGeography;
