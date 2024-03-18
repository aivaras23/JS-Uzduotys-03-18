const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
const c = Number(process.argv[4]);

const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
const width = (2 * area) / b;

console.log(+width.toFixed(3));