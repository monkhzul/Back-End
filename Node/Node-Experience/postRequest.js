const request = require('request');
const fs = require('fs');

request.post(
    {
        url: 'https://gorest.co.in/public/v1/users',
        body: JSON.stringify({
                "email": "hi.byes@gmail.com",
                "name": "zulaka",
                "gender": "female",
                "status": "active"
        }),
       headers: {
           'content-type': 'application/json',
           'Accept': 'application/json',
           'Authorization': 'Bearer c5a20d6913b10e729847ce5b9bfcfa4b154589c7b3fdf5702921818144d2d62c',
           
       }
    },
    function(error, response, body) {
            if(response) {
                console.log(body);
            }
            else {
                console.log(error);
            }
            fs.writeFile('/Users/lab_1_02/Desktop/Node-Experience/test.txt', body, {flag: 'a+'}, err => {});
       }
)


