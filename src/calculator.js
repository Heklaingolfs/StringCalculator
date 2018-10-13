function add(number){

    if(number == "" || number == "\n")
    {
        return 0;
    }
    // Fann aðferð hér "https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript"
    var noNewLine = number.replace(/\n/g, ",");
    var numberlist = noNewLine.split(",");
    var sum = 0;
    for(var i = 0; i < numberlist.length; i++) {
        // Kanna negative tölur
        if (Number(numberlist[i]) < 0) {
            throw new Error(`Negatives not allowed: ${numberlist[i]}`);
        }
        sum += Number(numberlist[i]);
    }
    return sum;
};

module.exports = add;