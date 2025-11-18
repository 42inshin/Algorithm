const isValid = (skill, tree) => {
    // skill 을 순서대로 확인한다. 모두 없으면 통과. 있으면 순서대로 쌓여야 함.
    let t = tree.split("").filter((c) => skill.includes(c))
    
    if (t.length == 0) return 1;
    
    let count = 0;
    let i = 0;
    t.forEach((c) => {
        if (skill[i] === c) i++;
    })
    return (t.length === i) ? 1 : 0
}

function solution(skill, skill_trees) {
    let answer = 0;
    
    skill_trees.map((tree) => {
        answer+= isValid(skill, tree);
    })
    return answer;
}