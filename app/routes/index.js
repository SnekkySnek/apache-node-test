const router = require('express').Router();
const clientRoutes = require('./client.routes');
const appRoutes = require('./app.routes')


module.exports = router

router.use('/api/apacheSnek', appRoutes)

router.use(clientRoutes)

useApiErrorHandlers(router)

function useApiErrorHandlers(router) {

    router.use('/api/*', (req, res, next) => {
        res.sendStatus(404)
    })

    router.use((err, req, res, next) => {
        if(!err){
            return next()
        }

        console.log(err.stack)

        res.sendStatus(500)
    })
}