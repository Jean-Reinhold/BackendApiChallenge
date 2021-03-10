const Express = require ('express') 
const routes = require('./routes')

const application = Express()
application.use(Express.json())

application.use(routes)

//catch all errors, but dont treat them

application.use((error, request, response, next) => {
    response.status(error.status || 500) 
    response.json({ error: error.message})
 })


application.listen(3333, () => console.log("server running"))