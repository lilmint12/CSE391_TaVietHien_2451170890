// Version 1: Classic
// In 1-100. Chia hết 3 → "Fizz", chia hết 5 → "Buzz", 
// chia hết cả 2 → "FizzBuzz"

// Version 2: Custom
// Viết hàm customFizzBuzz(n, rules) 
// rules = mảng [{ divisor: 3, word: "Fizz" }, { divisor: 5, word: "Buzz" }, ...]
// Hàm phải hoạt động với BẤT KỲ bộ rules nào

// Test:
customFizzBuzz(30, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);
// → 21 = "FizzJazz", 15 = "FizzBuzz", 35 = "BuzzJazz", 105 = "FizzBuzzJazz"