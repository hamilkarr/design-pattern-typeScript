console.log('Hello, new world2!');

type lastFunction = <T>(arr: T[]) => T;
type prependFunction = <T, V>(arr: T[], item: V) => (T | V)[];
type mixFunction = <T, V>(arr1: T[], arr2: V[]) => (T | V)[];
type countFunction = <T>(arr: T[]) => number;
type findIndexFunction = <T>(arr: T[], item: T) => number | null;
type sliceFunction = <T>(
    arr: T[],
    startIndex: number,
    endIndex?: number
) => T[];

const last: lastFunction = (arr) => {
    return arr[arr.length - 1];
};
const prepend: prependFunction = (arr, item) => {
    return [item, ...arr];
};
const mix: mixFunction = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
const count: countFunction = (arr) => {
    return arr.length;
};
const findIndex: findIndexFunction = (arr, item) => {
    return arr.indexOf(item) === -1 ? null : arr.indexOf(item);
};
const slice: sliceFunction = (arr, startIndex, endIndex) => {
    return arr.slice(startIndex, endIndex);
};
