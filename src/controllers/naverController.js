const knex = require('../database') 
const getNaverData = require('./utils/getNaverData.js');
const formatNaverData = require('./utils/formatNaverData.js');
const insertNaverIntoDatabase = require('./utils/insertNaverIntoDatabase.js')


module.exports = {
    async index (request, response) { 
    // simply returns all navers in the database
        const allNavers = await knex('navers')

        return response.json(allNavers)
     },
    
    async store (request, response, next) { 
        try {    
        // first get and format data from the request
            const newNaverData = getNaverData(request.body)
            const newNaverProjects = request.body.projects

        //Inserts In the Naver table and the relation one
        //then querys for the naver in the database and returns 
            const naver = await insertNaverIntoDatabase(newNaverData, newNaverProjects)
        
            return response.json(naver);
        }

        catch (error) { 
            next(error)
        }
    },

    async show(request, response, next) { 
        try {  
        //Querys for a naver using his id from the request and returns his projects too
            const naverId = request.body.id
            const naverInfo = await knex('navers').where('id', naverId)
            const naverProjects = await knex('projects').whereIn('id', knex('navers_projects').select('project_id').where('naver_id', naverId))

        //Formating Naver and his projects in a single object
        //had to use naverInfo[0] because it was an array 
            const naver = formatNaverData(naverInfo[0], naverProjects)

            return response.json(naver)
        }

        catch (error) { 
            next(error)
        }
    }

}