// Write your solution in this file!
const employee = {
    name:"Watson",
    streetAdress:"Cat Lane",
};

function updateEmployeeWithKeyAndValue(object, key, value){
    let newEmployee = { ...object };
    newEmployee[key] = value;
    return newEmployee;
};

updateEmployeeWithKeyAndValue(employee, "Sam", "11 Broadway");
 
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

// THIS BELOW EXAMPLE (LINE 24) IS HARD CODING, WE WANT TO USE THE [KEY] ON LINE 30 FOR THIS SOLUTION.
// function deleteFromEmployeeByKey(object, key) {
//     let delEmployee = { ...object }
//     delete delEmployee.name
//     return delEmployee
// }

function deleteFromEmployeeByKey(object, key) {
    let delEmployee = { ...object }
    delete delEmployee[key]
    return delEmployee;
};

function destructivelyDeleteFromEmployeeByKey(object, key) {
    // let object = object (this will work but it's unecessary.)
    delete object[key]
    return object;
};