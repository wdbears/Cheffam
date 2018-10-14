//import User from '../schemas/user.graphql'
const casual = require('casual');

let mockOrders = [];

let orders = 
[
    {
        id: 0,
        dishes: 
        [
            {
                name: "Grandmas Cookies",
                price: 9.99 
            },
            {
                name: "Chicken Katsu with Fried Rice",
                price: 8.99
            }
        ],
        totalPrice: 17.98
    },
    {
        id: 1,
        dishes: 
        [
            {
                name: "Chicken Burrito with Pinto Beans",
                price: 8.00
            },
            {
                name: "Al Pastor Taco",
                price: 3.00
            }
        ],
        totalPrice: 11.00
    },
    {
        id: 2,
        dishes: 
        [
            {
                name: "Provolone and Ham Sandwich",
                price: 5.00
            },
            {
                name: "Homemade Quesadillas",
                price: 2.00
            }
        ],
        totalPrice: 7.00
    },
    {
        id: 3,
        dishes: 
        [
            {
                name: "Ham Sandwich",
                price: 2.00
            },
            {
                name: "Homemade Waffles",
                price: 2.00
            }
        ],
        totalPrice: 4.00
    }
]

for(let i = 0; i < 4; i++){
    let obj = {};
    obj.id = orders[i].id;
    obj.dishes = orders[i].dishes;
    obj.totalPrice = orders[i].totalPrice;
    mockOrders.push(obj);
}

const resolvers = {
    Query: {
      allOrders: () => mockOrders
    }
}

export default resolvers;