//CREATES A ROUTER OBJECT FOR DEFINING ROUTES IN AN EXPRESS APPLICATION AND IMPORTS THE 'PATH' MODULE FOR WORKING WIRTH FILE AND DIRECTORY PATHS.
const router = require('express').Router();
const path = require('path');

//SETS UP A ROUTE HANDLER FOR THE ROOT URL ("/"). RESPONDS TO INCOMING REQUEST BY SENDING THE "INDEX.HTML" FILE LOCATED IN THE "../PUBPLIC"
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//CONFIGURES A ROUTE HANDLER FOR THE "/NOTES" URL AND SENDS THE "NOTES.HTML" FILE LOCATED IN THE "../PUBLIC" DIRECTORY AS THE RESPONSE WHEN A GET REQUEST IS BEING MADE.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// EXPORTS THE DEFINED ROUTER OBJECT TO MAKE IT ACCESSIBLE TO OTHER PARTS OF THE APPLICATION
module.exports = router;