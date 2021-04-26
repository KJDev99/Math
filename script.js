do {
    var min = +prompt('Enter the minimum number:')
} while (isNaN(min));
do {
    var max = +prompt('Enter the maximum number:')
} while (isNaN(max));
do {
    var miqdor = +prompt('enter the number of questions:')
} while (isNaN(miqdor));

var text = document.querySelector('.text');

function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}   
var j = 0;
var answer;
function misol() {
    for (let i = 0; i < miqdor; i++) {
        var num1 = random(max, min);
        var num2 = random(max, min);
        var amal = ['+', '-', '*', '/',];
        var operator = random(3, 0);

        if (operator == 0) {
            answer = +prompt(`${num1} + ${num2} = ?`)
            res = num1 + num2;
            if (answer == res) {
                document.write(`${num1} + ${num2} = ${answer}  ✅ <br>`)
                j++
            }
            else {
                document.write(`${num1} + ${num2} = ${answer}  ❌ <br>`)
            }
        }

        if (operator == 1) {
            answer = +prompt(`${num1} - ${num2} = ?`)
            res = num1 - num2;
            if (answer == res) {
                document.write(`${num1} - ${num2} = ${answer}  ✅ <br>`)
                j++
            }
            else {
                document.write(`${num1} - ${num2} = ${answer}  ❌ <br>`)
            }
        }

        if (operator == 2) {
            answer = +prompt(`${num1} * ${num2} = ?`)
            res = num1 * num2;
            if (answer == res) {
                document.write(`${num1} * ${num2} = ${answer}  ✅ <br>`)
                j++
            }
            else {
                document.write(`${num1} * ${num2} = ${answer}  ❌ <br>`)
            }
        }

        if (operator == 3) {
            answer = +prompt(`${num1} / ${num2} = ? (Butun qismi)`)
            res = Math.floor(num1 / num2);
            if (answer == res) {
                document.write(`${num1} / ${num2} = ${answer}  ✅ <br>`)
                j++
            }
            else {
                document.write(`${num1} / ${num2} = ${answer}  ❌ <br>`)
            }
        }
    }
    p = j * 100 / miqdor;
    text.innerHTML = (`Total: ${p} %`)
}

misol();
