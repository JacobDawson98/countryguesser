import { render } from "@testing-library/react";
import GameStatus from "../GameStatus";

describe('GameStatus', () => {
  it("should not render anything if the game isn't being played", () => {
    const rendered = render(
      <GameStatus
      isPlayingGame={true}
      />
    ); 
  });   
});
