let reg = new RegExp("^[0-9]*$",'g');
var state = reg.test('1222');
// console.log(state)

let reg1 = new RegExp("^[a-zA-Z]*$",'g');
let zimu = reg1.test('safdsdddd')
// console.log(zimu)

let reg2 = new RegExp("[A-Z|a-z|0-9]*$","g");
let zmsz = reg2.test('AFFFFsdss55554ss');
// console.log(zmsz);

let reg3 = new RegExp("[0-9]{3}");
let sfz = reg3.test('155')   ;
// console.log(sfz)

let reg4 = new RegExp("^\@+[a-z]{2}$");
let dhh = reg4.test('@sa');
// console.log(dhh)

let reg5 = new RegExp("^[A-Z]{2}[a-z]{1}$");
let daxie = reg5.test('SSc');
// console.log(daxie)

// let reg6 = new RegExp("^[a-zA-Z0-9]\w+\@[a-zA-Z]+\.{com|cn|org}$");
// let email = reg6.test('675740051sdf@qq.com')
// console.log(email);

let reg6 = new RegExp("^[a-zA-Z0-9]+\@[a-zA-Z]+\.(com|cn|org)");
let email = reg6.test('dfgd454@qq.com')
console.log(email);

