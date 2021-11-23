import logo from './logo.svg';
import {Container , AppBar , Typography , Grow , Grid} from '@material-ui/core';
import './App.css';
import { mergeClasses } from '@material-ui/styles';
import FlightShow from './components/showFlight/showFlight.js';//8alta hena bardo
import FlightCreate from './components/createFlight/createFlight.js';
import useStyles from './styles.js';

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
<AppBar className={classes.appBar} position='static' color='inherit'>
  <Typography className={classes.heading} variant="h2" align="center"> Flights Create & Show </Typography>
</AppBar>

<Grow in>
      <Container>
        <Grid Container justify="space between" alighItems="strect">
          <Grid item xs={12} sm={7}>
            <AppBar className={classes.appBar} position="static" color="inherit">
              <FlightShow />
              </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
              <AppBar className={classes.appBar} position="static" color="inherit">
                <FlightCreate />
              </AppBar>
        </Grid></Grid>
      </Container>
      </Grow>
      </Container>
    </div>
  );
}

export default App;
