//==================================================================================================                      
// 20. 비동기 Promise사용
import { resolve } from "path";

function getData(url: string): Promise<string> {
    return new Promise((resolve) => {
        let data: string | null = null;
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
function work1(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            let data = 'Data1 received complete';
            resolve(data);
        }, 2000);
    });
}
// 작업이 오래걸리는 함수2
function work2(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            let data = 'Data2 received complete';
            resolve(data);
        }, 2000);
    });
}

async function getDataAsync(url: string) {
    try {
        let data: string | null = null;

        // 비동기 처리 함수의 타입은 Promise 타입이어야 await가 가능하다.
        data = await work1();
        console.info(data);

        data = await work2();
        console.info(data);
    }  catch(error) {
        console.error(error);
    }
}

getDataAsync('http://aaa.com/api/getdata_async');
console.info('데이터 요청중..');