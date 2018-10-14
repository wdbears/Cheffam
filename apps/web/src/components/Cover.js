import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AmericanFood from "../images/american.jpg"
import HalalFood from "../images/halal.jpg"
import ItalianFood from "../images/italian.jpg"
import MalaysianFood from "../images/malaysian.jpg"
import IndianFood from "../images/indian.jpg"

const styles = {

};

function CoverPhoto({ classes }) {
  return (
    <div className={classes.cover}></div>
  );
}

export default withStyles(styles)(CoverPhoto);