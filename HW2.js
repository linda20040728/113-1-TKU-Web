function checkOddEven(num) {
    if (num % 2 === 0) {
        return "".concat(num, " \u662F\u5076\u6578");
    }
    else {
        return "".concat(num, " \u662F\u5947\u6578");
    }
}
for (var i = 1; i <= 10; i++) {
    console.log(checkOddEven(i));
}
