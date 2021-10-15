import { render } from "@testing-library/react";
import { VisualMode } from "../../common/constants/globals";
import GameStatus from "../GameStatus";

describe('GameStatus', () => {
  const currentCountry = "Nicaragua";

  it("should not render anything if the game isn't being played", () => {
    const rendered = render(
      <GameStatus
      isPlayingGame={false}
      currentCountry={currentCountry}
      numMisses={1}
      visualMode={VisualMode.dark}
      />
    ); 

    expect(rendered.queryByText(`Country to guess: ${currentCountry}`)).toBeFalsy();
  });   

  it("should show the next country to guess if the game is being played", () => {
    const rendered = render(
      <GameStatus
      isPlayingGame
      currentCountry={currentCountry}
      numMisses={0}
      visualMode={VisualMode.dark}
      />
    ); 

    expect(rendered.queryByText(`Country to guess: ${currentCountry}`)).toBeVisible();
  });   

  it("should show the next country to guess if the game is being played and the number of misses", () => {
    const rendered = render(
      <GameStatus
      isPlayingGame
      currentCountry={currentCountry}
      numMisses={2}
      visualMode={VisualMode.dark}
      />
    ); 

    expect(rendered.queryByText(`Country to guess: ${currentCountry}. Misses: 2`)).toBeVisible();
  });   
});
