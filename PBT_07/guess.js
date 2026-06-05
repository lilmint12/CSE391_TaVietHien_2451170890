var randomNumber = Math.floor(Math.random() * 100) + 1;

var count = 0;
var maxTurn = 7;

var guessedNumbers = [];

while (count < maxTurn) {

    var input = prompt("Nhập số từ 1 đến 100:");

    var guess = Number(input);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Vui lòng nhập số từ 1 đến 100!");
        continue;
    }

    var duplicated = false;

    for (var i = 0; i < guessedNumbers.length; i++) {
        if (guessedNumbers[i] == guess) {
            duplicated = true;
            break;
        }
    }

    if (duplicated) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    guessedNumbers.push(guess);

    count++;

    if (guess == randomNumber) {
        alert("Bạn đoán đúng sau " + count + " lần!");
        break;
    }

    if (guess < randomNumber) {
        alert("Cao hơn");
    } else {
        alert("Thấp hơn");
    }

    if (count == maxTurn) {
        alert(
            "Bạn đã hết lượt!\nĐáp án là: " + randomNumber
        );
    }
}var randomNumber = Math.floor(Math.random() * 100) + 1;

var count = 0;
var maxTurn = 7;

var guessedNumbers = [];

while (count < maxTurn) {

    var input = prompt("Nhập số từ 1 đến 100:");

    var guess = Number(input);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Vui lòng nhập số từ 1 đến 100!");
        continue;
    }

    var duplicated = false;

    for (var i = 0; i < guessedNumbers.length; i++) {
        if (guessedNumbers[i] == guess) {
            duplicated = true;
            break;
        }
    }

    if (duplicated) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    guessedNumbers.push(guess);

    count++;

    if (guess == randomNumber) {
        alert("Bạn đoán đúng sau " + count + " lần!");
        break;
    }

    if (guess < randomNumber) {
        alert("Cao hơn");
    } else {
        alert("Thấp hơn");
    }

    if (count == maxTurn) {
        alert(
            "Bạn đã hết lượt!\nĐáp án là: " + randomNumber
        );
    }
}