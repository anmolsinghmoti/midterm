/* FileName :app.js */
/* StudentName :Anmol Singh */
/* Student Id :301145362 */
/* Date : 10/27/2021 */
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
