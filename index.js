
const num1 = 31
const num2 = 2
let multiply = num1 * num2
console.log(multiply);


function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
 
let random;
random = randomNumber(1, 99999999999999999);

const num3 = 34
const num4 = 10
let div = parseInt(num3 / num4)
let mod = num3 - (div * num4)


let newSet = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let max=0;
for (let i=0; i < newSet.length; i++ ) {
    if (newSet[i] > max) {
            max = newSet[i]
        }
    }
