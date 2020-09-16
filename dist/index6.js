"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function getData(url) {
    return new Promise((resolve) => {
        let data = null;
        setTimeout(() => {
            data = 'Data received complete';
            resolve(data);
        }, 2000);
    });
}
getData('http://aaa.com/api/getdata').then((data) => {
    console.info(data);
})
    .catch((err) => {
    console.info('오류 발생');
});
console.info('데이터 요청중..');
//==================================================================================================                      
// 21. 비동기 async, await
// 작업이 오래걸리는 함수1
function work1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let data = 'Data1 received complete';
            resolve(data);
        }, 2000);
    });
}
// 작업이 오래걸리는 함수2
function work2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let data = 'Data2 received complete';
            resolve(data);
        }, 2000);
    });
}
function getDataAsync(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = null;
            // 비동기 처리 함수의 타입은 Promise 타입이어야 await가 가능하다.
            data = yield work1();
            console.info(data);
            data = yield work2();
            console.info(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
getDataAsync('http://aaa.com/api/getdata_async');
console.info('데이터 요청중..');
//# sourceMappingURL=index6.js.map