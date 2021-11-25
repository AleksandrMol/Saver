// Типы переменных в Ванильном JS

const str = 'string'; //typeof str -> 'string'
const num = 4; //typeof num -> 'number'
const nan = NaN; //typeof nan -> 'namber'
const arr = []; //typeof arr -> 'object'
const obj = {}; //typeof obj -> 'object'
const nul = null; //typeof nul -> 'object'
const sym = Symbol(); //typeof sym -> 'symbol'
const und = undefined; //typeof und -> 'undefinded'
const _void = void 0; //typeof _void -> 'undefinded'
const bool = 4; //typeof bool -> 'boolean'
const fun = 4; //typeof fun -> 'function'

// Типизируем функции

enum Methods{
    add,
    sub,
}

function calculate (method: Methods, left: number, right: number): number{ // method типизируется, как строка со значениями 'add' и 'sub'. left и right как number.Функция должна вернуть number.
    switch(method) {
        case Methods.add: return left + right; //Если метод равен 'add', то верни left + right
        case Methods.sub: return left - right;
    }
}
// Если стрелочная функция
const arrowFn: typeFn = () => 2;

type typeFn = () => number;