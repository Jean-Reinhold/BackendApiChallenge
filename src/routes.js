const Express = require('express');
const naverController = require('./controllers/naverController');
const projectController = require("./controllers/projectController") 
const routes = Express.Router()

routes.get('/navers/index', naverController.index)
routes.get('/navers/show', naverController.show)
routes.post('/navers/store', naverController.store)

routes.get('/projects/index', projectController.index)
routes.get('/projects/show', projectController.show)
routes.post('/projects/store', projectController.store)



module.exports = routes;