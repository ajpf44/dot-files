const str = '<a s0dkad0kasdada > important content </a>';

const matches = str.match(/<a>(.+?)\s<\/a>/g);
console.log(matches); // ["important content"]
