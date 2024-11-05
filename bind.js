function greeting(greet){
    console.log( greet + " ! " + this.firstname + " " + this.lastname);
}

let data = {
    firstname : "Harry",
    lastname: "Potter"
}

let laterFunction = greeting.bind(data, "Bonjor");
laterFunction();