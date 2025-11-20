// fees: 기본시간, 기본요금, 단위시간(분) 단위요금
// records: [시간 차번호 INOUT, ... ]
// result: 주차 요금 배열(차량번호 작은 순)

// 조건: 출차 기록이 없는 경우 23:59에 출차 된걸로 계산

// 계산식
// const parkingFee = defaultFee + Math.ceil((defaultTime + parkedTime) / unitTime) * unitFee

const convertHHMMtoMin = (HHMM) => {
    const [HH, MM] = HHMM.split(":");
    return Number(Number(HH) * 60 + Number(MM));
}

function solution(fees, records) {
    const [defaultTime, defaultFee, unitTime, unitFee] = fees;
    const lastHHMM = "23:59";
    
    // 차량별 누적 주차 시간 계산
    const cars = {};
    
    records.sort((a, b) => {
        const aArr = a.split(' ');
        const bArr = b.split(' ');
        return Number(aArr[1]) - Number(bArr[1]);
    })
    
    for (let i= 0; i < records.length; i++) {
        const [HHMM, carNum, INOUT] = records[i].split(" ");
        // 차량 번호 추가
        if (INOUT === "IN") {
            if (i + 1 <= records.length - 1) {
                const [nextHHMM, nextCarNum, nextINOUT] = records[i + 1].split(" ");
                if (carNum === nextCarNum && INOUT === "IN" && nextINOUT === "OUT") {
                    cars[carNum] = (cars[carNum] || 0) + convertHHMMtoMin(nextHHMM) - convertHHMMtoMin(HHMM);
                } else if (INOUT === "IN") {
                    cars[carNum] = (cars[carNum] || 0) + convertHHMMtoMin(lastHHMM) - convertHHMMtoMin(HHMM);    
                }
            } else {
                cars[carNum] = (cars[carNum] || 0) + convertHHMMtoMin(lastHHMM) - convertHHMMtoMin(HHMM);
            }
        }    
    }
    
    const carsValue = Object.keys(cars).sort().map(key => cars[key]);
    const result = carsValue.map((parkedTime) => {
        const time = parkedTime - defaultTime < 0 ? 0 : parkedTime - defaultTime
        return defaultFee + Math.ceil((time / unitTime)) * unitFee
    })
    return result
}