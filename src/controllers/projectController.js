const knex = require('../database') 
const formatProjectData = require('./utils/formatProjectData')
const getProjectData = require('./utils/getProjectData')
const insertProjectIntoDatabase = require('./utils/insertProjectIntoDatabase')

module.exports = {
    async index (request, response) { 
    //simply returns all projects in the database
        const allProjects = await knex('projects')

        return response.json(allProjects)
     },
    
    async store (request, response, next) { 
        try {    
        // first get and format data from the request
            const newProjectData = getProjectData(request.body)
            const newProjectNavers = request.body.navers

        //Inserts In the Project table and the relation one
        //then querys for the project in the database and returns 
            const project = await insertProjectIntoDatabase(newProjectData, newProjectNavers)
        
            return response.json(project);
        }

        catch (error) { 
            next(error)
        }
    },

    async show(request, response, next) { 
        try {  
        //Querys for a project using its id from the request and returns its navers too
            const projectId = request.body.id
            const projectInfo = await knex('projects').where('id', projectId)
            const projectNavers = await knex('navers').whereIn('id', knex('navers_projects').select('naver_id').where('project_id', projectId))
        
        //Formats projects and navers in a single object
            const project = formatProjectData(projectInfo[0], projectNavers)

            return response.json(project)
        }

        catch (error) { 
            next(error)
        }
    }

}