function checkOddEven(num: number): string {
    if (num % 2 === 0) {
        return `${num} 是偶數`;
    } else {
        return `${num} 是奇數`;
    }
}

for (let i = 1; i <= 10; i++) {
    console.log(checkOddEven(i));
}