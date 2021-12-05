// #1
const H = 'Hello ';
const W = 'World';

const HW = H.concat(W); //string

// #2
interface IMyHometask{
    howIDoIt: string,
    simeArray: (string | number) [],
    withData: {
        howIDoIt: string;
        simeArray: (string | number)[];
    }[]
}

const MyHometask: IMyHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// #3
const MyArray: IMyArray<number> = [1,2,3];
interface IMyArray<T> {
    [N: number]: T;

    reduce(fn: (accumulator: T, value: T) => T, initialValue:T): T
}
const initialValue = 0;

MyArray.reduce((accumulator, value) => accumulator + value, initialValue);// TS не ругается, но я не знаю, как проверить свой результат...
[1,2,3].reduce((accumulator, value) => accumulator + value, initialValue); // -> 6

// #4
interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}
type MyPartial<T> = {
    [N in keyof /*берёт ключи из объектов*/ T] ?: T[N] extends object ? MyPartial<T[N]> : T[N]
}
const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}

