const str = 'This is a string with some words.';
const re = /<a(.+?) </a>/g;
const matches = str.match(re);
console.log(matches); // ["This", "is", "a", "string", "with", "some", "words"]
