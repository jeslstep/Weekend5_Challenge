const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET Route
router.get('/', (req, res) => {
    let sqlText = 'SELECT * FROM "feedback" ORDER BY "id" DESC;'
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows);  
        })
        .catch((error) => {
            console.log('error', error);
            res.sendStatus(500);
        })
}); 

// POST Route
router.post('/', (req, res) => {
    let feedbackObj = req.body;
    console.log(feedbackObj);
    let sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) 
    VALUES ($1, $2, $3, $4);`
    pool.query(sqlText, [feedbackObj.feeling, feedbackObj.understanding, feedbackObj.support, feedbackObj.comments])
        .then((result) => {
            console.log(result);
            res.send(feedbackObj);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})

module.exports = router;