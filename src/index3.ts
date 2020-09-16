//==================================================================================================
// 14. 호출 시그니처
/*
 * 설명 01
 * 함수의 타입을 미리 정의해 놓고 정의한 함수의 타입을 사용하여 함수를 구현하는 방법이다.
 */
// 타입 별칭 정의
{

type Log = (message: string, userID?: string) => void;
// Log함수 타입의 변수를 정의함과 동시에 함수를 구현한다.
// 매게변수 message와 userId는 명시적인 타입을 지정하지 않아도 별칭에서 타입을 지정한 정보가 있기 때문에 string타입으로 추론할 수 있다.
let log: Log = (
    message,
    userId = 'Not signed in'
) => {
    let time = new Date().toISOString();
    console.log(time, message, userId);
}
log('msg', 'id');
}


//==================================================================================================
// 15. 문맥적 타입화
function times(f: (index: number) => void, n: number) {
    for(let i = 0; i < n; i ++) {
        f(i);
    }
}

// timers함수를 호출할 때 f매게변수에 할당되는 함수 선언을 인라인으로 제공하면 인수로 전달하는 함수의 타입을 명시할 필요가 없다.
times(n => console.log(n), 4);


//==================================================================================================
// 16. 오버로드된 함수 타입
// 함수 타입을 정의 할때 여러개를 정의해서 함수를 오버로드 할 수 있다.
type Reserve = {
    (from: Date, to: Date, destination: string): void;
    (from: Date, destination: string): void;
}

// 오버로드 함수 시그니처 타입 구현은 C#이나 자바와 다르게 다른 인자를 받는 여러 개의 함수를 구현하는 것이 아니라, 하나의 함수에서 인자의 타입이나 갯수에 따라 여러개의 분기문으로 구별된다.
let reserve: Reserve = (
    from: Date, toOrDestination: Date | string, destination?: string
) => {
    if(toOrDestination instanceof Date && destination != undefined) {
        // 편도 여행 예약
    }
    else if(typeof toOrDestination === 'string') {
        // 왕복 여행 예약
    }
}

//==================================================================================================
// 17. 제네릭 타입
// 배열의 요소를 필터링 하는 함수의 전체 타입 시그니처
type Filter<T> = {
    (array: T[], f: (item: T) => boolean): T[]
}

let filter: Filter<Number> = (array, f) => {
    let result: Number[] = [];
    
    for(let i = 0; i < array.length; i ++) {
        let item = array[i];
        if(f(item)) {
            result.push(item);
        }
    }
    return result;
}

let names = [1, 2, 3];
// 3보다 작은지 비교하는 인라인 함수(_ => _ < 3)를 두번째 인자로 넘겨 필터링 한 결과를 받는다.
console.log(filter(names, _ => _ < 3));