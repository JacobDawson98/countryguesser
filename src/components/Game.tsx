import { useState } from "react";
import Geography, { Country } from '../geography/Geography';
import WorldMapGeography from '../geography/WorldMapGeography';
import Map from "./Map";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/system/Box";

enum Maps {
  WorldMap = "WorldMap",
}

export const mapsToGeography: Record<
  Maps,
  Geography
> = {
  WorldMap: WorldMapGeography,
};

const MAX_MISSES = 3;
const DUMMY_COUNTRY: Country = { name: "", rsmKey: -1 };
let numMisses = 0;
let randomizedCountries: Country[] = [];

function Game() {
  const [mapSelection, setMapSelection] = useState<Maps>(Maps.WorldMap);
  const [selectedCountryRsmKey, setSelectedCountryRsmKey] = useState(-1);
  const [isPlayingGame, setIsPlayingGame] = useState(false);
  const [countryToGuess, setCountryToGuess] = useState<Country>(DUMMY_COUNTRY);

  function resetGame(): void {
    numMisses = 0;
    setSelectedCountryRsmKey(-1);
    setCountryToGuess(DUMMY_COUNTRY);
  }

  function startGame(): () => void {
    return () => {
      randomizedCountries = mapsToGeography[mapSelection].getRandomizedCountries();
      const countryToGuess = randomizedCountries.pop();
      if (countryToGuess) {
        resetGame();
        setCountryToGuess(countryToGuess);
        console.log("Next country to guess:", countryToGuess.name);
      }
      setIsPlayingGame(true);
    }
  }

  function onCloseDialog(_: any, reason: "backdropClick" | "escapeKeyDown"): void {
    if (reason !== "backdropClick") {
      startGame();
    }
  }

  function onSelectMap(event: SelectChangeEvent<Maps>): void {
    //@ts-expect-error autofill of arbitrary value is not handled
    setMapSelection(event.target.value);
  }

  function moveOntoNextCountryToGuess(): void {
    numMisses = 0;
    const nextCountryToGuess = randomizedCountries.pop();
    if (!nextCountryToGuess) {
      resetGame();
      setIsPlayingGame(false);
      console.log("Winner!!!");
      return;
    }
    console.log("Next country to guess:", nextCountryToGuess.name);
    setCountryToGuess(nextCountryToGuess);
  }

  function makeGuess(rsmKey: number): void {
    setSelectedCountryRsmKey(rsmKey);
    const isCorrectGuess = rsmKey === countryToGuess.rsmKey;
    if (isCorrectGuess) {
      moveOntoNextCountryToGuess();
    } else {
      console.log("Wrong guess!");
      numMisses += 1;
      console.log("numMisses", numMisses);
      if (numMisses >= MAX_MISSES) {
        numMisses = 0;
        resetGame();
        setIsPlayingGame(false);
        console.log("You lost!");
      }
    }
  }

  return (
    <div>
      <Dialog
        maxWidth="lg"
        open={!isPlayingGame}
        onClose={onCloseDialog}
        disableEscapeKeyDown
      >
        <DialogTitle>Countryguesser</DialogTitle>
        <DialogContent>
          <DialogContentText>Select the map you want to play</DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          >
            <FormControl sx={{ mt: 4 }}>
              <InputLabel htmlFor="map">Map</InputLabel>
              <Select
                autoFocus
                value={mapSelection}
                onChange={onSelectMap}
                label="Map"
                inputProps={{
                  name: "map",
                  id: "map",
                }}
              >
                <MenuItem value={Maps.WorldMap}>World Map</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={startGame()}>Start Game</Button>
        </DialogActions>
      </Dialog>
      <Map
        geography={mapsToGeography[mapSelection].geography}
        selectedCountry={selectedCountryRsmKey}
        setSelectedCountryRsmKey={makeGuess}
      />
    </div>
  );
}

export default Game;
