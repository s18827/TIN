function binary_search(arr, t) {
    let l = 0, r = arr.length - 1, m;
    // one way
    while(l !== r) { 
        m = Math.floor((l+r)/2);
        console.log("l =", l, "r =", r, "m =", m);
        if(arr[m] < t) l = m + 1;
        else r = m;
    }
    if(arr[l] === t) return l;
    return "search failed";

    // or the other
    /*while(l <= r) { 
        m = Math.floor((l+r)/2);
        console.log("l =", l, "r =", r, "m =", m);
        if(arr[m] === t) return "index of t = " + m;
        else if(arr[m] < t) l = m + 1;
        else r = m - 1;
    }
    return "search failed";*/
}

console.log(binary_search([1,2,3,4,5,5,6],3));
