let data1 = prompt("Enter any value1 : ");
let data2 = prompt("Enter any value2 : ");
let cdata1 = parseInt(data1);
let cdata2 = parseInt(data2);

function myzodiac(a, b, ily) {
    let z = a + b;
    console.log(`${z} ${a} + ${b} is ${ily}`);
    document.getElementById("hContent").innerHTML = (`${z} ${a} + ${b} is ${ily}`);
}
myzodiac(cdata1, cdata2, "I love you");