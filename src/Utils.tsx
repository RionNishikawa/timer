export const getTimerNames = (): string[] => {
    const timerList = localStorage.getItem("TIMER_LIST")
    if (timerList) {
        return JSON.parse(timerList)
    }
    return [""]
}

// export const updateTimerNames = (value = "") => {
//     if (value) {
//         // 全体を管理するやつ
//         const timerList = getTimerNames()
//         const newList = timerList.filter((t) => {
//             if (t === value) {

//             }
//         })
//     } else {
//         localStorage.setItem("TIMER_LIST", JSON.stringify([...getTimerNames(), value]));
//     }
// }