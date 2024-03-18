function isArmstrong(num) {
    const splitNum = String(num).split('').map(Number);
    const trec = splitNum.map(n => n * n * n);
    let sum = trec.reduce((a, b) => a + b);
    return sum === num;
}

for (let num = 100; num <= 999; num++) {
    if (isArmstrong(num)) {
        console.log(num);
    }
}


