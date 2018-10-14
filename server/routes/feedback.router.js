const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Mongoose Schema
const FeedbackSchema = new Schema({
    feelings: { type: Number, required: true },
    content: { type: Number, required: true },
    support:{ type: Number, required: true },
    comments: { type: String, required: true },
});

const Feedback = mongoose.model('feedback', FeedbackSchema);

// router.get('/', (req, res) => {
//     console.log('GET /api/pizza');
//     Feedback.find({}).then((result) => {
//         res.send(result);
//     }).catch((error) => {
//         console.log('Error GET /api/pizza', error)
//         res.sendStatus(500);
//     });
// })

module.exports = router;