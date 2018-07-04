const ControladorEntregador = require('../controladores/controladorEntregador');

module.exports = function(app){
    const controladorEntregador = new ControladorEntregador();

    app.get('/entregadores', (req,res) => {
        controladorEntregador.retornaTodosEntregadores()
        .then((resposta) => {
            res.status(200).send(resposta)
        });
    });

    app.get('/entregadores/:id',(req,res) => {
        controladorEntregador.EntregadorPorId(req.params)
        .then( (resposta) => {
            res.status(200).send(resposta)
        });
    });
    
    app.post('/entregadores',(req,res)=>{
        controladorEntregador.criarEntregador(req.body)
        .then (resposta => {
            res.status(200).send(resposta);
        });    
    });

    app.put('/entregadores', (req,res) => {
        controladorEntregador.editarUsuarioEntregador(req.body)
        .then ( resposta => {
            res.send(resposta);
        })
    });
}
