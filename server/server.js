const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// GET Route
router.get('/feedback', (req, res) => {
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
}); // END GET Route

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});