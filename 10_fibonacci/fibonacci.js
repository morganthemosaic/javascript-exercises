const fibonacci = function(target) {
    target = +target;
    
    if(target < 0){
        return "OOPS";
    }
    else if(target === 1 || target === 2){
        return 1;
    }
    else{
        return fibonacci(target - 1) + fibonacci(target - 2);
    }

};

// Do not edit below this line
module.exports = fibonacci;
