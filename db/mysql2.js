const mysql = require('mysql')
const Promise = require('bluebird')

const mysqlPool = Promise.promisifyAll(mysql.createPool({
  host: process.env['MYSQL_HOST_MYRDB'],
  port: process.env['MYSQL_PORT_MYRDB'],
  user: process.env['MYSQL_ADMIN_USER_MYRDB'],
  password: process.env['MYSQL_ADMIN_PASSWORD_MYRDB'],
  database: 'test',
  connectionLimit: 10
}))

mysqlPool.queryAsync('SELECT 1 + 1 AS solution').then( rows => {
  console.log('The solution is', rows[0].solution)
}).catch( err => {
  console.error(err)
})