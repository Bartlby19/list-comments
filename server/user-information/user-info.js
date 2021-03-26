const {execAsync, getAllUsersInfoList} =require( "../utilites/utils");

async function getUsersInformation(userInfo) {
    console.log(userInfo)
    if (userInfo["notInfo"]) {
        return getAllUsersInfoList()
    }
    return new Promise(async (resolve, reject) => {
        try {
            let params = [userInfo["name"], userInfo["email"],
                userInfo["comment"]];
            await execAsync("INSERT INTO users_information (name, email, comment) VALUES (?,?,?)", params);
            let usersInfoList = getAllUsersInfoList();
            resolve(usersInfoList)
        } catch (error) {
            reject(error);
        }
    })
}
module.exports = {
    getUsersInformation: getUsersInformation
}