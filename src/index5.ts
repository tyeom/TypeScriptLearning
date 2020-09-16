//==================================================================================================
// 19-01. 디자인 패턴 [팩토리 패턴(factory pattern)]
/*
 * 설명
 * 어떤 객체를 만들지를 전적으로 팩토리에 위임한다.
 */
interface IShoe {
    purpose: string;
    work(): void;
}

class BalletFlat implements IShoe {
    purpose = 'dancing';

    public work(): void {
        console.log('purpose: ', this.purpose);
    }
}

class Boot implements IShoe {
    purpose = 'woodcutting';

    public work(): void {
        console.log('purpose: ', this.purpose);
    }
}

class Sneaker implements IShoe {
    purpose = 'walking';

    public work(): void {
        console.log('purpose: ', this.purpose);
    }
}

// 타입 IShoe 변수에 값 IShoe를 정의해 (타입스크립트는 값과 타입의 네임스페이스를 따로 관리) 해당 타입과 관련한 메서드를 제공한다는 정보를 드러냈다.
let Shoe = {
    create(type: 'balletFlat' | 'boot' | 'sneaker'): IShoe {
        switch(type) {
            case 'balletFlat':
                return new BalletFlat();
            case 'boot':
                return new Boot();
            case 'sneaker':
                return new Sneaker();
            default :
                throw new Error('알수 없는 타입');
            
        }
    }
}

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
    private _data: object | null = null;
    private _method: 'get' | 'post' | null = null;
    private _url: string | null = null;

    // 자기 자신 RequestBuilder객체를 반환하는 setURL함수
    public setURL(url: string): this {
        this._url = url;
        return this;
    }

    // 자기 자신 RequestBuilder객체를 반환하는 setMethod함수
    public setMethod(method: 'get' | 'post'): this {
        this._method = method;
        return this;
    }

    // 자기 자신 RequestBuilder객체를 반환하는 setData함수
    public setData(data: object): this {
        this._data = data;
        return this;
    }

    public send(): void {
        console.info('url : ', this._url, 'method : ', this._method, 'data :', this._data);
    }
}

let requestHttp = new RequestBuilder()
                      .setURL('./users')
                      .setMethod('get')
                      .setData({firstName: 'Anna'})
                      .send();