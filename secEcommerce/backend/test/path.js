import path from 'path'
// console.log(path);
const filepath = path.join('backend','test','path.js');
console.log(filepath);

console.log(path.resolve('backend','test','path.js'));


console.log(path.basename('/backend/test/path.js')); // Output: 'file.txt'
console.log(path.basename('/backend/test/path.js', '.js'));


console.log(path.dirname('/backend/test/path.js'));

const parsedPath = path.parse('/backend/test/path.js');
console.log(parsedPath);