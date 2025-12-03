function solution(bridge_length, weight, truck_weights) {
    // 경과 시간
    let time = 0;
    // 다리 위: [차 무게, 다리 지나갈 시간]
    let q = [[0,0]]
    // 다리 위 무게
    let weight_on_bridge = 0;
    
    while (truck_weights.length > 0 || q.length > 0) {
        // 다리 건너기
        if (q[0][1] == time) weight_on_bridge -= q.shift()[0];
        
        // 대기 트럭 다리 건널수 있는지 확인
        if (weight_on_bridge + truck_weights[0] <= weight) {
            weight_on_bridge += truck_weights[0];
            q.push([truck_weights.shift(), time + bridge_length]);
        } 
        // else {
        //     time = q[0][1] - 1;
        // }
        
        time++;
    }
    
    return time;
}