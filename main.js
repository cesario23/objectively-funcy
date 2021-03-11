// Your code here.
function getFirstName (object){
  return object.firstName 
}
function getLastName (object){
  return object.lastName
}
function getFullName (object){
  return `${object.firstName} ${object.lastName}`;
}
function setFirstName (object, name){
object.firstName = name;
}
function setAge (object, age){
object.age = age
}
function giveBirthday (object){
if (object.age){
   const age = object.age + 1;
  return object.age = age
}else {
  return object.age = 1
}
}
function marry (person1, person2){
person1.married = true;
person2.married = true;
person1.spouseName = person2.firstName + " " + person2.lastName;
person2.spouseName = person1.firstName + " " + person1.lastName;
}
function divorce(person1, person2){
person1.married = false;
person2.married = false;
delete person1.spouseName;
delete person2.spouseName;
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
