"use strict";
// 오류
/*
let a : object = {
    b: 'x'
}

console.log(a.b);
*/
//==================================================================================================
// 01. 객체 리터럴 문법
let c = {
    firstName: 'aa',
    lastName: 'bbb'
};
console.log(`firstName : ${c.firstName} lastName : ${c.lastName}`);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
c = new Person('aaa', 'bb1'); // 속성 값의 형싟에 맞는 클래스를 대입할 수 도 있다.
let cc = new Person('aaa', 'bb1');
console.log(`firstName : ${cc.firstName} lastName : ${cc.lastName}`);
let age = 55;
let myInfo = {
    name: '밍',
    age: 17
};
//==================================================================================================
// 02-01. 타입의 유효 영역
if (true) {
    let myInfo = {
        name: '밍',
        age: 17,
        job: '건물주, 카페사장'
    };
    console.log(`name : ${myInfo.name} age : ${myInfo.age} job : ${myInfo.job}`);
}
// 다시 처음 정의한 MyInfo타입을 바라봄
let aaa = {
    name: '밍',
    age: 17,
};
// CarOrDogOrBoth타입을 이용해 Cat으로 만들기
let 멀티애완 = {
    name: '먼지',
    purrs: true
};
// dog로 변신
멀티애완 = {
    name: '푸',
    baarks: true,
    wags: true
};
// 잡종으로 변신
멀티애완 = {
    name: '먼지&푸',
    purrs: true,
    baarks: true,
    wags: true
};
// 변신못하는 온전한 잡종
let 온전한잡종 = {
    name: '먼지&푸',
    purrs: true,
    baarks: true,
    wags: true
};
//==================================================================================================
// 04. 배열
let a = [1, 2, 3]; // number 타입 배열
let b = ['a', 'b']; // string 타입 배열
let cArr = ['a']; // string 타입 배열
let d = [1, 'a']; // string 타입 또는 number 타입 배열
b.push('bbb');
//b.push(true);  <- 오류
d.push('ccc');
d.push(222);
//d.push(true);  <- 오류
d.map(_ => {
    if (typeof _ === 'number') {
        console.log(`${_}값의 타입은 number 입니다.`);
    }
    else {
        console.log(`${_}값의 타입은 string 입니다.`);
    }
});
//==================================================================================================
// 05. null, underfined, void, never
/*
 * 설명 01.
 * undefined : 아직 정의되지 않음
 * null : 값이 없음
 * void : 아무것도 반환하지 않음
 * never : 절대 반환하지 않음 (항상 예외발생, 영원히 계속 실행)
 */
/*
* 설명 02.
* ※ 엄격한 null 확인
* 예전 버전의 타입스크립트(또는 TSC의 strictNullChecks 옵션을 false로 설정)에서는  null이 조금 다르게 동작한다.
* 이때 null은 never를 제외한 모든 타입의 하위 타입이다.
* 즉, 모든 타입은 null이 될 수 있으므로 모든 값이 null인지 아닌지를 먼저 확인하지 않고는
* 타입이 무엇이라고 단정할 수 없다.
* 예를 들어 pizza가 null인지 확인한 다음에 그 동작을 수행할 수 있다.
* 이 때문에 예상치 않은 상황에서 값이 null이라면 런타임에 치며ㅛㅇ적인 널 포인터 예외가 발생한다.
*/
// number | null 반환 함수
function aFun(x) {
    if (x < 10) {
        return x;
    }
    return null;
}
// undefined 반환 함수
function bFun() {
    return undefined;
}
// never 반환 함수 01
function cFun() {
    throw TypeError('I always error');
    ;
}
// never 반환 함수 02
function dFun() {
    while (true) {
        // TODO : doSomething();
    }
}
// void 반환 함수
function eFUn() {
    let aa = 2 + 2;
    let bb = aa * aa;
}
//==================================================================================================
// 06. 열거형
var Language;
(function (Language) {
    Language[Language["English"] = 100] = "English";
    Language[Language["Spanish"] = 500] = "Spanish";
    Language[Language["Russian"] = 501] = "Russian"; // 타입스크립트가 500 다음 숫자인 501로 추론
})(Language || (Language = {}));
// 열거형에 문자열 값을 사용하거나 문자열과 숫자 값을 혼합할 수 있다.
var Color;
(function (Color) {
    Color["Red"] = "#C10000";
    Color["Blue"] = "#0007AC1";
    Color["Pink"] = "0xc10050";
    Color[Color["White"] = 255] = "White"; // 10진수 리터럴
})(Color || (Color = {}));
//# sourceMappingURL=index.js.map