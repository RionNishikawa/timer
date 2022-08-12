import { Box, Button, ListItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { getTimerNames } from './Utils';


interface Props {
    name: string
}

export const Timer = (props: Props) => {
    const [name, setName] = useState(props.name)
    const [time, setTime] = useState(localStorage.getItem(name) ?? "00/00:00")
    const [display, setDisplay] = useState<"flex" | "none">("flex")

    const handleChange = (value: string) => {
        const timerList = getTimerNames()
        const idx = timerList.indexOf(name)
        timerList[idx] = value
        localStorage.setItem("TIMER_LIST", JSON.stringify(timerList));
        localStorage.removeItem(name);
        setName(value)
        localStorage.setItem(value, time);
    }

    const handleRegister = () => {
        const zeroPad = (num: number) =>
            String(num).padStart(2, '0')

        const date = new Date()
        // dd/hh:mm
        const timeStr = `${zeroPad(date.getDate())}/${zeroPad(date.getHours())}:${zeroPad(date.getMinutes())}`
        setTime(timeStr)
        localStorage.setItem(name, timeStr);
    }

    const handleRemove = () => {
        // 非表示にする
        setDisplay("none")
        // 全体を管理するやつ
        const timerList = getTimerNames()
        // ストレージから削除
        localStorage.removeItem(name);
        // 全体の更新
        localStorage.setItem("TIMER_LIST", JSON.stringify(timerList.filter((t) => t !== name)));
    }



    return (
        <Box sx={{ display: display, my: 2 }}>
            <TextField value={name} onChange={(e) => handleChange(e.target.value)} />
            <Typography sx={{ m: 2 }}>{time}</Typography>
            <Button variant="contained" sx={{ m: 1 }} disabled={name === ""} onClick={() => { handleRegister() }}>登録</Button>
            <Button variant="contained" sx={{ m: 1 }} onClick={() => { handleRemove() }}>削除</Button>
        </Box>
    )
}