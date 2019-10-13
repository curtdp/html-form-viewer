const nunjucks = require('nunjucks')
const express = require('express');
const app = express();

nunjucks.configure({
  autoescape: true,
  express: app
});

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
  res.render('index.html')
});

app.get('/form', function (req, res) {
  res.render('form-response.html', {
    getRequest: req.query
  })
})

app.post('/form', function (req, res) {
  res.render('form-response.html', {
    postRequest: req.body
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
