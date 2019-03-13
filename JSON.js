


const string = `{
    "name":"juan",
    "age":36,
    "hobbies": ["coding","fpv","etc"]
}`



const obj = JSON.parse(string)

obj.hobbies.push('JS');

console.log(obj);


const newJson = JSON.stringify(obj);


console.log(newJson, typeof newJson)