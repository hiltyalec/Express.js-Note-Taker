//CREATES A ROUTER OBJECT FOR DEFINING ROUTES IN AN EXPRESS APPLICATION
const router = require('express').Router();
//IMPORT THE 'FS' MODULEFOR INTERACTING WITH THE FILE SYSTEM
const fs = require ("fs");
//IMPORTS THE 'UUIDV4' FUNCTION FROM THE 'UUID' MODULE TO GENERATE UNIQUE IDENTIFIERS
const { v4: uuidv4 } = require('uuid');

//ROUTE HANDLER FOR GET REQUEST TO '/API/NOTES'. USES ASYNCHRONOUS FUNCTION TO HANDLE THE REQUEST.
router.get('/api/notes', async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
  res.json(dbJson);
});

//POST REQUEST BY ADDING A NEW NOTE ENTRY TO AN EXISTING JSON DATA FILE AND RETURNING THE UPDATED DATA AS THE RESPONSE.
router.post('/api/notes', (req, res) => {
  const dbJson = JSON.parse(fs.readFileSync("db/db.json","utf8"));
  const newNotes = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  dbJson.push(newNotes);
  fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
  res.json(dbJson);
});

// BONUS: USED FOR DELETE REQUEST BY REMOVING THE SPECIFIC NOTE FROM A JSON FULEW BASED ON THE PROVIDED "ID" PARAMETERS.
// THE JSON DATA IS READ FROM THE FILE, PARSED AND THEN FILTERED TO CREATE A NEW ARRAY EXCLUDING THE NOTE THE MATCHING "ID"
// THE UPDATED ARRAY IS WRITTEN BACK TO THE FILE, AND A REPSONSE OF "YOUR NOTE IS DELETED" IS SENT BACK.
router.delete('/api/notes/:id', (req, res) => {
  let data = fs.readFileSync("db/db.json", "utf8");
  const notes =  JSON.parse(data);
  const deleteNotes = notes.filter((note) => { 
    return note.id !== req.params.id;
  });
  fs.writeFileSync("db/db.json",JSON.stringify(deleteNotes));
  res.json("Your note is deleted.");
});

module.exports = router; 