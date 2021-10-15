import { render } from "@testing-library/react";
import { VisualMode } from "../../common/constants/globals";
import GameStatus from "../GameStatus";

describe('GameStatus', () => {
  it("should not render anything if the game isn't being played", () => {
    const currentCountry = "Nicaragua";
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
    const currentCountry = "Nicaragua";

    const rendered = render(
      <GameStatus
      isPlayingGame
      currentCountry={currentCountry}
      numMisses={1}
      visualMode={VisualMode.dark}
      />
    ); 

    expect(rendered.queryByText(`Country to guess: ${currentCountry}`)).toBeVisible();
  });   
});
