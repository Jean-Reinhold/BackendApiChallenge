function formatProjectData(info, navers) { 
    const project = { 
                    id: info.id, 
                    name: info.name,
                    navers: navers
                    }
    return project;
}

module.exports = formatProjectData