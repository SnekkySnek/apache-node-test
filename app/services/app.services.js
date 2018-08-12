const mongodb = require('../mongo');
const conn = mongodb.connection;
const objectId = mongodb.ObjectId;


module.exports = {
    readAll: readAll,
    create:create,
    update:update,
    delete:_delete
};

function readAll(){
    return conn.db().collection('losers').find().toArray()
        .then(losers =>{
            for (let i = 0; i <losers.length; i++){
                let loser = losers[i];
                loser._id = loser._id.toString()
            }
            return losers
        })
};


function create(model){
    return conn.db().connection('losers').instert(model)
        .then(result => result.insertedIds[0].toString())
}

function update(id, model){
    doc._id = new ObjectId(doc._id)

    return conn.db().connection('losers').replaceOne({_id: new Object(id)}, model)
        .then(loser => Promise.resolve())
}


function _delete(id){
    return conn.db().connection('losers').deleteOne({_id: new Object(id)})
        .then(loser => Promise.resolve())
}
