function maxProduct(numbers: number[]) {
    if (numbers.length < 3) {
        throw new Error("List must contain at least 3 numbers");
    }
    numbers.sort(function (a, b) { return a - b; });
    const productOfLast3 = numbers[numbers.length-1] * numbers[numbers.length-2] * numbers[numbers.length-3]
    // If we have 2 negative numbers
    const productFirstLast2 = numbers[numbers.length-1] * numbers[0] * numbers[1]
    const max = Math.max(productOfLast3, productFirstLast2)
    return max
}
try {
    let numbers: number[] = [1, 10, 2, 6, 5, 3];
    console.log("[1, 10, 2, 6, 5, 3]")
    let result = maxProduct(numbers);
    console.log("Result: ",result);
    numbers = [2, 1, 3, 4, 0];
    console.log("[2, 1, 3, 4, 0]")
    result = maxProduct(numbers);
    console.log("Result: ",result);
     numbers = [0, 3, 2, 4, 0, 1];
    console.log("[0, 3, 2, 4, 0, 1]")
    result = maxProduct(numbers);
    console.log("Result: ",result);
    numbers = [0, 4, 2, 0, 0, 1, 3];
    console.log("[0, 4, 2, 0, 0, 1, 3]")
    result = maxProduct(numbers);
    console.log("Result: ",result);
    numbers = [2, 4, -5, 3, 5, 1];
    console.log("[2, 4, -5, 3, 5, 1]")
    result = maxProduct(numbers);
    console.log("Result: ",result);
    numbers = [2, 4, -5, 3, 5, 1, -7];
    console.log("[2, 4, -5, 3, 5, 1, -7]")
    result = maxProduct(numbers);
    console.log("Result: ",result);
    numbers = [-7, 2, 4, -5, 3, -9, 5, 1];
    console.log("[-7, 2, 4, -5, 3, -9, 5, 1]")
    result = maxProduct(numbers);
    console.log("Result: ",result);
    numbers = [-4, -2, -3, -1, -5];
    console.log("[-4, -2, -3, -1, -5]")
    result = maxProduct(numbers);
    console.log("Result: ",result);
    numbers = [6, -3, -5, -7, -9];
    console.log("[6, -3, -5, -7, -9]")
    result = maxProduct(numbers);
    console.log("Result: ",result);
} catch (error: any) {
    console.error(error.message);
}
