import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';

import Image from '../src/images/1.png'; // Import using relative path

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {    
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'center',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: theme.spacing(8),
  },
  title: {
    flexGrow: 1,
  },

  link: {
    display: 'flex',
    color: 'white',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },

}));

export default function LandingPage() {
  const classes = useStyles();

  return (

    <Grid container component="main" className={classes.root}>
      <CssBaseline />

      <div>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} >
              KISWIRE Federated Authentication Service (FAS)
          </Typography>
            <Breadcrumbs separator="|" aria-label="breadcrumb" >
              <Link color="inherit" href="#" className={classes.link}>
                <HomeOutlinedIcon className={classes.icon} />
                Home
              </Link>
              <Link color="inherit" href="#" className={classes.link}>
                <PermContactCalendarOutlinedIcon className={classes.icon} />
                Profile
              </Link>
              <Link color="inherit" href="#" className={classes.link}>
                <ContactSupportOutlinedIcon className={classes.icon} />
                Contact Support
              </Link>
            </Breadcrumbs>

          </Toolbar>

        </AppBar>

      </div>

      <Grid item xs={false} sm={1} md={12} className={classes.image} />

    </Grid>
  );
}
