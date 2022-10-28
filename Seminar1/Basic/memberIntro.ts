// 1. 서버 파트원 소개하는 객체 만들기
interface MEMBER {
    name: string;
    age: number;
    food: string;
    mbti: string;
    address: string
}

// 2. 파트원 소개 배열에 타입으로 저장할 인터페이스 생성 및 타입 지정
const members: MEMBER[] = [
    {
        name: "박현정",
        age: 24,
        food: "회",
        mbti: "ESFJ",
        address: "상동"
    },
    {
        name: "조하얀",
        age: 24,
        food: "초밥",
        mbti: "INTP",
        address: "용산"
    },
    {
        name: "이서우",
        age: 24,
        food: "버블티",
        mbti: "ESFJ",
        address: "당산"
    }
]

// 3. 모든 파트원 소개 출력하기
members.map((members) => console.log(`${members.name}는 ${members.age}살이고 ${members.address}에 살고, ${members.food}를 좋아하고, 저의 MBTI는 ${members.mbti} 입니다.`))
