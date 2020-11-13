function amountToCoins(money, coinsArr) {
    if(money <= 0) return "Enter valid amount of money";
    let outputArr = [];
    let sortedNominArr = coinsArr.sort((a,b) =>  b - a);
    /*for(let i = 0; i < coinsArr.length; i++){
        while(money - sortedNominArr[i] >= 0) {
            money -= sortedNominArr[i];
            outputArr.push(sortedNominArr[i]);
        }
    }*/
    // better solution
    while (money > 0) {
        if(money >= sortedNominArr[0]) {
            outputArr.push(sortedNominArr[0]);
            money -= sortedNominArr[0];
        }
        else sortedNominArr.shift();
    }
    return outputArr.join(', ');
}

console.log(amountToCoins(46, [1, 10, 5, 25, 2]));
