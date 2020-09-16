//==================================================================================================
// 07. 함수 정의

// 이름을 붙인 함수
function greet(name: string) {
    return 'hello' + name;
}

// 함수 표현식
let greet2 = function (name: string) {
    return 'hello' + name;
}

// 화살표 함수 표현식
let greet3 = (name: string) => {
    return 'hello' + name;
}

// 단축형 화살표 함수 표현식
let greet4 = (name: string) =>
    'hello' + name;

// 함수 생성자
// 안전하지 않은 문법
// 함수 생성자는 타입이 Function으로 Function.prototype의 모든 프로토타입 메서드를 포함한다.
// 하지만 매개변수 타입과 반환 타입을 지정하지 않았으므로 어떤 인수가 전달해도 호출활 수 있으며, 이 과정에서 어떤 문제가 발생할지 예측할 수 없다.
let greet5 = new Function('name', 'return "Hello" + name');


//==================================================================================================
// 08. 선택적 매개변수
function log(message: string, userId?: string) {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
}
log('Page loaded');
log('Page loaded', 'da763br');


//==================================================================================================
// 09. 나머지 매개변수
// 인수를 여러개 받을때 배열 형태로 받을 수 있다.
function sum(numbers: number[]) {
    return numbers.reduce((total, n) => total + n, 0)
}
sum([1, 2, 3]);  // 6으로 평가

// arguments 키워드로 동일하게 여러개의 인수를 받는 파라메터를 정의할 수 도 있다.
function sumVariadic() {
    return Array
        .from(arguments)
        .reduce((total, n) => total + n, 0);
}
//sumVariadic(1, 2, 3);  // 에러

// 하지만 arguments는 전혀 안전하지 않은 방법이다.
// 매개변수를 any타입으로 추론하기 때문에 잘못된 타입을 전달 받았을 경우 이후 문제 발생을 예측할 수 없다.
// 따라서 arguments 대신 나머지 매개변수 형식으로 사용하는 것이 좋다.
function sumVariadicSafe(...numbers: number[]) {
    return numbers.reduce((total, n) => total + n, 0)
}
sumVariadicSafe(1, 2, 3);  // 6으로 평가


//==================================================================================================
// 10. 함수 호출 방식
function add(a: number, b: number) {
    return a + b;
}

add(10, 20);  // 30으로 평가
add.apply(null, [10, 20]);  // 30으로 평가
add.call(null, 10, 20);  // 30으로 평가
add.bind(null, 10, 20)();  // 30으로 평가

// apply : 함수 안에서 값을 this로 한정하며(여기서는 this를 null로 한정) 두 번째 인수를 평쳐 함수에 매개변수로 전달
// call : apply와 같은 기능을 수행하지만 평쳐 전달하지 않고 순서대로 전달
// bind : this 인수를 함수의 인수 목록으로 한정한다(여기서는 this를 null로 한정) bind는 함수를 호출하지 않고 새로운 함수를 반화하는데 개발자는 ()나 .call을 이용해 반환된 함수를 호출하거나 .apply로 아직 한정하지 않은 매게 변수를 추가로 전달


//==================================================================================================
// 11. this 타입
{
    let x = {
        a() {
            return this;
        }
    }
    x.a()  // a()의 바디안에서 this는 객체 x

    // 하지만 호출이 일어나기 전 어느 시점에서 a를 다시 할당하면 결과가 달라진다!
    let a = x.a;
    a()  // 이제 a()의 바디 안에서 this는 정의되지 않은 상태임
}

// 날짜의 타입을 포매팅 하는 유틸리티 함수
function fancyDate() {
    //return `${this.getDate()} / ${this.getMonth() + 1} / ${this.getFullYear()}`;
}
// fancyDate함수내 this로 한정할 Date를 제공해줘야 정상적으로 날짜 관련 함수 사용이 가능하다.
//console.log(fancyDate.call(new Date));
// 깜빡하고 Date를 한정하지 않으면 런타임 예외가 발생한다., 이 처럼 this는 함수를 어떻게 호출하느냐에 따라 영향을 받는다.
//console.log(fancyDate());  // 에러


//==================================================================================================
// 12. 제네레이터 함수
/*
 * 설명
 * 제네레이터는 여러개의 값을 생성하는 편리한 기능을 제공한다.
 * 제네레이터 함수를 이용하면 값을 생산하는 속도도 정교하게 조절할 수 있다.
 * 제네레이터 함수는 게으르게 동작(호출되었을때 실행됨.)하기 때문에 무한의 목록을 생성하기 같은 까다로운 기능을 제공할 수 있다.
 */
function* createFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while(true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let fibonacciGenerator = createFibonacciGenerator();
console.log(fibonacciGenerator.next());  // { value: 0, done: false }로 평가
console.log(fibonacciGenerator.next());  // { value: 1, done: false }로 평가
console.log(fibonacciGenerator.next());  // { value: 1, done: false }로 평가
console.log(fibonacciGenerator.next());  // { value: 2, done: false }로 평가
console.log(fibonacciGenerator.next());  // { value: 3, done: false }로 평가
console.log(fibonacciGenerator.next());  // { value: 5, done: false }로 평가
console.log(fibonacciGenerator.next());  // { value: 8, done: false }로 평가

// 01. 함수명 앞에 붙연 별표(*)는 제너레이터임을 의미한다. 제너레이터를 호출하면 이터러블 반복자가 반환된다.
// 02. yield키워드로 값을 리턴한다. 제너레이터에 다음 값을 요청하면(예: next호출), yield를 이용해 결과를  리턴하고 다음 값을 요청하기 전까지는 실행을 중지한다.
// 03. [a, b] = [b, a + b]; 피보나치 숫자를 계산하기 위해 a에 b를, b에 a + b를 한번에 다시 할당한다.


//==================================================================================================
// 13. 반복자
/*
 * 설명 01
 * 이터러블(iterable) : Symbol.iterator라는 프로퍼티(반복자를 반환하는 함수)를 가진 모든 객체
 * 반복자(iterator) : next라는 메서드(value, done 두 프로퍼티를 가진 객체를 반환)를 정의한 객체
 */

 /*
 * 설명 02
 * 가령 위에서 정의한 createFibonacciGenerator 함수를 호출하면 Symbol.iterator 프로퍼티와 next 메서드를 모두 정의한 값을 얻게 된다.
 * 즉, 이터러블과 반복자 두 가지가 결합된 제너레이터가 반환된다.
 */

 // Symbol.iterator와 next를 구현하는 객체(또는 클래스)를 만들어 반복자나 이터러블을 직접 정의 할 수 있다.
 // 1에서 10까지의 숫자를 반복하는 반복자를 정의하는 예
 let numbers = {
     *[Symbol.iterator]() {
         for (let n = 1; n <= 10; n ++) {
             yield n;
         }
     }
 }

 // numbers는 이터러블이며, 제너레이터 함수 numbers[Symbol.iterator]()를 호출하면 이터러블 반복자가 반환된다.
 // for - of로 반복자 처리
 for (let a of numbers) {
     console.log(a);  // 1, 2, 3 .. 출력
 }

 // 반복자 스프레드
 let allNumbers = [...numbers];

 // 반복자 구조 분해 할당(destructure)
 let [one, two, ...rest] = numbers;