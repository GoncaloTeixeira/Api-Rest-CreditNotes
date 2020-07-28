'user strict';

var sql = require("./db.js");

var CreditNote = function (CreditNote)
{
    this.id= CreditNote.id;
    this.Credito=CreditNote.Credito;
}

CreditNote.CreateCreditNote= function(newCreditNote, result)
{
    sql.query("INSERT INTO creditnotes SET ?", newCreditNote, function(err, res)
    {
        if(err)
        {
            console.log("error:", err);
            result(err, null);
        }
        else{
            console.log(res.insertID);
            result(null, res.insertID);
        }

    })

    

}


CreditNote.getCreditNoteById = function (id, result) {
    sql.query("Select * from creditnotes where id = ? ",id, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};


CreditNote.getAllCreditNote = function (result) {
    sql.query("Select * from creditnotes", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('CreditNotes : ', res);  

             result(null, res);
            }
        });   
};


CreditNote.remove = function(id, result){
    sql.query("DELETE FROM creditnotes WHERE id = ? ", id, function (err, res) {
   
               if(err) {
                   console.log("error: ", err);
                   result(null, err);
               }
               else{
              
                result(null, res);
               }
           }); 
   };









module.exports= CreditNote;