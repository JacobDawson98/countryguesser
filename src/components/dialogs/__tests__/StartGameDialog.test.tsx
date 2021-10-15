import { render, RenderResult } from "@testing-library/react";
import { Maps } from "../../Game";
import StartGameDialog from "../StartGameDialog";

describe("StartGameDialog", () => {
  describe("Appearance when the game has not been started", () => {
    let instance: RenderResult;
    let onCloseDialogMock: jest.Mock<any>;
    let onSelectMapMock: jest.Mock<any>;
    let startGameMock: jest.Mock<any>;

    beforeEach(() => {
      onCloseDialogMock = jest.fn();
      onSelectMapMock = jest.fn();
      startGameMock = jest.fn();

      instance = render(
        <StartGameDialog
          onCloseDialog={onCloseDialogMock}
          isPlayingGame={false}
          mapSelection={Maps.WorldMap}
          onSelectMap={onSelectMapMock}
          startGame={startGameMock}
        />
      );
    });

    it("should have a title", () => {
      expect(instance.queryByText("Countryguesser")).toBeVisible();
    });

    it("should prompt the user to select a map", () => {
      expect(instance.queryByText("Select the map you want to play")).toBeVisible();
    });

    it("should have a start game button", () => {
      expect(instance.queryByText("Start Game")).toBeVisible();
    });

    it("should start the game if the start game button has been clicked", () => {
      const startGameButton = instance.queryByText("Start Game");
      startGameButton?.click();

      expect(startGameMock).toBeCalledTimes(1);
      expect(startGameMock).toBeCalledWith();
    });
  });
});
