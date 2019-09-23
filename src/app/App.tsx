import React from 'react';
import './App.scss';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from "./store";
import {MuiThemeProvider} from '@material-ui/core/styles';
import {theme} from './Theme'
import About from "../component/top/inTab/About";
import Top from "../component/top/Top";
import Header from "../component/Header";
import GlobalStyle from "../globalStyle";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Footer from "../component/Footer";

library.add(fas, fab);

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
                    <Footer />
                </div>
            </Router>
        </Provider>
      </MuiThemeProvider>
  )
};

export default App;
