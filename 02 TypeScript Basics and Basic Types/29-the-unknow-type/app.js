function sendRequest(data, cb) {
    // ... sending a request with "data"
    cb({ data: 'Hi there!' });
}
sendRequest('Send this!', function (response) {
    console.log(response);
    // return true;
});
/*
  Notes:
  callbacks and function types
*/
