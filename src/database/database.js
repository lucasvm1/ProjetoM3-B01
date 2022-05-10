const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose
    .connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
}

module.exports = connectToDatabase;
