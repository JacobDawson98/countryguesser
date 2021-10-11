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
import { Maps } from "../Game";

interface StartGameDialogProps {
  isPlayingGame: boolean;
  onCloseDialog: (
    _: Record<string, unknown>,
    reason: "backdropClick" | "escapeKeyDown"
  ) => void;
  mapSelection: Maps;
  onSelectMap: (event: SelectChangeEvent<Maps>) => void;
  startGame: () => () => void;
}

function StartGameDialog(props: StartGameDialogProps) {
  const { isPlayingGame, onCloseDialog, mapSelection, onSelectMap, startGame } =
    props;

  return (
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
  );
}

export default StartGameDialog;
