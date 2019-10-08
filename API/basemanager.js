const Pool = require('pg').Pool
const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'game',
    password: 'ege1994',
    port: 5432,
  });


function crashnum(data){

  const query2run = 'INSERT INTO crashgame (crashpoint) VALUES ('+ data +')'
   
  db.query(query2run, (error, results) => {

        if (error) {
          // response.status(501).send('HATA VAR' + error)
          return console.log("Hata Var" + error)
        }
        //response.status(201).send(`Mesaj eklendi!`)
        return console.log("Mesaj Eklendi!")
      })
}

module.exports = {
    crashnum
}