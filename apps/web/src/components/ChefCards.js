import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Profile from '../components/Profile';


function SimpleCard(props) {

  return (
    <Card>
      <CardContent>
        <Profile />
        </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (SimpleCard);