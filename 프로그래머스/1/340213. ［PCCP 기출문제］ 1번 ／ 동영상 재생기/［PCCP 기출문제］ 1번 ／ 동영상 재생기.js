function solution(video_len, pos, op_start, op_end, commands) {
    var videoLen = getSec(video_len);
    var pos = getSec(pos);
    var op = [getSec(op_start), getSec(op_end)];
    
    pos = checkOp(pos, op);
    for (const c of commands) {
        pos = commandHandler(videoLen, pos, c, op)
    }
    return secToString(pos);
}

// 문자를 초로 변경
function getSec(time) {
    var time = time.split(":").map(t => parseInt(t))
    return time[0] * 60 + time[1] 
}

// 오프닝 시간대인지 확인
function checkOp(pos, op) {
    return (op[0] <= pos && pos <= op[1]) ? op[1] : pos;
}

// 커맨드에 따라서 시간 변경
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

// 초를 문자열으로 변경
function secToString(time) {
    const min = String(parseInt(time / 60)).padStart(2, "0");
    const sec = String(parseInt(time % 60)).padStart(2, "0");
    
    return `${min}:${sec}`
}