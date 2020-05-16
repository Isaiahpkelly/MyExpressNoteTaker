const path = require('path');

module.exports = function(app){

    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })

    app.get('/notes', function(req, res){
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    
    })

    app.get('/api/notes', function(req,res){
        res.sendFile(path.join(__dirname, '../db/db.json'))
    })

    app.get("/api/notes/:notes", function(req, res) {
        var chosen = req.params.notes.id;
      
        console.log(chosen);
      
    //     for (var i = 0; i < notes.length; i++) {
    //       if (chosen === notes[i].routeName) {
    //         return res.json(notes[i]);
    //       }
    //     }
      
    //     return res.json(false);
      });
      

    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })

  
}