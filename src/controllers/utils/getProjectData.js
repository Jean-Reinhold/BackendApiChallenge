function getProjectData(body) { 
    const projectData = {
                        id: body.id, 
                        name: body.name,
                        } 
    
    return projectData;
}

module.exports = getProjectData