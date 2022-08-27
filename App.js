import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '50px',
  },
  heading: {
   color: '#F2FDFF !important'
  }
}))

function App() {

  const classes = useStyles()

  return (
    <div className="App">
      <Container maxWidth="lg">
        <div>
          <h1>
          </h1>
        </div>
      </Container>
    </div>
  );
}

export default App;
