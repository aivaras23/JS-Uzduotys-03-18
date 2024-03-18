const getNumber = Number(process.argv[2]);
let counter = 0;
let isOlympicYear = false;

for (let i = 1896; i <= 2024; i = i + 4) {
    counter++;
    if (getNumber === i) {
        isOlympicYear = true;
        break;
    }
}

if (isOlympicYear) {
    console.log(`${getNumber} yra ${counter} olimpiniai metai`)
}
else {
    console.log(`${getNumber} nera olimpiniai metai`)
}
