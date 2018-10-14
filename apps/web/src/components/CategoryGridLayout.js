import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaCard from "../components/FoodCategoryTile"
import AmericanFood from "../images/american.jpg"
import ItalianFood from "../images/italian.jpg"
import MalaysianFood from "../images/malaysian.jpg"
import FrenchFood from "../images/french.jpg"
import IndianFood from "../images/indian.jpg"
import GreekFood from "../images/greek.jpeg"
import RussianFood from "../images/russian.jpg"
import KoreanFood from "../images/korean.jpg"
import MexicanFood from "../images/mexican.jpg"
import ChineseFood from "../images/chinese.jpg"
import JapaneseFood from "../images/japanese.jpg"
import VietFood from "../images/vietnamese.jpg"

const styles = theme => ({
  Grid: {
    alignItems: "center",
    justify: "center"
    },

});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.label}>
      <Grid container spacing={24} xs={12} sm={12} md={12} lg={12}>
      {[ {img: AmericanFood, text: "American"}, {img: ChineseFood, text: "Chinese"}, {img: FrenchFood, text: "French"},{img: GreekFood, text: "Greek"},{img: IndianFood, text: "Indian"},{img: ItalianFood, text: "Italian"}, {img: JapaneseFood, text: "Japanese"}, {img: KoreanFood, text: "Korean"}, {img: MalaysianFood, text: "Malaysian"}, {img: MexicanFood, text: "Mexican"},{img: RussianFood, text: "Russian"}, {img: VietFood, text: "Vietnamese"}].map(({ img, text }, i) => 
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <MediaCard key={i} imgSrc={img} textSrc={text}
          />
          </Grid>)}
      </Grid>
      </div>
    );
  }
  
  CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(CenteredGrid);
