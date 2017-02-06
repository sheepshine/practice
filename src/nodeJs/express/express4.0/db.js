var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/article');


var blogSchema = new Schema({
  id:  Number,
  title: String,
  body:   String,
  published: String
});

exports.Blog = mongoose.model('Blog', blogSchema);

