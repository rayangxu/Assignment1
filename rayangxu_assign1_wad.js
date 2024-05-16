const userDB =[{
    uuid : 'd38be9ed-2325-4d60-bd0d-f3a6fea92402',
    Username : 'SampleUser',
    Passphrase : 'SamplePassword',
    PhoneNumber : 12345678,
    Email : 'SampleEmail@Sample.com',
    RewardPoints : 0
}]; // Should Contain UserID(System Provided),UserName , Password, Email , PhoneNumber

//Config
DollarsSpentPerSetofPoints =5 //How many points per dollar
pointsPerXDollarsSpent = 10 // Set Amount of points per  dollars spent based on DollarsSpentPerSetOfPoints
//Config End
function addUser({userName,pass,email,phoneNo}){
	if ( !userName || !pass || !email || !phoneNo ) {
		console.error("Missing required fields.");
		return false;
	}else if (userDB.find((user) => user.Username=== userName)) {
		console.error("Username already in use.");
		return false;
    }else if (userDB.find((user) => user.Email === email)) {
		console.error("Email already in use.");
		return false;
	}else if (userDB.find((user) => user.PhoneNumber === phoneNo)) {
		console.error("Phone number already in use.");
		return false;
    }
    try {
        user = {
            uuid : crypto.randomUUID(),
            Username : userName,
            Passphrase : pass,
            PhoneNumber : phoneNo,
            Email : email,
            RewardPoints : 0
        }
        userDB.push(user)
        console.log('Successfully created user'+userName+'.');
    } catch(error){
        console.log('Error' + error)
    }
}

function getUserWithParam({userName, uuid, email, phoneNo}){
    try {
		if (userName) {
			return userDB.find((user) => user.Username === userName) || false;
		}
        if (uuid) {
			return userDB.find((user) => user.uuid === uuid) || false;
		}
        if (email) {
			return userDB.find((user) => user.Email === email) || false;
		}
        if (phoneNo) {
			return userDB.find((user) => user.PhoneNumber === phoneNo) || false;
		}
		console.log("Provide valid Argument(userName , uuid , email , phoneNo).");
		return false;
	} catch (error) {
		console.log(error);
}
}
function getUserWithParam(){
    return "Provide valid Argument(userName , uuid , email , phoneNo).";
}
function getAllUsers(){
    return userDB;
}

function earnRewardsDollars(userName, spentMoney){
    try{
    const user = userDB.find((user) => user.Username === userName);
    if(!user){
        return false;
    }
    sets = Math.floor((spentMoney/DollarsSpentPerSetofPoints))
    earnt = 0
    if (sets > 0){
        earnt = sets*pointsPerXDollarsSpent
    }
    user.RewardPoints += earnt
    console.log(`${userName} has earnt ${earnt} points and now has ${user.RewardPoints}`)
} catch(error){
    console.error(error);
    return false;
}
}

function addRewardsPointsDirectly(userName, points){
    try{
    const user = userDB.find((user) => user.Username === userName);
    if(!user){
        console.log('User not found');
        return false;
    }
    user.RewardPoints += points
    console.log(`${points} points has been added to the account ${userName} and now has ${user.RewardPoints}`)
} catch(error){
    console.error(error);
    return false;
}
}

function deductRewardsPoints(userName, points){
    try{
    const user = userDB.find((user) => user.Username === userName);
    if(!user){
        console.log('User not found');
        return false;
    }
    user.RewardPoints -= points
    if (user.RewardPoints < 0){
        user.RewardPoints += points
        console.log(`${userName} has insufficent Points`)
        return false
    }
    console.log(`${points} points has been removed from the account ${userName} and now has ${user.RewardPoints}`)
} catch(error){
    console.error(error);
    return false;
}
}

function modifyUser({ uuid,newName,newPass,newPhone,newEmail}) {
	try {
		const user = userDB.find((user) => user.uuid === uuid);
		if (!user){
             return false;
            }
		if (newName) user.Username = newPhone;
		if (newPass) user.Passphrase = newPass;
		if (newPhone) user.PhoneNumber = newPhone;
		if (newEmail) user.Email = newEmail;
		console.log(
			`Updated user (${uuid}).`,
		);
	} catch (error) {
		console.error(error);
		return false;
	}
}

function deleteUser(uuid) {
	try {
		const index = userDB.findIndex((user) => user.uuid === uuid);
		userDB.splice(index, 1);
		console.log(`deleted user ${uuid}.`);
	} catch (error) {
		console.error(error);
		return false;
	}
}
module.exports = {
    addUser,
    getUserWithParam,
    getAllUsers,
    earnRewardsDollars,
    addRewardsPointsDirectly,
    deductRewardsPoints,
    modifyUser,
    deleteUser
};
console.log('adding user {userName: \'123\',pass:\'123\',email:\'email@email.com\', phoneNo:858585}')
addUser({userName: '123',pass:'123',email:'email@email.com', phoneNo:858585});
console.log('getting user with UserName')
console.log(getUserWithParam({userName: '123'}));
console.log('getting user with uuid')
console.log(getUserWithParam({uuid: 'd38be9ed-2325-4d60-bd0d-f3a6fea92402'}));
console.log('getting user with email')
console.log(getUserWithParam({email:'email@email.com'}));
console.log('getting user with phoneNo')
console.log(getUserWithParam({phoneNo:858585}));
console.log('getting all users')
console.log(getAllUsers());
console.log(getUserWithParam());
console.log('spent 44 dollars')
earnRewardsDollars('123', 44);
console.log('add 500 points to account')
addRewardsPointsDirectly('123',500)
console.log('deduct 500 points')
deductRewardsPoints('123',500)
console.log('deduct more than owned')
deductRewardsPoints('123',5000)
console.log('modify user')
modifyUser({
    uuid : 'd38be9ed-2325-4d60-bd0d-f3a6fea92402',
    newName : 'SampleUser2',
    newPass : 'SamplePassword2',
    newPhone : 123456789,
    newEmail : 'SampleEmail@Sample.com2',
})
console.log(getAllUsers());
console.log('Delete user')
deleteUser(`d38be9ed-2325-4d60-bd0d-f3a6fea92402`);
console.log(getAllUsers());