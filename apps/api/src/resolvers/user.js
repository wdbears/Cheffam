//import User from '../schemas/user.graphql'
const casual = require('casual');

let mockUsers = [];
const users = [
    {
        id: 0,
        firstName: "Marta",
        lastName: "Rahman",
        fudieRating: 4.98,
        chefRating: 4.95,
        isChef: true,
        blurb: "My Indian food is the best in town, guaranteed!"
    },
    {
        id: 1,
        firstName: "Ikram",
        lastName: "Gupta",
        fudieRating: 4.83,
        chefRating: 4.92,
        isChef: true,
        blurb: "Everyone needs a little spice in their life!"
    },
    {
        id: 2,
        firstName: "Emily",
        lastName: "Patel",
        fudieRating: 4.99,
        chefRating: 5.00,
        isChef: true,
        blurb: "I love cooking for my community!"
    }
];

for(let i = 3; i < 15; i++){
    let obj = {};
    obj.id = i;
    obj.firstName = casual.first_name;
    obj.lastName = casual.last_name;
    obj.fudieRating = casual.double(3.5, 5);
    obj.chefRating = casual.double(3.5, 5);
    obj.isChef = casual.boolean;
    obj.blurb = casual.sentence;
    mockUsers.push(obj);
}

const allUsers = users.concat(mockUsers);

const resolvers = {
    Query: {
      allUsers: () => allUsers
    }
}

export default resolvers;