function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

let arr1: number[] = [1, 2, 3];
let arr2: string[] = ['a', 'b', 'c'];

let combined: number[] = combineArrays(arr1, arr2); // Type Error