function getNaverData(body) { 
    const _naverData = {
                        id: body.id, 
                        name: body.name,
                        birthdate: body.birthdate, 
                        admission_date: body.admission_date, 
                        job_role: body.job_role
                        } 
    
    return _naverData;
}

module.exports = getNaverData