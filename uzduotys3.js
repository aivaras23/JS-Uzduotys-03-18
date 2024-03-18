let h = Number(process.argv[2]);
let m = Number(process.argv[3]);
let s = Number(process.argv[4]);
let counter = s++;

if (s === 60) {
    s = 0;
    m++;
    if (m === 60) {
        m = 0;
        h++;
    }
    if (h === 24) {
        h = 0;
    }
}
console.log(`${h}:${m}:${s}`);




