function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

let arr1: number[] = [1, 2, 3];
let arr2: string[] = ['a', 'b', 'c'];

// Solution 1: Type Assertion
let combined1: (number | string)[] = combineArrays(arr1 as any, arr2 as any);

// Solution 2: Generic with Type Constraint (More robust)
function combineArrays2<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

//This will now throw an error at compile time
//let combined2: number[] = combineArrays2(arr1, arr2);

//Correct Usage of combineArrays2
let arr3: string[] = ['a', 'b', 'c'];
let arr4: string[] = ['d', 'e', 'f'];
let combined3: string[] = combineArrays2(arr3,arr4); 