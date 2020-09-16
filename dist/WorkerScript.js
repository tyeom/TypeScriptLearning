"use strict";
// 딜레이 sleep함수
function sleep(delay) {
    let start = new Date().getTime();
    while (new Date().getTime() < start + delay)
        ;
}
onmessage = e => {
    console.info('start work');
    sleep(3000);
    console.info('end work');
    postMessage("작업 완료!");
};
//# sourceMappingURL=WorkerScript.js.map