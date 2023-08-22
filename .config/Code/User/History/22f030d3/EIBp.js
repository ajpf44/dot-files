const str = '<a s0dkad0kasdada > important content </a>';
const re = /<a>(.*?)\s<\/a>/g;
const matches = str.match(re);
console.log(matches); // ["important content"]
