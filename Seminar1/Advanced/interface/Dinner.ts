import Member from "./Member"

export default interface Dinner {
    members: Member[];
    menu: string[];
    shuffle(items: any[]): any[];
    organize(members: Member[], menu: string[]): void;
}