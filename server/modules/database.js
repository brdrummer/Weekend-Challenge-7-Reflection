const mongoose = require('mongoose');

/** -------- MONGOOSE CONNECTION --------**/
const databaseUrl = 'mongodb://localhost:27017/prime_feedback';
mongoose.connect(databaseUrl, { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log('mongoose connected to:', databaseUrl);
});
    
mongoose.connection.on('error', function(err) {
    console.log('mongoose connection error: ', err);
});