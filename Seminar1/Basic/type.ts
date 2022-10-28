const hi = (name: string): void => {
    console.log(`${name}아 안녕`)
}

const sums = (a: number, b: number) => {
    return a + b;
}

hi('현정');
console.log("합은 ? ", sums(2, 3));

// as 사용
let test11: any = '이종현'
const nameLength = (test11 as string).length
console.log(nameLength)

// angle-bracket 사용
const test12: any = '이서우씌'
const nameLength2 = (<string>test12).length
console.log(nameLength2)