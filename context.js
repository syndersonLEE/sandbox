var name = 'zero';

function wow(word) {
    console.log(word + ' ' + name);
}

function say() {
    var name = 'nero';
    console.log(name);
    wow('hello');
}

say();

// hoisting


function sayWow() {
    console.log('wow');
}
var zero;
console.log(zero);
sayWow();

zero = 'zero';


var zero = 'zero';