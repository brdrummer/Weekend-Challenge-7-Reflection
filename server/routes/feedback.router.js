// CONSTANTS/VARIABLES
const express = require('express');
const pool = require('../modules/pool');
let router = express.Router();

// GET
router.get('/', (req, res) => {

    pool.query('SELECT * FROM "feedback"')
        .then((results) => {
            console.log(results.rows);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error with SQL select for feedback', error);
            res.sendStatus(500);
        });
}); // END HOME GET

// RENTAL/SALE GET
// router.get('/:type', (req, res) => {

//     pool.query('SELECT * FROM "listings" WHERE "type" = $1;', [req.params.type])
//         .then((results) => {
//             console.log(results.rows);
//             res.send(results.rows);
//         }).catch((error) => {
//             console.log('error with SQL select for listings', error);
//             res.sendStatus(500);
//         });
// }); //End RENTAL/SALE GET

// POST
router.post('/', (req, res) => {
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                VALUES ($1, $2, $3, $4);`, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then(() => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error with SQL insert for feedbackPOST', error);
            res.sendStatus(500);
        });
}); //End POST 



module.exports = router;