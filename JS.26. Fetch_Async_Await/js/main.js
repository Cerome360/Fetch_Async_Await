// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, and Async/Await

//Callbacks

/* function firstFunction(parameters, Callbacks) {
    // do stuff
    Callbacks();
} */

// Promises has 3 states: Pending, Fulfilled, Rejected

/* const myPromise = new Promise((resolve, reject) => {
    //const error = false;
    const error = false;
    if (!error) {
        resolve("Yes! resolved the promise!");
    } else {
        reject("No! rejected the promise.");
    }
}); */

/* console.log(myPromise);

myPromise
    .then(value => {
        // console.log(value);
        return value + 1;
    })
    .then(newValue => {
        console.log(newValue);
    })
    .catch(err => {
        console.error(err);
    }) */


/* const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("myNextPromise resolved!");
    }, 3000);
});

myNextPromise.then(value => {
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
}); */

/* const users = fetch("https://jsonplaceholder.typicode.com/users");

//Pending
console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log(response);
        return response.json
    })
    .then(data => {
        console.log(data);
    }) 



const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(user => {
            console.log(user);
        })     
    }) */



// Async / Await

/* const myUsers = {
    userList: []
}

const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}

const anotherFunc = async () => {
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList);
}

anotherFunc();
console.log(myUsers.userList); */

// Workflow function

/* const getAllUserEmails = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();

    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });

    postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
    console.log(data);
}

getAllUserEmails(); */

// 2nd parameter of fetch is an object

/* const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const jsonJokeData = await response.json();

    console.log(jsonJokeData);
}

getDadJoke();



const jokeObject = {
    id: 'FdN7hiG6Uvc',
    joke: "Why can't eggs have love? They will break up too soon."
}

const postData = async (jokeObj) => {

    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });

    const jsonResponse = await response.json();

    console.log(jsonResponse);
}

postData(jokeObject); */

//abstract into functions

// maybe from a form 

const getDataFromForm = () => {
    const requestObj = {
        firstName: "Bruce",
        lastName: "Willis",
        categories: ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
    console.log(joke);
}

// Procedural "workflow" functions
const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished");
}

processJokeRequest();