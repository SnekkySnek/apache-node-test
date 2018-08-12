const appService = require('../services/app.services');
const apiPrefix = '/api/apacheSnek';

module.exports ={
    readAll: readAll,
    post: post,
    put: put,
    delete: _delete

};


function readAll(req, res) {
    appService.readAll()
        .then(users =>{
            res.json(users)
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err)
            
        });
};

function post(req, res){
    appService.create(req.model)
        .then(id =>{
            res.status(201)
                .location(`${apiPrefix}/${id}`)
                .json(res)
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
};

function put(req, res){
    appService.update(req.params.id, req.model)
        .then(user =>{
            res.status(200).json(user)
        })
        .catch(err=>{
            console.log(err);
            res.status(500).send(err)
        })
}

function _delete (req, res) {
    appService.delete(req.params.id)
        then(() => {
            res.status(200).json({'smoke': 'all the smoke'})
        }).catch(err =>{
            console.log(err);
            res.status(500).send(err)
            
        })
}