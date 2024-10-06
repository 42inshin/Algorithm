#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int target = -1;

void recul(cnt, x, y ,n)
    {
        if(x == y) {
            if(target == -1 || target > cnt){
                target = cnt;
            return;
            }
        }
        if(x > y){
            return;
        }
        recul(cnt + 1, x * 2, y, n);
        recul(cnt + 1, x * 3, y, n);
        recul(cnt + 1, x + n, y, n);
        return;
    };

int solution(int x, int y, int n) {
    int answer = 0;
    int cnt = 0;
    
    if(x == y){
        return 0;
    }
    
    recul(cnt, x, y ,n);
    return target;
}