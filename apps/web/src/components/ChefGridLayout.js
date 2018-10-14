import React from "react"
import Grid from "@material-ui/core/Grid"
import ChefCards from "./ChefCards"
import MalaysianFood from "../images/malaysian.jpg"
import IndianFood from "../images/indian.jpg"
// import KoreanFood from "../images/korean.jpg"
// import ChineseFood from "../images/chinese.jpg"
// import JapaneseFood from "../images/japanese.jpg"
// import VietFood from "../images/vietnamese.jpg"
// import AmericanFood from "../images/homemadesteak.jpg"
// import Mac from "../images/americanhomemade.jpg"

import gql from "graphql-tag"
import { Query } from "react-apollo"

const GET_CHEFS = gql`
  {
    allUsers {
      id
      firstName
      lastName
      chefRating
    }
  }
`

function CenteredGrid(props) {
  return (
    <div>
      <Grid container spacing={16} alignContent="center">
        {/*
        TODO: Add modular prop data display in ChefCards
         */}
        <Query query={GET_CHEFS}>
          {({ loading, error, data: { allUsers } }) =>
            loading ? (
              <h1>loading</h1>
            ) : (
              allUsers.map(({ id, firstName, lastName, chefRating }, i) => (
                <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                  <ChefCards
                    imgSrc={i % 3 === 0 ? IndianFood : MalaysianFood}
                    textSrc={`${firstName} ${lastName}`}
                  />
                </Grid>
              ))
            )
          }
        </Query>
      </Grid>
    </div>
  )
}

export default CenteredGrid
