//함수 선언식
function hello(name) {
  console.log(`안녕 ${name}`);
}

// 함수 표현식
const sum = (a, b) => {
  const result = a + b;
  console.log(result);
};

const sumA = (a, b) => a + b;

hello("박현정");
sum(1, 2);
sumA(1, 8);
