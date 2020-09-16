"use strict";
//==================================================================================================
Object.defineProperty(exports, "__esModule", { value: true });
class Cata {
    constructor() {
        this.name = 'Whiskers';
    }
    eat(food) {
        console.info('Ate some', food, '. Mmm!');
    }
    sleep(hours) {
        console.info('slept for', hours, 'hours');
    }
    meow() {
        console.info('Meow');
    }
}
let cat1 = new Cata();
cat1.eat('aaa');
cat1.sleep(20);
//==================================================================================================
// 18-01. 클래스는 구조 기반 타입을 지원한다.
/*
 * 설명 01
 * C#, 자바, 스칼라를 포함해 이름으로 클래스 타입을 지정하는 언어와는 다르게
 * 똑같은 프로퍼티와 메서드가 정의 되어 있다면 클래스의 형태를 공유하는 다른 모든 타입과 호환된다.
 */
class Zebra {
    trot() {
    }
}
class Poodle {
    trot() {
    }
}
function ambleAround(animal) {
    animal.trot();
}
let zebra = new Zebra();
let poodle = new Poodle();
ambleAround(zebra);
ambleAround(poodle); // Zebra객체가 아닌 Zebra클래스의 형태와 똑같은 Poodle객체를 인자로 넘겨도 오류가 나지 않는다.
/*
 * 설명 02
 * 단, private이나 protected 필드를 갖는 클래스는 상황이 다르다.
 * 클래스에 private이나 protected 필드가 있고, 할당하려는 클래스나 서브클래스의 인스턴스가 아니라면 할당 할 수 없다.
 */
class A {
    constructor() {
        this.x = 1;
    }
}
class B extends A {
}
function f(a) { }
f(new A()); // 정상
f(new B()); // 정상
//f({x: 1});  // 오류
class AA {
    constructor() {
        this.x = 1;
    }
}
class BB extends AA {
}
function ff(a) { }
ff(new AA()); // 정상
ff(new BB()); // 정상
ff({ x: 1 }); // 정상
//==================================================================================================
// 18-02. 다형성
class MyMap {
    constructor(initialKey, initialValue) {
        this._map = new Map();
        this._map.set(initialKey, initialValue);
    }
    get(key) {
        return this._map.has(key) ? this._map.get(key) : null;
    }
    set(key, value) {
        if (this._map.has(key) == false) {
            this._map.set(key, value);
        }
    }
}
let a_MyMap = new MyMap('k', 1);
let b_MyMap = new MyMap('k', true);
console.log(a_MyMap.get('k')); // 1 출력
b_MyMap.set('kk', true);
console.log(b_MyMap.get('kk')); // true 출력
//# sourceMappingURL=index4.js.map