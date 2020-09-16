"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//==================================================================================================                      
// 22. 멀티 스레딩
/*
 * 설명
 * 기본적으로 타입스크립트(자바스크립트)는 한 개의 CPU 스레드에서 실행하는
 * 상황의 비동기 프로그래밍으로 처리되는데 브라우저에서 멀티 스레드를 사용한
 * 병렬 프로그램 구현이 가능하다.
 *
 * 웹 워커 라이브러리는 브라우저에서만 멀티 스레드를 사용할 수 있다.
 */
const worker_threads_1 = require("worker_threads");
function parallelProcessing() {
    let worker = new worker_threads_1.Worker('WorkerScript.js');
    // 워커에 메세지를 전달한다.
    worker.postMessage('start Work');
    worker.on('message', (result) => {
        // 워커 스레드에서 전달된 데이터 출력
        console.info(result.data);
    });
    console.info('메인 스레드는 계속 작업중..');
}
parallelProcessing();
//# sourceMappingURL=WebWorker.js.map