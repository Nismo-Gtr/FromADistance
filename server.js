const express = require('express');
const app = express();
const port = process.env.PORT || 8000;


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/', (req, res) => {
    res.send({express: "Test"});
//   res.send({        
//       async getNews() {
//     // console.log(<API/>);
//     var id = {};
//     await axios.get('https://newsapi.org/v2/' +
//         'top-headlines?' +
//         'country=us&' +
//         'apiKey=246c3cfc9c594de5b3c22e788822f27a')
//         .then(function (response) {
//             id = response.data.articles
//         })
//         return id;
// }  });
});

app.get('/Business', (req, res) => {
    res.send({ express: 'This is the Business Route' });
  });