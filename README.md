# Rewards Programs for Businesses

## Functions

- Add ,Modify , get , delete users from user database
- Configurable amount of points added per dollars spent , directly add or deduct point from users

## Usage

```
const userModule = require('user-management-module');

// Example usage
userModule.addUser({
    userName: 'example',
    pass: 'password',
    email: 'example@example.com',
    phoneNo: '12345678'
});

const user = userModule.getUserWithParam({ userName: 'example' });
console.log(user);

const allUsers = userModule.getAllUsers();
console.log(allUsers);
```

## Functions
- addUser({ userName, pass, email, phoneNo }): Adds a new user to the system.
- getUserWithParam({ userName, uuid, email, phoneNo }): Retrieves a user based on the provided parameter.
- getAllUsers(): Retrieves all users in the system.
- earnRewardsDollars(userName, spentMoney): Adds reward points to a user based on the amount spent.
- addRewardsPointsDirectly(userName, points): Adds reward points directly to a user's account.
- deductRewardsPoints(userName, points): Deducts reward points from a user's account.
- modifyUser({ uuid, newName, newPass, newPhone, newEmail }): Modifies user details based on UUID.
- deleteUser(uuid): Deletes a user based on UUID.

## Code used to test functions

```
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
```