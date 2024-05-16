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