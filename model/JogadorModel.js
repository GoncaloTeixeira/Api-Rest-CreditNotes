'user strict';

var sql = require("./db.js");

var Jogador = function (Jogador)
{
    this.id= Jogador.id;
    this.Nome= Jogador.Nome;
    this.Saldo=Jogador.Saldo;
}


Jogador.CreateJogador= function(newJogador, result)
{
    sql.query("INSERT INTO jogadores(Nome,Saldo) VALUES (? , ? )", [newJogador.Nome,newJogador.Saldo], function(err, res)
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


Jogador.getJogadorById = function (id, result) {
    sql.query("Select * from jogadores where id = ? ",id, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};


Jogador.getAllJogador = function (result) {
    sql.query("Select * from jogadores", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('Jogadors : ', res);  

             result(null, res);
            }
        });   
};


Jogador.updateById = function(id,Saldo, result){
    sql.query("UPDATE jogadores SET Saldo = ? WHERE id = ?", [Saldo, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
    };

    Jogador.getJogadorByNome = function (Nome, result) {
        sql.query("Select * from jogadores where Nome = ? ",Nome, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
    };


module.exports= Jogador;