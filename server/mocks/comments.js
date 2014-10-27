module.exports = function(app) {
  var express = require('express');
  var commentsRouter = express.Router();

  var comments = [];

  comments.push({
    "id": 1,
    "author": 2,
    "question": 1,
    "text": "Is elevator working properly?",
    "answer": null,
    "createdOn": new Date()
  });

  comments.push({
    "id": 2,
    "author": 2,
    "question": 1,
    "text": "Is man a child?",
    "answer": null,
    "createdOn": new Date()
  });

  comments.push({
    "id": 3,
    "author": 2,
    "question": 1,
    "text": "Is he short?",
    "answer": null,
    "createdOn": new Date()
  });

  commentsRouter.get('/', function(req, res) {
    res.send({"comments":comments});
  });

  comments.forEach(function(comment) {
    commentsRouter.get('/' + comment.id, function (req, res) {
      res.send({
        "comments": comment
      });
    });
  });

  app.use('/api/comments', commentsRouter);
};