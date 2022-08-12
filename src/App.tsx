import { Container, AppBar, Typography, Box, Button } from "@mui/material";
import { useState } from "react";

import { Timer } from './Timer';
import { getTimerNames } from "./Utils";

function App() {
  const [timerNames, setTimerNames] = useState(getTimerNames())
  const [timerNum, addTimerNum] = useState(timerNames.length)


  const addTimer = () => {
    addTimerNum(timerNum + 1)
    const newTimerNames = [...getTimerNames(), ""]
    setTimerNames(newTimerNames)
    localStorage.setItem("TIMER_LIST", JSON.stringify(newTimerNames))

  }

  const timers = () => timerNames.map((t, i) => <Timer key={i} name={t} />)


  return (
    <Box>
      <AppBar position="static">
        <Typography variant='h5' sx={{ m: 2 }}>Timer App</Typography>
      </AppBar>
      <Container>
        {timers()}
        <Box position="fixed" right={100} bottom={100}>
          <Button variant="contained" size="large" onClick={addTimer}>追加</Button>
        </Box>
      </Container>
    </Box>
  );
}

export default App;