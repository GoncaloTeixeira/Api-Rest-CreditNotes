'use strict';

var Jogador = require("./model/JogadorModel.js");
const CreditNote = require("./model/CreditNoteModel.js");


exports.getAllJogador= function(request, result){
    Jogador.getAllJogador(function(err, Jogador){

        if(err)
            result.send(err);

        result.send(Jogador);
    });
}

// Handle create Player actions - uses HTTP Post method
exports.CreateJogador = function (req, res) {
    //here it should be made the logic to save a new Player
    var new_Jogador = new Jogador(req.body);

    //handles null error 
     if(!new_Jogador.Nome || !new_Jogador.Saldo){
  
              res.status(400).send({ error:true, message: 'Please provide name and id of a valid Player.' });
  
          }
  else{
    
    Jogador.CreateJogador(new_Jogador, function(err, Jogador) {
      
      if (err)
        res.send(err);
      res.json(Jogador);
    });
  }
    
};



// Handle view contact info  - uses HTTP Get method with one URL Parameter (the parameter is defined in api-routes.js as contact_id)
exports.getJogadorById = function (req, res) {
 // req.params.id,
    Jogador.getJogadorById(req.body.id, function(err, Jogador) {
        if (err)
          res.send(err);
        res.json(Jogador);
      });
};


// Handle view contact info  - uses HTTP Get method with one URL Parameter (the parameter is defined in api-routes.js as contact_id)
exports.getJogadorByNome = function (req, res) {
    // req.params.id,
       Jogador.getJogadorByNome(req.body.Nome, function(err, Jogador) {
           if (err)
             res.send(err);
           res.json(Jogador);
         });
   };

// Handle update Saldo info 
exports.update = function (req, res) {
    Jogador.updateById(req.body.id, req.body.Saldo, function(err, Jogador) {
        if (err)
          res.send(err);
        res.json(Jogador);
      });
};