import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Grid } from '@mui/material';
import { withStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';

const styles = () => ({
  root: {
    padding: '5px 10px',
    marginLeft: 90,
    height: 80,
  },
  number: {
    display: 'block',
    fontSize: 18,
    color: grey[800],
  },
  text: {
    fontSize: 20,
    color: grey[800],
  },
  iconSpan: {
    float: 'left',
    height: 90,
    width: 90,
    textAlign: 'center',
  },
  icon: {
    height: 48,
    width: 48,
    marginTop: 20,
    maxWidth: '100%',
  },
});

const SummaryBox = (props) => {
  const { classes, color, title, value, Icon } = props;

  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid item>
            <span className={classes.iconSpan} style={{ backgroundColor: color }}>
              <Icon className={classes.icon} />
            </span>

            <div className={classes.root}>
              <span className={classes.text}>{title}</span>
              <span className={classes.number}>{value}</span>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

SummaryBox.propTypes = {
  classes: PropTypes.object.isRequired,
  Icon: PropTypes.any,
  title: PropTypes.string,
  value: PropTypes.string,
};

export default withStyles(styles)(SummaryBox);
