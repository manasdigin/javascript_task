let object1 = {
    Name: 'jack',
    age:26,
    
};


let object2 = {
    gender: 'male',
};

let total = {
    ...object1,
    ...object2
};

console.log(total);
