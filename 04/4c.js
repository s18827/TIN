function check_palindrome(str){
    console.log(str);
    if(typeof str !== 'string') {
        console.log("Not a string");
        return false;
    }
    let modifStr = str.toLowerCase().replace(/[^a-zA-Z]+/g,'');
    if(modifStr==="") {
        console.log("Empty string");
        return false;
    }
    let count = 0;
    if((modifStr.length) % 2 === 0) {
        count = (modifStr.length) / 2;
    } else {
        if(modifStr.length === 1 ) {
            console.log("String is a palindrome");
            return true;        
        } else {
            count = (modifStr.length - 1) / 2;
        }
    }
    for(let i = 0; i < count; i++) {
        if(modifStr[i] != modifStr.slice(-1-i)[0]) {
            console.log("String is not a palindrome");
            return false;
        }
    }
    console.log("String is a palindrome");
    return true;
}

check_palindrome('Abba');
check_palindrome('Do geese see God?');
check_palindrome('Dammit, I\'m mad');
check_palindrome('devil');
check_palindrome('');
check_palindrome('k');
check_palindrome(666);
