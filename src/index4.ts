//==================================================================================================

import { createRequireFromPath } from "module";
import { format } from "path";
import { Stats } from "fs";

// 18. 클래스/인터페이스
interface Animal {
    readonly name: string;
    eat(food: string): void;
    sleep(hours: number): void;
}

interface Feline {
    meow(): void;
}

class Cata implements Animal, Feline {
    name = 'Whiskers';
    eat(food: string) {
        console.info('Ate some', food, '. Mmm!');
    }
    sleep(hours: number) {
        console.info('slept for', hours, 'hours');
    }
    meow() {
        console.info('Meow');
    }
}

let cat1: Cata = new Cata();
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

function ambleAround(animal: Zebra) {
    animal.trot();
}

let zebra = new Zebra();
let poodle = new Poodle();

ambleAround(zebra);
ambleAround(poodle);  // Zebra객체가 아닌 Zebra클래스의 형태와 똑같은 Poodle객체를 인자로 넘겨도 오류가 나지 않는다.



class A {
    private x: Number = 1;
}
class B extends A {}
function f(a: A) {}

f(new A());  // 정상
f(new B());  // 정상
//f({x: 1});  // 오류

class AA {
    public x: Number = 1;
}
class BB extends AA {}
function ff(a: AA) {}

ff(new AA());  // 정상
ff(new BB());  // 정상
ff({x: 1});  // 정상


//==================================================================================================
// 18-02. 다형성
class MyMap<K, V> {
    _map: Map<K, V> = new Map<K, V>();

    constructor(initialKey: K, initialValue: V) {
        this._map.set(initialKey, initialValue);
    }
    get(key: K): V | null | undefined {
        return this._map.has(key) ? this._map.get(key) : null;
    }
    set(key: K, value: V): void {
        if(this._map.has(key) == false) {
            this._map.set(key, value);
        }
    }
}

let a_MyMap = new MyMap<string, number>('k', 1);
let b_MyMap = new MyMap('k', true);
console.log(a_MyMap.get('k'));  // 1 출력
b_MyMap.set('kk', true);
console.log(b_MyMap.get('kk'));  // true 출력