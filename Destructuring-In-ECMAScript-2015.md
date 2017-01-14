#Destructuring in ECMAScript 2015

Destructuring is a new feature in ECMAScript 2015. Destructuring allows to bind a set of variables to a corresponding set of values (objects and arrays) anywhere we can normally bind a value to a single variable. Today we are already doing destructuring (extracting values) almost in every JavaScript program, but we do it manually. 

To understand destructuring in ECMAScript 2015 completely, lets look at an example how are we doing destructuring today (pre ES2015).

###Destructuring manually

We can destructure (extract values) from person object manually using dot notation or array notation.

```javascript
var person = { name: 'Shravan', age: 27 };
var name = person.name;
var age = person.age;
```

We can destructure (extract values) from numbers array manually using indexes.

```javascript
var numbers = [1, 2, 3, 4, 5];
var one = numbers[0];
var two = numbers[1];
```

We construct objects using {} (object literal syntax) and arrays using [] (array literal syntax), on the right hand side of assignment operation. We can use same syntax on left hand side of assignment operation for destructuring objects and arrays.

###Destructuring manually

####Basic assignment

```javascript
var fullName = { firstName: 'Shravan', lastName: 'Kasagoni' };

let {firstName, lastName} = fullName;

console.log(firstName); //Shravan
console.log(lastName); //Kasagoni
```

In above code snippet line two is the basic example of object destructuring. We are using object literal syntax on the left hand side of assignment operation and in that we are declaring variables with same name as object properties from which we are extracting values.

Lets look at the some more examples of object destructuring.

####Separate declaration and assignment

```javascript
var firstName, lastName;

({ firstName, lastName } = { firstName: 'Shravan', lastName: 'Kasagoni' });

console.log(firstName, lastName); //Shravan Kasagoni
```

In above code snippet variables are already declared on the line one, we are using them in destructuring pattern on the left hand side of assignment operation. Important point to notice on the line we are performing destructuring, the statement is surrounded by () parenthesis, because in JavaScript a statement can’t start with { curly brace. When we use var, let, const in destructuring statement, we don’t need to surround the statement with parenthesis.

####Alias Variable Names

```javascript
let fullName = { firstName: 'Shravan', lastName: 'Kasagoni' };

let {firstName: fn, lastName: ln} = fullName;

console.log(fn, ln); //Shravan Kasagoni

console.log(firstName, lastName); //throws an error
```

In above code snippet we are creating alias names for actual object property names. For the firstName variable alias names is fn, lastName variable alias names is ln. We can use fn, ln variables to refer to the values read from fullName.firstName, fullName.lastName correspondingly.

Important point to remember when we alias the variables names in destructuring pattern, no more we use the variable names firstName, lastName to refer to the values read from fullName.firstName, fullName.lastName. If we try to use the variables names firstName, lastName JavaScript throws an error.

####Pick only what you need

```javascript
function getPersonDetails() {
    return {
        name: 'Shravan',
        age: 27,
        email: 'shravan@theshravan.net'
    };
}

let {name, age} = getPersonDetails();

console.log(name, age); //Shravan 27
```

In above code snippet getPersonDetails() function returns a person object with 3 properties (name, age, email). In the next statement we are destructuring function return value, but are extracting only 2 properties from the returned object. Using destructuring pattern we can read only what we need, we can omit the remaining.

####Using object destructuring in function parameters

```javascript
var person = {
    name: 'Shravan',
    age: 27,
    email: 'shravan@theshravan.net'
};

displayPersonDetails(person);

function displayPersonDetails({name, age, email}) {
    console.log(name, age, email);
}
```

In above code snippet to displayPersonDetails() function we are passing person object. Instead of manually creating variables and assigning them with object property values read using dot notation (e.g: var name = person.name;) inside the function definition, we are taking the advantage of object destructuring on the function parameter. JavaScript will create variables mentioned object destructuring pattern in the function parameter and assign them with values of matching person object properties.

####What happens if we try to extract non existing properties in destructuring pattern?

```javascript
let person = { name: 'Shravan', age: 27 };

let {name, age, email} = person;

console.log(name, age, email); //Shravan 27 undefined
```

In the above code snippet email property doesn’t exist on the person object, but we are trying extract in destructuring pattern. Any non existing property if we extract it in destructuring pattern it will be undefined.

####Default Values

In the previous example we have email property which doesn’t exist on the person object so in destructuring pattern JavaScript making it undefined. But we want to get a value for non existing properties we can assign them with default values in destructuring pattern.

```javascript
let person = { name: 'Shravan', age: 27, mobile: undefined };

let {name, email = 'no email provided', mobile = '0000000000' } = person;

console.log(name, email, mobile); //Shravan no email provided 0000000000
```

In the above code snippet email property doesn’t exist on the person object and we have default value so JavaScript reads the default value. we are also reading mobile property on the person object whose value is undefined, JavaScript is still displaying its default value. Even though property exists on the object,if its value is undefined JavaScript will assign default value if mentioned.

Default values are triggered on the destructuring pattern, when property doesn’t exist and if exists whose value is undefined.

####Destructuring Nested Objects

```javascript
let person = {
    name: 'Shravan',
    age: 27,
    address: {
        city: 'Hyderabad',
        state: 'TS',
        zip: 500001
    }
};

let {name, age, address: {city, state, zip}} = person;

console.log(name, age, city, state, zip);
```

####Here the basic rules for destructuring objects:

* Brace on the left hand side of assignment means it’s destructuring
* Object on the right hand side of assignment must have properties with names which we are using on left hand side of assignment
* If we extract properties on left hand side of assignment which doesn’t exists in object on right hand side of assignment, those variables on the left hand side will be undefined.
* Default values are triggered if object on the right hand side of assignment doesn’t have property read on left hand side or if it exists and value is undefined.

Read my rest of the blog post on [Destructuring Arrays in my blog](http://theshravan.net/blog/destructuring-in-ecmascript-2015/).
