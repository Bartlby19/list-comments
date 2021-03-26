const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sqlite3');

async function execAsync(sql, params) {
    params = params ? params : [];
    return new Promise((resolve, reject) => {
        db.all(sql, params, (error, result) => {
            if (error) {
                console.log(error)
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}
async function getAllUsersInfoList() {
    let usersInfoList = `SELECT * FROM users_information`;
    return await execAsync(usersInfoList)
}

module.exports = {
    execAsync: execAsync,
    getAllUsersInfoList: getAllUsersInfoList
}