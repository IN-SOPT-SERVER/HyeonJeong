const condition: boolean = true;

//* 최초 생성 시점
const promised = new Promise((resolve, reject) => {
    if (condition) {
        resolve("우와 Promise다!");
    } else {
        reject(new Error("비동기 처리 도중 실패!"));
    }
});

//* 비동기 처리 성공(then), 비동기 처리 실패(catch)
promised
    .then((resolvedData): void => console.log(resolvedData)) //성공한경우
    .catch((error): void => console.log(error)); //실패한 경우