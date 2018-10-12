function add(number){
    
    if(number == "")
    {
        return 0;
    }
    var numberlist = number.split(",");
    var sum = 0;
    for(var i = 0; i < numberlist.length; i++) {
        sum += Number(numberlist[i]);
    }
    return sum;
};


module.exports = add;