import { Container, AppBar, Typography, Box, Button, Stack } from "@mui/material";
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
        <Stack direction={"row"} justifyContent="space-between">
          <Typography variant='h5' sx={{ m: 2 }}>Timer App</Typography>
          <Button sx={{ m: 1 }} variant="contained" color="info" size="small" onClick={addTimer}>追加</Button>
        </Stack>
      </AppBar>
      <Container>
        {timers()}
      </Container>
    </Box>
  );
}

export default App;