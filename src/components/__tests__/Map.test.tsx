import { render } from "@testing-library/react";
import { mapsToGeography } from "../Game";
import Map from "../Map";

describe("Map", () => {
  it("should render the world map when given the world map", () => {
    const rendered = render(
      <Map
        geography={mapsToGeography["WorldMap"]}
        selectedCountry=""
        setSelectedCountryRsmKey={jest.fn()}
      />
    );
    const worldMap = rendered.getByTestId("Map");

    expect(worldMap).toBeDefined();
  });
});
