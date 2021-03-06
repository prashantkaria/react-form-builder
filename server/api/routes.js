/* eslint-disable no-var */
// eslint-disable-next-line import/no-extraneous-dependencies
var express = require('express');

var app = express();
let formData = require('./dummyFormData.json');

app.route('/formdata/')
  .get((req, res) => {
    console.log('get formdata: ', formData);
    res.send(formData.task_data);
  })
  .post((req, res) => {
    var data = req.body;
    console.log('post formdata: ', formData);
    formData = data;
    res.status(200).send();
  });

module.exports = app;
