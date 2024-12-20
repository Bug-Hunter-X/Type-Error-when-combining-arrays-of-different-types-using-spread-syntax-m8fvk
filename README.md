# TypeScript Type Error with Spread Syntax
This example demonstrates a common type error in TypeScript that occurs when combining arrays of different types using the spread syntax. The function `combineArrays` aims to combine two arrays of the same type `T`, but the function is called with two arrays of differing types: `number[]` and `string[].`  This results in a type error because TypeScript cannot infer a single type `T` to accommodate both numbers and strings.

The solution showcases how to resolve this by using type assertions or generics with type constraints.