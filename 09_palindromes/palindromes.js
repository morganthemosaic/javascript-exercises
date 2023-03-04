const palindromes = function (originalString) {
    const regex = /\W/g;
    const modifiedString = originalString.replace(regex, "").toLowerCase();

    for(let i = 0; i < modifiedString.length; i++){
        if(modifiedString[i] !== modifiedString[modifiedString.length - i - 1]){
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
