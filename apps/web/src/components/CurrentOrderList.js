import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

import gql from "graphql-tag"
import { Query } from "react-apollo"

const GET_ORDERS = gql`
  {
    allOrders {
      totalPrice
      id
    }
  }
`

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}

function SimpleCard(props) {
  const { classes } = props

  return (
    <Query query={GET_ORDERS}>
      {({ loading, error, data: { allOrders } }) =>
        loading ? (
          <h1>Loading</h1>
        ) : (
          allOrders.map(({ totalPrice, id }, i) => (
            <Card className={classes.card} key={i}>
              {console.log(allOrders)}
              <CardContent>
                <Typography variant="h5" component="h2">
                  Order #{12345 + id}
                </Typography>
                {/* <Typography component="p">1x Lamb over rice</Typography> */}
                <Typography className={classes.pos} color="textSecondary">
                  Order total: ${totalPrice}
                </Typography>
              </CardContent>
            </Card>
          ))
        )
      }
    </Query>
  )
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleCard)
