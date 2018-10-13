function add(number){

    if(number == "" || number == "\n") {
        return 0;
    }

    if(number[0] == "/") {
        // Fann aðferð hér "https://stackoverflow.com/questions/494035/how-do-you-use-a-variable-in-a-regular-expression"
        var delimeter = number[2];
        var re = new RegExp(delimeter,"g");
        number = number.replace(re, ",");
    }
    // Fann aðferð hér "https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript"
    number = number.replace(/\n/g, ",");
    var numberlist = number.split(",");
    var sum = 0;
    var negarray = [];

    for(var i = 0; i < numberlist.length; i++) {
        if(Number(numberlist[i]) <= 1000){
            // Kanna negative tölur
            if (Number(numberlist[i]) < 0) {
                negarray.push(numberlist[i]);
            }
            sum += Number(numberlist[i]);
        }
        
    }
    if(negarray.length > 0){
        throw new Error(`Negatives not allowed: ${negarray}`);
    }
    return sum;
};

module.exports = add;