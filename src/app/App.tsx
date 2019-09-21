import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import store from "./store";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './Theme'
import About from "../component/About";
import Top from "../component/top/Top";
import Header from "../component/Header";
import GlobalStyle from "../globalStyle";

const App: React.FC = () => {
  return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <GlobalStyle />
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={Top} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        </Provider>
      </MuiThemeProvider>
  )
};

export default App;
