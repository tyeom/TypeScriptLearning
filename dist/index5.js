"use strict";
class BalletFlat {
    constructor() {
        this.purpose = 'dancing';
    }
    work() {
        console.log('purpose: ', this.purpose);
    }
}
class Boot {
    constructor() {
        this.purpose = 'woodcutting';
    }
    work() {
        console.log('purpose: ', this.purpose);
    }
}
class Sneaker {
    constructor() {
        this.purpose = 'walking';
    }
    work() {
        console.log('purpose: ', this.purpose);
    }
}
// 타입 IShoe 변수에 값 IShoe를 정의해 (타입스크립트는 값과 타입의 네임스페이스를 따로 관리) 해당 타입과 관련한 메서드를 제공한다는 정보를 드러냈다.
let Shoe = {
    create(type) {
        switch (type) {
            case 'balletFlat':
                return new BalletFlat();
            case 'boot':
                return new Boot();
            case 'sneaker':
                return new Sneaker();
            default:
                throw new Error('알수 없는 타입');
        }
    }
};
Shoe.create('sneaker').work();
//==================================================================================================                      
// 19-02. 디자인 패턴 [빌더 패턴(builder pattern)]
/*
 * 설명
 * 객체의 생성과 객체 구현 방식을 분리하여 표현할 수 있다.
 * http로 어떠한 데이터를 전송하고 요청하는 클래스가 필요한 상황이라 가정한
 * 빌더 패턴의 심플한 구조
 */
class RequestBuilder {
    constructor() {
        this._data = null;
        this._method = null;
        this._url = null;
    }
    // 자기 자신 RequestBuilder객체를 반환하는 setURL함수
    setURL(url) {
        this._url = url;
        return this;
    }
    // 자기 자신 RequestBuilder객체를 반환하는 setMethod함수
    setMethod(method) {
        this._method = method;
        return this;
    }
    // 자기 자신 RequestBuilder객체를 반환하는 setData함수
    setData(data) {
        this._data = data;
        return this;
    }
    send() {
        console.info('url : ', this._url, 'method : ', this._method, 'data :', this._data);
    }
}
let requestHttp = new RequestBuilder()
    .setURL('./users')
    .setMethod('get')
    .setData({ firstName: 'Anna' })
    .send();
//# sourceMappingURL=index5.js.map