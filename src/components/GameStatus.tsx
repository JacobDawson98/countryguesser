import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface GameStatusProps {
  isPlayingGame: boolean;
  currentCountry: string;
  numMisses: number;
}

function GameStatus(props: GameStatusProps) {
  if (props.isPlayingGame) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
              Country to guess {props.currentCountry}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  return <></>;
}

export default GameStatus;
