//Говорят, что это важная и сложная тема)))

const myArray: myArray<number> = [1,2,3]; // это Generic, вроде, как. Массив, который вернёт число. Сейчас будем смотреть, что внутри.

interface myArray<T> {
    [N: number]: T

    map<U>(fn: (el: T, index: number, arr: myArray<T>) => U): myArray<U>
}

let X = myArray[1];

myArray.map((f, index, arr) => f + 1);

function identity<T>(arg: T): T { // Generic - это как аргкменты функции, только для типов. их можно обьявлять и присваивать.
    return arg;
}
let result = identity(5);//присвоили тип number

function getLen<T extends Array<any>>(arr: T) { // в этой функции мы сделали Generic T рсширяющий тип Array (<T extends Array<any>>)
    return arr.length;
}

// Встроенные Generics

interface IExemple<T>{
    type: string;
    value: T;
    isEmpty: boolean;
}

// const omittedObj: Omit<IExemple<string>, 'isEmpty'> = {
//     // Выкидывает ключи из интерфейсов. В данном случае, ключ "isEmpty".
// }
// const pickedObj: Pick<IExemple<string>, 'isEmpty'> = {
//     // Забирает ключи из интерфейсов. В данном случае, ключ "isEmpty".
// }
const partial: Partial<IExemple<string>> = {
    // Делает все ключи не обязательными. Говорят, что Partial опасен.
}