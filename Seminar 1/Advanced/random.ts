/* 
도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기
*/

import Dinner from "./interface/Dinner";
import Member from "./interface/Member";

const dinner: Dinner = {
    members: [
        {
            name: "권세훈",
            group: "ob",
        },
        {
            name: "박현정",
            group: "yb",
        },
        {
            name: "김동재",
            group: "ob",
        },
        {
            name: "김다현",
            group: "yb",
        },
        {
            name: "현세빈",
            group: "ob",
        },
        {
            name: "이종현",
            group: "ob",
        },
        {
            name: "김규원",
            group: "yb",
        },

    ],
    menu: ["계란말이", "김치볶음밥", "마라탕", "까르보나라", "떡볶이", "삼겹살"],

    shuffle(items) { //랜덤하게 섞은 뒤 반환
        items.sort(() => Math.random() - 0.5);
        return items;
    },

    organize(members, menu) {
        this.shuffle(members);
        this.shuffle(menu);

        const yb = members.find((members) => members.group === 'yb') as Member;
        const ob = members.find((members) => members.group === 'ob') as Member;

        if (yb && ob) {
            const dinnerMember: string[] = [];
            dinnerMember.push(yb.name);
            dinnerMember.push(ob.name);
            console.log(`${dinnerMember[0]}님과, ${dinnerMember[1]}님은 저녁으로 ${menu[1]}을 드세요!`);
        }

    },
};

dinner.organize(dinner.members, dinner.menu);