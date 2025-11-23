function solution(record) {
    const userMap = new Map();
    for (let s of record) {
        const [action, id, nickname] = s.split(" ");
        if (action === "Enter")
            userMap.set(id, nickname)
        else if (action === "Change") {
            userMap.set(id, nickname)
        }
    }
    
    return record.map((s) => {
        const [action, id, nickname] = s.split(" ");
        let content = ""
        if (action === "Enter")
            content = "님이 들어왔습니다.";
        else if (action === "Leave")
            content = "님이 나갔습니다."
        else return undefined; 
        return `${userMap.get(id)}${content}`
    }).filter(v => v != undefined);
}