import { useState } from "react";
import WorldGeography from "../assets/world-110m.json";
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
  string | Record<string, any> | string[] | undefined
> = {
  WorldMap: WorldGeography,
};

function Game() {
  const [mapSelection, setMapSelection] = useState<Maps>(Maps.WorldMap);
  const [selectedCountryRsmKey, setSelectedCountryRsmKey] = useState("");
  const [isPlayingGame, setIsPlayingGame] = useState(false);
  function startGame(): () => void {
    return () => setIsPlayingGame(true);
  }
  function onCloseDialog(reason: "backdropClick" | "escapeKeyDown"): void {
    if (reason !== "backdropClick") {
      startGame();
    }
  }
  function onSelectMap(event: SelectChangeEvent<Maps>): void {
    // @ts-expect-error autofill of arbitrary value is not handled
    setMapSelection(event.target.value);
  }

  return (
    <div>
      <Dialog
        maxWidth="lg"
        open={!isPlayingGame}
        onClose={(_, reason) => onCloseDialog(reason)}
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
                onChange={(event) => onSelectMap(event)}
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
        geography={mapsToGeography[mapSelection]}
        selectedCountry={selectedCountryRsmKey}
        setSelectedCountryRsmKey={(rsmKey: string) =>
          setSelectedCountryRsmKey(rsmKey)
        }
      />
    </div>
  );
}

export default Game;
