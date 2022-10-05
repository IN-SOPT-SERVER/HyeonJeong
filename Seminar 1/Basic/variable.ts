const test1: string = 'hello';
console.log(typeof test1, test1);

const test2: number = 3;
console.log(typeof test2, test2);

const test3: boolean = true;
console.log(typeof test3, test3);

const test4: number = 5;


const arr3: number[] = [1, 2];
const arr4: Array<string> = ['hi', 'hello'];

arr3.map((item) => console.log("Number : ", item));
arr4.map((item) => console.log("item : ", item));

// Object 원시타입, 객체타입 모두 지원
const foo1 = (a: Object) => {
    console.log(a);
}
// object 원시타입 지원안함
const foo2 = (a: object) => {
    console.log(a);
}
foo1('hello')
// foo2('hello')
