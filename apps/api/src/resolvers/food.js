import * as data from "../lib/initial_data.json";

let array = [];
for(let i = 0; i < data.length; i++){
    let o = {};
    o.name = data[i].title;
    o.pictureURL = data[i].image_url;
    o.id = data[i].recipe_id;
    array.push(o);
}

const resolvers = {
    Query: {
      allDishes: () => array
    }
}

export default resolvers;