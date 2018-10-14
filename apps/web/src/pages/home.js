import React from "react"
import MediaCard from "../components/FoodCategoryTile"
import AmericanFood from "../images/american.jpg"
import HalalFood from "../images/halal.jpg"

const HomePage = () => <>
<h1>Welcome to Cheffam</h1>
<h4>A freelance cook's dream.</h4>
{[ {img: AmericanFood, text: "American"}, {img: HalalFood, text: "Halal"} ].map(({ img, text }) => <MediaCard imgSrc={img} textSrc={text} />)}
</>


export default HomePage
