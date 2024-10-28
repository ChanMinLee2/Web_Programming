// 변수 타입 지정
// string, number, boolean, null, undefined, bigint, [], {}
let 이름: string = "Lee";

// array 타입 지정
let 배열: string[] = ["Lee", "Kim"];

// object 타입 지정
// 할당할 객체와 똑같이 생긴 형태를 타입으로 지정
// 속성이름에 ?로 옵션을 줄 수 있음 (있을수도 없을수도)
let 객체: { name?: string } = { name: "Lee" };

// union type으로 다양한 타입으로 지정가능
let 통합: string[] | number = 123;
통합 = ["이름"];

// 타입은 변수에 담아 쓸 수 있음 - type alias
type 내타입 = string | number;
let myType: 내타입 = "Lee";

// 함수 선언 (매개변수와 리턴의 타입 지정)
function 함수(x: number): number {
  return x * 2;
}

// array에 쓸 수 있는 tuple 타입 - 배열의 타입 포맷을 변수로 지정
type Member = [number, boolean];
let john: Member = [123, true];

// object 타입 지정 시 너무 속성이 많은 경우
// [key: string] 이라는 "모든 오브젝트 속성" 을 정의할 수 있다
type Member2 = {
  [key: string]: string;
};
let john2: Member2 = { name: "John", age: "23" };

// class 지정
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello(): void {
    console.log(`Hello, ${this.name}!`);
  }
}
