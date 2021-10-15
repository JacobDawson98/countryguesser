import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { colors } from "../common/constants/colors";
import { VisualMode } from "../common/constants/globals";

interface GameStatusProps {
  isPlayingGame: boolean;
  currentCountry: string;
  numMisses: number;
  visualMode: VisualMode;
}

function GameStatus(props: GameStatusProps) {
  const { visualMode, currentCountry, isPlayingGame } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: colors[visualMode].seaColor }}>
        <Toolbar>
          {isPlayingGame && (
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center" }}
            >
              Country to guess: {currentCountry}
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default GameStatus;
