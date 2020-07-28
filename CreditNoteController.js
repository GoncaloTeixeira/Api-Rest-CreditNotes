'use strict';

var CreditNote = require("./model/CreditNoteModel.js");


exports.getAllCreditNote= function(request, result){
    CreditNote.getAllCreditNote(function(err, CreditNote){

        if(err)
            result.send(err);

        result.send(CreditNote);
    });
}

// Handle create contact actions - uses HTTP Post method
exports.CreateCreditNote = function (req, res) {
    //here it should be made the logic to save a new contact
    var new_CreditNote = new CreditNote(req.body);

    //handles null error 
     if(!new_CreditNote.id || !new_CreditNote.Credito){
  
              res.status(400).send({ error:true, message: 'Please provide name and the country of the contact.' });
  
          }
  else{
    
    CreditNote.CreateCreditNote(new_CreditNote, function(err, CreditNote) {
      
      if (err)
        res.send(err);
        
        
      res.send(new_CreditNote.id);
      //res.json(CreditNote);
    });
  }
    
};



// Handle view contact info  - uses HTTP Get method with one URL Parameter (the parameter is defined in api-routes.js as contact_id)
exports.getCreditNoteById = function (req, res) {
 // req.params.id,
    CreditNote.getCreditNoteById(req.body.id, function(err, CreditNote) {
        if (err)
          res.send(err);
        res.json(CreditNote);
      });
};



// Handle delete contact - uses HTTP Delete method with one URL Parameter (the parameter is defined in api-routes.js as contact_id)
exports.delete = function (req, res) {
    
  CreditNote.remove( req.body.id, function(err, CreditNote) {
    if (err)
      res.send(err);
    res.json({ message: 'Credit Note successfully deleted' });
  });

};