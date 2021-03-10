const formatProjectData = require('./formatProjectData.js')
const knex = require('../../database') 

async function insertProjectIntoDatabase (projectData, projectNaversIds) { 
// explanation inside controller    
    const projectId = await knex('projects').insert(projectData).returning('id')

    for (naverId of projectNaversIds) { 
        await knex('navers_projects').insert({naver_id: naverId, project_id: projectId[0]});
    }
           
    const projectNavers = await knex('navers').whereIn('id', knex('navers_projects').select('naver_id').where('project_id', projectId[0]));
    projectData.id = projectId[0]

    return formatProjectData(projectData, projectNavers)
        
}

module.exports = insertProjectIntoDatabase