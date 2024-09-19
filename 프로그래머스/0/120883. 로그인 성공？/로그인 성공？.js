/*
function solution(id_pw, db) {
    var index = db.findIndex(v => v[0] == id_pw[0]);
    if (index < 0) 
        return "fail";
    return db[index][1] == id_pw[1] ? "login" : "wrong pw";
}
*/

// Map 써보기
function solution(id_pw, db) {
    const [id, pw] = id_pw;
    const map = new Map(db)
    
    return map.get(id) ? map.get(id) == pw ? "login" : "wrong pw" : "fail"
}