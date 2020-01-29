import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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
import { Parallax, Background } from 'react-parallax';

import Image from '../src/images/1.png'; // Import using relative path

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    //backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage: `url(${Image})`, 
    backgroundRepeat: 'center',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: theme.spacing(8),
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
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

const image1 =
"https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

export default function LandingPage() {
  const classes = useStyles();

  return (
    
    <Grid container component="main" className={classes.root}>
      <CssBaseline />

      <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon /> 
          </IconButton>
          <Typography variant="h6" className={classes.title} >
            KISWIRE Federated Authentication Service (FAS) 
          </Typography>
            <Breadcrumbs separator="|"  aria-label="breadcrumb" >
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
      
      {/* <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright /> 
            </Box>
          </form>
        </div>
      </Grid> */}


    </Grid>
  );
}


//   <div style={styles}>
//   {/* <Hello name="Parallax" /> */}
//   <Parallax bgImage={image1} strength={500}>
//     <div style={{ height: 500 }}>
//       <div style={insideStyles}>HTML inside the parallax</div>
//     </div>
//   </Parallax>


// import React from 'react';
// import { Parallax, Background } from 'react-parallax';

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };
// const insideStyles = {
//   background: "white",
//   padding: 20,
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%,-50%)"
// };

// const image1 =
//   "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
// const image2 =
//   "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
// const image3 =
//   "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
// const image4 =
//   "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";


// const MyComponent = () => (
//   <div style={styles}>
//   {/* <Hello name="Parallax" /> */}
//   <Parallax bgImage={image1} strength={500}>
//     <div style={{ height: 500 }}>
//       <div style={insideStyles}>HTML inside the parallax</div>
//     </div>
//   </Parallax>
//   <h1>| | |</h1>
//   <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
//     <div style={{ height: 500 }}>
//       <div style={insideStyles}>Dynamic Blur</div>
//     </div>
//   </Parallax>
//   <h1>| | |</h1>
//   <Parallax bgImage={image2} strength={-100}>
//     <div style={{ height: 500 }}>
//       <div style={insideStyles}>Reverse direction</div>
//     </div>
//   </Parallax>
//   <h1>| | |</h1>
//   <Parallax
//     bgImage={image4}
//     strength={200}
//     renderLayer={percentage => (
//       <div>
//         <div
//           style={{
//             position: "absolute",
//             background: `rgba(255, 125, 0, ${percentage * 1})`,
//             left: "50%",
//             top: "50%",
//             borderRadius: "50%",
//             transform: "translate(-50%,-50%)",
//             width: percentage * 500,
//             height: percentage * 500
//           }}
//         />
//       </div>
//     )}
//   >
//     <div style={{ height: 500 }}>
//       <div style={insideStyles}>renderProp</div>
//     </div>
//   </Parallax>
//   <div style={{ height: 500 }} />
//   <h2>{"\u2728"}</h2>
// </div>

// );
// export default MyComponent;