React Sample app created with React cli "create-react-app"


[Create React App](https://github.com/facebookincubator/create-react-app).


React with core reactfire

Reading List from firebase

https://github.com/firebase/reactfire

Reactfire use mixin which is not support in ES6, therefore we have separate module to suport mixin in ES6
https://github.com/brigand/react-mixin

To run this example, data strcuture required in firebase is below

{
    users : {
        "first" : {
            name:"first name",
            age: 45
        },
        "second": {
            name:"second user name",
            age: 20
        }
    }
}


Update below code with your firebase configuraiton in config/index.js

`var firebaseConfig = {

    apiKey: "<API_KEY>",

    authDomain: "<PROJECT_ID>.firebaseapp.com",

    databaseURL: "https://<DATABASE_NAME>.firebaseio.com"

};`

