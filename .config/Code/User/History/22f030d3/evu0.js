const str = '<a s0dkad0kasdada > important content </a>'
const re = /<a(.+?) <\/a>/g;
const matches = str.match(re);
console.log(matches); // ["This", "is", "a", "string", "with", "some", "words"]
