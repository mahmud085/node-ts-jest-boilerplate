const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    title: String,
    author : String,
    genre: String
});
const url = 'mongodb://127.0.0.1:27017/book-database'

mongoose.connect(url, { useNewUrlParser: true });

// const db = mongoose.connection
// db.once('open', () => {
//   console.log('Database connected:', url)
// })

module.exports = mongoose.model("Book", Schema);