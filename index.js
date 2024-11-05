let uri = "employeeDetails?name=john burgers&occupation=manager";
let encoded_uri = encodeURI(uri);
let decoded_uri = decodeURI(encoded_uri);


console.log(encoded_uri);
console.log(decoded_uri);