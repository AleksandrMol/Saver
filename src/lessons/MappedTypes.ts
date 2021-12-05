// Типы, проводящие операции над другими типами.
const mistake = []; // Изначально, массив принимает в себя любые значения, ...
mistake.push(1);
mistake.push('1');

//... но можно типизировать массив так
const notMistake = [] as Array<number>; // насильно привели тип number
notMistake.push(1); // можно пушить только number
// notMistake.push('1'); - будет ошибкой

// про typeof 
// допустим, у нас есль БОЛЬШОЙ объект
const bigObject = {
    "name": "Vanya",
    "id": "a76cf23aadafcfd46cccddfd769acccfdc127acdfffa80",
    "male": true,
    "birdthDate": {
        "day": 11,
        "mounth": "September",
        "year": 2001
    },
    "number": 445,
}
//Представим, что он огромный))
//Можно выяснить и записать типы всех элементов объекта с помощью typeof

type TMyBigObject = typeof bigObject; // теперь у нас есть объект со всеми типами всех элементов bigObject. Удобно))
const typedBigObject: MyReadonlyDeep<TMyBigObject> = bigObject;// переписали типы в другую переменные и сделали readonly, но только внешние ключи.

// как работает Readonly?
type TObjKeys = keyof TMyBigObject;
type TNameType = TMyBigObject['birdthDate'];

type MyReadonly<T> = {
    readonly [N in keyof /*берёт ключи из объектов*/ T]: T[N]
}
// const some: MyReadonly<TMyBigObject> = {
//     name: "Vanya",
// }

// type MyPartialDeep<T> = {
//     [N in keyof /*берёт ключи из объектов*/ T] ?: T[N] extends object ? MyPartialDeep<T[N]> : T[N]
// }
type MyReadonlyDeep<T> = {
    readonly [N in keyof /*берёт ключи из объектов*/ T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N]
}
