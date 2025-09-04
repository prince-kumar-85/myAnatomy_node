const bcrypt=require('bcrypt');
const salt =10

const hash= bcrypt.hashSync('hello',salt)


console.log(hash)

const status=bcrypt.compareSync('hello',hash);

const str='Abcd'
const pwd=str.toLowerCase()
console.log(pwd)

console.log(status)

//this is the entire logic of bcrypt
//the upper case and the loower case condtio