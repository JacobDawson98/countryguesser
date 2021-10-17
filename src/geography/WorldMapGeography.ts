import Geography, { Country } from "./Geography";
// import WorldGeography from "../assets/world-110m.json";
import { arrayUtils } from "../common/utils/arrayUtils";

type GeometryProperties = {
  NAME: string;
};

type Geometry = {
  properties: GeometryProperties;
};

class WorldMapGeography extends Geography {
  public geography: Record<string, any> = {};
  private countryIds: Country[] = [];

  public async resolveImport(): Promise<void> {
    const geography = await this.geographyImport;
    if (
      geography &&
      typeof geography !== "string" &&
      !Array.isArray(geography)
    ) {
      this.geography = geography;
      this.countryIds = Array.from<Country>(
        new Set(
          geography["objects"]["ne_110m_admin_0_countries"]["geometries"].map(
            (geometry: Geometry, index: number) => ({
              name: geometry.properties.NAME,
              rsmKey: index,
            })
          )
        )
      );
    }
  }

  public getRandomizedCountries(): Country[] {
    return arrayUtils.shuffle(this.countryIds);
  }
}

const worldMapGeography = new WorldMapGeography(
  import("../assets/world-110m.json")
);
export default worldMapGeography;
