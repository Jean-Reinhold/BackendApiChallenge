const formatNaverData = require('./formatNaverData.js')
const knex = require('../../database') 

async function insertNaverIntoDatabase (naverData, naverProjectsIds) { 
// explanation inside controller     
    const naverId = await knex('navers').insert(naverData).returning('id')
        
            for (projectId of naverProjectsIds) { 
                await knex('navers_projects').insert({naver_id: naverId[0], project_id: projectId});
            }
           
    const naverProjects = await knex('projects').whereIn('id', knex('navers_projects').select('project_id').where('naver_id', naverId[0]));
    naverData.id = naverId[0]

    return formatNaverData(naverData, naverProjects)
        
}

module.exports = insertNaverIntoDatabase