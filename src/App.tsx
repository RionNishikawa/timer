import { Container, AppBar, Typography, Box, List, Button } from "@mui/material";
import { useState } from "react";

import { Timer } from './Timer';
import { getTimerNames } from "./Utils";

function App() {
  const [timerNames, setTimerNames] = useState(getTimerNames())
  const [timerNum, addTimerNum] = useState(timerNames.length)


  const addTimer = () => {
    addTimerNum(timerNum + 1)
    setTimerNames([...timerNames, ""])
  }

  // const timers = () => {
  //   const list = []
  //   for (let i = 0; i < timerNum; i++) {
  //     list.push(<Timer key={i} name={timerNames[i]} />)
  //   }
  //   return list
  // }

  const timers = () => timerNames.map((t, i) => <Timer key={i} name={t} />)


  return (
    <Box>
      <AppBar position="static">
        <Typography variant='h3' sx={{ m: 2 }}>Timer App</Typography>
      </AppBar>
      <Container>
        {timers()}
        <Box position="fixed" right={100} bottom={100}>
          <Button disabled={timerNames.includes("")} variant="contained" size="large" onClick={addTimer}>追加</Button>
        </Box>
      </Container>
    </Box>
  );
}

export default App;