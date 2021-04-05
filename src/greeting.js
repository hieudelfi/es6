
function sayHello(){
    console.log('Hello! Welcome to webpack!');
    let reg = new RegExp('script','g');
    let str = 'Javascript is a great script language';
    let result = reg.test(str);
    console.log('Result is: ' + result);

    let pattern = /[abcde]/g;
    let str1 = 'first';
    let result1 = str1.match(pattern);
    let str2 = 'SeconD';
    let result2 = str2.match(pattern);
    console.log(result1);
    console.log(result2);
    let pnum = /\d/g;
    let charlow = /\w/g;
    let charup = /[A-Z]/g;
    console.log('a34c90deeff'.match(pnum));
    console.log(str1.match(charlow));
    console.log(str2.match(charup));
    var str4 = "abcpp park";
    var pattern1 = /p+/g;

    var result11 = str4.match(pattern1);
    document.write("Test 1 - returned value : " +  result11); 
}
// sayHello.prototype.showName = function(){
//     let name = prompt('What is your name?');
//     if (name) console.log('Hi ' + name);
// }
export {sayHello}