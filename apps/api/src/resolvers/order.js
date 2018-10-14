//import User from '../schemas/user.graphql'
const casual = require("casual")

let mockOrders = []

let orders = [
  {
    id: 0,
    dishes: [
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
    dishes: [
      {
        name: "Chicken Burrito with Pinto Beans",
        price: 8.0
      },
      {
        name: "Al Pastor Taco",
        price: 3.0
      }
    ],
    totalPrice: 11.0
  },
  {
    id: 2,
    dishes: [
      {
        name: "Provolone and Ham Sandwich",
        price: 5.0
      },
      {
        name: "Homemade Quesadillas",
        price: 2.0
      }
    ],
    totalPrice: 7.0
  },
  {
    id: 3,
    dishes: [
      {
        name: "Ham Sandwich",
        price: 2.0
      },
      {
        name: "Homemade Waffles",
        price: 2.0
      }
    ],
    totalPrice: 4.0
  }
]

for (let i = 0; i < 4; i++) {
  let obj = {}
  obj.id = orders[i].id
  obj.dishes = orders[i].dishes
  obj.totalPrice = orders[i].totalPrice
  mockOrders.push(obj)
}

const resolvers = {
  Query: {
    allOrders: () => mockOrders
  }
}

export default resolvers
