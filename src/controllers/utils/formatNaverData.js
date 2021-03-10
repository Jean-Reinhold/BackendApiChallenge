function formatNaverData(info, projects) { 
    const naver = { 
                    id: info.id, 
                    name: info.name,
                    birthdate: info.birthdate,
                    admission_date: info.admission_date, 
                    job_role: info.job_role,
                    projects: projects
                    }
    return naver;
}

module.exports = formatNaverData