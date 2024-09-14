function solution(video_len, pos, op_start, op_end, commands) {
    var videoLen = getTime(video_len);
    var pos = getTime(pos);
    var op = [getTime(op_start), getTime(op_end)];
    
    pos = checkOp(pos, op);
    for (const c of commands) {
        pos = commandHandler(videoLen, pos, c, op)
    }
    return timeToString(pos);
}

function getTime(time) {
    var time = time.split(":").map(t => parseInt(t))
    return time[0] * 60 + time[1] 
}


function checkOp(pos, op) {
    return (op[0] <= pos && pos <= op[1]) ? op[1] : pos;
}

function commandHandler(videoLen, pos, command, op) {
    const t = 10;
    
    if (command == "next") {
        pos += t
        if (pos > videoLen) 
            pos = videoLen
    } else {
        pos -= t
        if (pos < 0)
            pos = 0;
    }
    pos = checkOp(pos, op);
    return pos
}

function timeToString(time) {
    const hour = String(parseInt(time / 60)).padStart(2, "0");
    const min = String(parseInt(time % 60)).padStart(2, "0");
    
    return `${hour}:${min}`
}