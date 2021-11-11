import { render } from "@testing-library/react";
import { VisualMode } from "../../common/constants/globals";
import { mapsToGeography } from "../Game";
import Map, { mapZoomableGroupProps } from "../Map";

describe("Map", () => {
  describe("Zooming", () => {
    it("should have a default zoom of 1 and max zoom of 20", () => {
      expect(mapZoomableGroupProps).toEqual({
        zoom: 1,
        maxZoom: 20,
      });
    });
  });

  describe("render", () => {
    it("should render the world map when given the world map", () => {
      const rendered = render(
        <Map
          geography={mapsToGeography["WorldMap"].geography}
          selectedCountry={125}
          setSelectedCountryRsmKey={jest.fn()}
          visualMode={VisualMode.dark}
        />
      );
      const worldMap = rendered.getByTestId("Map");

      expect(worldMap).toBeDefined();
    });
  });
});
