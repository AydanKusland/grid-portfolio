const objArray = [{name:'alex', age: 19}, {name: 'alexa', age: 39 }]
console.log(objArray);
const secondObjArray = objArray.map(person => person.age++)
console.log(secondObjArray);