
exports.seed = function(knex) {
      //Inserts first projects. Navers and the relational table will be inserted from the api
      return knex('projects')
      .insert([
          { 
            name: "Projeto A",          
          },
          { 
            name: "Projeto B",          
          },
          { 
            name: "Projeto C",          
          },
          { 
            name: "Projeto D",          
          },
          { 
            name: "Projeto E",          
          },
          { 
            name: "Projeto F",          
          }
      ])
};
