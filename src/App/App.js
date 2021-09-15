import React from 'react';
import './App.css';
import SideMenu from '../components/SideMenu';
import { makeStyles, CssBaseline, createMuiTheme } from '@material-ui/core';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';

import Employees from "../pages/Employees/Employees";

const theme = createMuiTheme({
  palete:{
    primary:{
      main: "#FF0000",
      light: '#3c44b126'
    },
    secondary:{
      main: "#f83245",
      light: '#f8324526'
    },
    background:{
      default:"#f4f5fd"
    },


  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})

const useStyles = makeStyles({
  appMain:{
    paddingLeft: '320px',
    width: '100%'
  }
})
function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
