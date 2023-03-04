const findTheOldest = function(people) {
    const oldestPerson = {
        name: null,
        age: 0,
    };

    for (const person of people){
        let age = calculateAge(person);
        
        if(age > oldestPerson.age){
            oldestPerson.age = age;
            oldestPerson.name = person.name;
        }
    }

    return oldestPerson;
};

const calculateAge = (person) => {
    if(person.yearOfDeath){
        return person.yearOfDeath - person.yearOfBirth;
    }
    
    const date = new Date();
    const currentYear = date.getFullYear();

    return currentYear - person.yearOfBirth;    
}

// Do not edit below this line
module.exports = findTheOldest;
