const fetch = require("node-fetch")
const { writeFile, readFile } = require("jsonfile")
const { join } = require("path")

async function initApp() {
  // console.log("Hello!")
  const rawData = await fetch(
    "https://www.food2fork.com/api/search?key=e7b7274463889e4da2fa50212cb18ec3&q=indian"
  )

  const { recipes } = await rawData.json()
  console.log(recipes)
  await writeFile(join(__dirname, "initial_data.json"), recipes)
  // console.log(recipes)
  // const transformRes = Promise.all(
  //   recipes.map(async recipe => {
  //     const rawData = await fetch(
  //       `https://www.food2fork.com/api/get?key=1a008e35f2243f3626d7ba5a9040b782&rId=${
  //         recipe.recipe_id
  //       }`
  //     )
  //     const data = await rawData.json()
  //     const newData {
  //       ...recipe,
  //       ...data
  //     }
  //   })
  // )
  // console.log(transformRes)
}

initApp()
console.log("Hello")
