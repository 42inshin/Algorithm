function solution(bridge_length, weight, truck_weights) {
    // 경과 시간
    let time = 0;
    let trucks = [...truck_weights].reverse();
    
    
    // 대기에서 다리로 옮긴 마지막 트럭 인덱스
    let bridgeIndex = 0;
    // 완료한 트럭의 인덱스
    let completeIndex = 0;
    // 다리 위의 차들
    const trucksOnBridge = new Map();
    let trucksIndexOnBridge = [];
    // 다리 위 무게
    let weightOnBridge = 0;

    while (trucks.length > 0 || trucksIndexOnBridge.length > 0) {
        
        // 2. 다리에서 지나는 차들
        for (let i = completeIndex; i < bridgeIndex; i++) {
            let carTime = trucksOnBridge.get(i)
            if (carTime < bridge_length) {
                trucksOnBridge.set(i, carTime + 1);
            } else {
                trucksIndexOnBridge.shift();
                trucksOnBridge.delete(i);
                weightOnBridge -= truck_weights[i]
                completeIndex = i + 1;
            }    
        }
        
        // 1. 다리에 올리기
        let waitTruck = trucks.at(-1);
        if (waitTruck && weightOnBridge + waitTruck <= weight) {
            let oneTruck = trucks.pop();
            trucksOnBridge.set(bridgeIndex, 1);
            trucksIndexOnBridge.push(bridgeIndex);
            ++bridgeIndex;
            // 다리에 올라간 차 무게
            weightOnBridge += oneTruck;
        }
        
        time++;
    }
    
    return time;
}