let router = require("express").Router();

router.get("/", function (request, result){result.json({
    status: "A API funciona",
    message: ""
})});


//NEW Block of Code
// Import contact controller
var CreditNoteController = require('./CreditNoteController');// CreditNotes routes
var JogadorController = require('./JogadorController'); //Jogador routes
router.route('/CreditNote/Create')
    .post(CreditNoteController.CreateCreditNote);

router.route('/CreditNoteById')
    .post(CreditNoteController.getCreditNoteById);
    
router.route('/CreditNote')
    .get(CreditNoteController.getAllCreditNote);

router.route('/CreditNote/Delete')
    .post(CreditNoteController.delete);




//Jogador
router.route('/Jogador/Create')
    .post(JogadorController.CreateJogador);
  
router.route('/Jogador/GetAll')
    .get(JogadorController.getAllJogador);
       
router.route('/Jogador/GetById')
    .post(JogadorController.getJogadorById);

router.route('/Jogador/GetByNome')
    .post(JogadorController.getJogadorByNome);

router.route('/Jogador/UpdateSaldo')
    .post(JogadorController.update);

  



// Export API routes
module.exports = router;
