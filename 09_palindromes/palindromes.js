const palindromes = function (originalString) {
    for(let i = 0; i < originalString.length; i++){
        if(originalString[i] !== originalString[originalString.length - i - 1]){
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
